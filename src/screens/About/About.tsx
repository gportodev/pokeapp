import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ArrowIcon } from '@/assets/icons/Loader';
import { useTheme } from '@/context/theme';
import { AboutProps } from '@/routes/types';
import Constants from 'expo-constants';

function About({ navigation }: AboutProps): JSX.Element {
  const { theme: themeMode } = useTheme();
  const { t } = useTranslation();

  const insets = useSafeAreaInsets();

  const version = Constants.expoConfig?.version ?? '';

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
          {t('about.title')}
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
        <ScrollView>
          <View
            style={{
              gap: 10,
              paddingVertical: 32,
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
              {t('about.legal.title')}
            </Text>

            <Text
              style={[
                styles.description,
                {
                  color: themeMode.colors.screen.settings.text,
                },
              ]}
            >
              {t('about.legal.description')}
            </Text>

            <Text
              style={[
                styles.title,
                {
                  color: themeMode.colors.screen.settings.text,
                },
              ]}
            >
              {t('about.version.title')}
            </Text>

            <Text
              style={[
                styles.text,
                {
                  color: themeMode.colors.screen.settings.text,
                },
              ]}
            >
              {version}
            </Text>

            <Text
              style={[
                styles.title,
                {
                  color: themeMode.colors.screen.settings.text,
                },
              ]}
            >
              {t('about.privacy.title')}
            </Text>

            <TouchableOpacity
              onPress={async () =>
                await Linking.openURL(
                  'https://www.freeprivacypolicy.com/live/64bce1a2-ec55-49cd-9c62-c187a06694a1',
                )
              }
            >
              <Text style={styles.text}>{t('about.privacy.description')}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export { About };
