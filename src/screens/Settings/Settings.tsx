import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ArrowIcon } from '@/assets/icons/Loader';
import { useTheme } from '@/context/theme';
import { Switch } from './Switch';
import { SettingsProps } from '@/routes/types';
import { Language } from './Language';
import { SafeAreaView } from 'react-native-safe-area-context';

function Settings({ navigation }: SettingsProps): JSX.Element {
  const { theme: themeMode } = useTheme();
  const { t } = useTranslation();

  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: themeMode.colors.screen.settings.background,
        },
      ]}
    >
      <View
        style={[
          styles.headerContainer,
          {
            backgroundColor: themeMode.colors.screen.settings.header.background,
            paddingTop: insets.top * 2,
          },
        ]}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowIcon color={themeMode.colors.icon.default} />
        </TouchableOpacity>

        <Text
          style={[
            styles.headerTitle,
            {
              color: themeMode.colors.screen.settings.text,
            },
          ]}
        >
          {t('settings.title')}
        </Text>
      </View>

      <View
        style={[
          styles.innerContainer,
          {
            backgroundColor: themeMode.colors.screen.settings.background,
          },
        ]}
      >
        <View
          style={{
            gap: 10,
          }}
        >
          <Text
            style={[
              styles.title,
              {
                color: themeMode.colors.screen.settings.text,
              },
            ]}
          >
            {t('settings.language.title')}
          </Text>

          <Language />

          <Text
            style={[
              styles.title,
              {
                color: themeMode.colors.screen.settings.text,
              },
            ]}
          >
            {t('settings.theme.title')}
          </Text>

          <Switch />
        </View>
      </View>
    </SafeAreaView>
  );
}

export { Settings };
