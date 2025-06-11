import React, {
  createContext,
  JSX,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '@/i18n';

type LanguageProps = {
  children: ReactNode;
};

type LangContext = {
  locale: string;
  changeLanguage: (value: string) => void;
};

const defaultValue: LangContext = {
  locale: '',
  changeLanguage: () => { },
};

const LanguageContext = createContext(defaultValue);

function LanguageProvider({ children }: LanguageProps): JSX.Element {
  const [locale, setLocale] = useState(i18n.language);

  const changeLanguage = async (language: string) => {
    await AsyncStorage.setItem('language', language);
    setLocale(language);
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    const loadLanguage = async () => {
      const savedLanguage = await AsyncStorage.getItem('language');

      if (savedLanguage) {
        i18n.changeLanguage(savedLanguage);
      }
    };

    loadLanguage();
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

function useLanguage() {
  const context = useContext(LanguageContext);

  return context;
}

export { useLanguage, LanguageProvider };
