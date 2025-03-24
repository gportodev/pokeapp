const splashBackground = '#FF4C41';
const iconBackground = '#FFFFFF';

module.exports = {
  expo: {
    name: 'pokeapp',
    slug: 'pokeapp',
    version: '1.0.1',
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: splashBackground,
    },
    updates: {
      fallbackToCacheTimeout: 0,
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
        backgroundColor: iconBackground,
      },
    },
    web: {},
    plugins: ['expo-asset', 'expo-font'],
    extra: {
      eas: {
        projectId: 'ee361421-8b4b-4ead-b120-bf0a6dc03140',
      },
    },
    newArchEnabled: true,
    jsEngine: 'hermes',
  },
};
