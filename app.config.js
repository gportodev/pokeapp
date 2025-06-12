const background = '#CE0000';

//trim() para o "development "
// console.log(`[${process.env.APP_VARIANT}]`);
const APP_VARIANT = (process.env.APP_VARIANT || '').trim();

const PACKAGE_NAME = 'com.gamonpo.pokeapp';

const IS_DEV =
  APP_VARIANT === 'development' || APP_VARIANT === 'preview'
    ? PACKAGE_NAME + '.dev'
    : false;

const BUNDLE_IDENTIFIER = IS_DEV || PACKAGE_NAME;

module.exports = {
  expo: {
    name: 'pokeapp',
    slug: 'pokeapp',
    version: '1.0.6',
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: background,
    },
    updates: {
      fallbackToCacheTimeout: 0,
      url: 'https://u.expo.dev/ee361421-8b4b-4ead-b120-bf0a6dc03140',
    },
    runtimeVersion: {
      policy: 'appVersion',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: BUNDLE_IDENTIFIER,
    },
    android: {
      package: BUNDLE_IDENTIFIER,
      versionCode: 3,
      permissions: [],
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: background,
      },
    },
    web: {},
    plugins: ['expo-asset', 'expo-font', 'expo-localization'],
    extra: {
      eas: {
        projectId: 'ee361421-8b4b-4ead-b120-bf0a6dc03140',
      },
    },
    newArchEnabled: true,
    jsEngine: 'hermes',
    userInterfaceStyle: 'automatic',
  },
};
