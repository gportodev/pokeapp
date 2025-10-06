import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';
import colors from '@/constants/colors';
import { Fonts } from '@/constants/fonts';

export type CustomTheme = Theme & {
  colors: Theme['colors'] & {
    header: {
      background: string;
      borderBottomColor: string;
    };
    input: {
      background: string;
      borderColor: string;
      text: string;
      placeHolderTextColor: string;
    };
    filter: {
      placeholderText: string;
      listText: string;
    };
    icon: {
      default: string;
      search: string;
      sad: string;
    };
    customCard: {
      background: string;
      elevation: number;
    };
    drawer: {
      background: string;
      text: string;
    };
    screen: {
      detail: {
        id: string;
        text: string;
      };
      settings: {
        background: string;
        header: {
          background: string;
        };
        text: string;
        dropdown: {
          activeItem: string;
        };
      };
    };
  };
};

const lightTheme: CustomTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    ...colors.theme.light,
  },
  fonts: {
    regular: {
      fontFamily: Fonts.inter_regular,
      fontWeight: '400',
    },
    medium: {
      fontFamily: Fonts.inter_medium,
      fontWeight: '500',
    },
    bold: {
      fontFamily: Fonts.inter_semibold,
      fontWeight: '600',
    },
    heavy: {
      fontFamily: Fonts.montserrat_bold,
      fontWeight: '700',
    },
  },
};

const darkTheme: CustomTheme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    ...colors.theme.dark,
  },
  fonts: {
    regular: {
      fontFamily: Fonts.inter_regular,
      fontWeight: '400',
    },
    medium: {
      fontFamily: Fonts.inter_medium,
      fontWeight: '500',
    },
    bold: {
      fontFamily: Fonts.inter_semibold,
      fontWeight: '600',
    },
    heavy: {
      fontFamily: Fonts.montserrat_bold,
      fontWeight: '700',
    },
  },
};

type ThemeContextType = {
  theme: CustomTheme;
  storeTheme: (value: boolean) => void;
};

const defaultValue: ThemeContextType = {
  theme: lightTheme,
  storeTheme: () => {},
};

const ThemeContext = createContext(defaultValue);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<CustomTheme>(lightTheme);

  const themeMap: Record<'light' | 'dark', CustomTheme> = useMemo(() => {
    return {
      light: lightTheme,
      dark: darkTheme,
    };
  }, []);

  const getTheme = useCallback(async () => {
    const savedTheme = (await AsyncStorage.getItem('theme')) as
      | 'light'
      | 'dark';

    if (savedTheme && themeMap[savedTheme]) {
      setTheme(themeMap[savedTheme]);
    }
  }, [themeMap]);

  const storeTheme = async (useDark: boolean) => {
    const selectedTheme = useDark ? 'dark' : 'light';

    setTheme(themeMap[selectedTheme]);

    await AsyncStorage.setItem('theme', selectedTheme);
  };

  useEffect(() => {
    getTheme();
  }, [getTheme]);

  return (
    <ThemeContext.Provider value={{ theme, storeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  return context;
};
