import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import Constants from 'expo-constants';
import VersionCheck from 'react-native-version-check';
import { Platform } from 'react-native';
import { UpdateModal } from '@/components/UpdateModal';

type UpdateProps = {
  children: ReactNode;
};

type UpContext = {
  hasUpdate: boolean;
  setHasUpdate: (value: boolean) => void;
};

const defaultValue: UpContext = {
  hasUpdate: false,
  setHasUpdate: () => {},
};

const UpdateContext = createContext(defaultValue);

function UpdateProvider({ children }: UpdateProps): JSX.Element {
  const [hasUpdate, setHasUpdate] = useState(false);

  const checkForUpdate = async () => {
    try {
      const androidPackage = Constants.expoConfig?.android?.package;

      if (!androidPackage) return;

      const currentVersion = Constants.expoConfig?.version;

      if (!currentVersion) return;

      const latestVersion = await VersionCheck.getLatestVersion({
        provider: Platform.OS === 'android' ? 'playStore' : 'appStore',
        packageName: Platform.OS === 'android' ? androidPackage : '',
      });

      setHasUpdate(latestVersion > currentVersion);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkForUpdate();
  }, []);

  return (
    <UpdateContext.Provider value={{ hasUpdate, setHasUpdate }}>
      <UpdateModal hasUpdate={hasUpdate} setHasUpdate={setHasUpdate} />
      {children}
    </UpdateContext.Provider>
  );
}

function useUpdate() {
  const context = useContext(UpdateContext);

  return context;
}

export { useUpdate, UpdateProvider };
