const background = '#CE0000';

module.exports = {
  expo: {
    name: 'pokeapp',
    slug: 'pokeapp',
    version: '1.0.4',
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
    },
    android: {
      package: 'com.gamonpo.pokeapp',
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
