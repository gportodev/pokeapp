import React, {
  createContext,
  JSX,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import * as StoreReview from 'expo-store-review';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
  setHasUpdate: () => { },
};

const UpdateContext = createContext(defaultValue);

const reviewKey = 'lastReviewDate';
const cooldown = 30;

function UpdateProvider({ children }: UpdateProps): JSX.Element {
  const [hasUpdate, setHasUpdate] = useState(false);

  const checkForUpdate = async () => {
    try {
      const androidPackage = Constants.expoConfig?.android?.package;

      if (!androidPackage || androidPackage.includes('dev')) return;

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

  const requestStoreReview = async () => {
    try {
      const isAvailable = await StoreReview.isAvailableAsync();

      if (!isAvailable) return;

      const lastReview = await AsyncStorage.getItem(reviewKey);

      if (lastReview) {
        const lastDate = new Date(lastReview);

        const now = new Date();

        const daysDiff =
          (now.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24);

        if (daysDiff < cooldown) {
          return;
        }
      }

      await StoreReview.requestReview();

      await AsyncStorage.setItem(reviewKey, new Date().toISOString());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(async () => {
      const androidPackage = Constants.expoConfig?.android?.package;

      if (!androidPackage || androidPackage.includes('dev')) return;

      await requestStoreReview();
    }, 5000);

    checkForUpdate();

    return () => clearTimeout(timeout);
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
