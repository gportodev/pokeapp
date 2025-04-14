import { LogoBackground, LogoIcon } from '@/assets/icons/Loader';
import {
  DrawerContentComponentProps,
  DrawerItemList,
} from '@react-navigation/drawer';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, ImageBackground, Text } from 'react-native';

import styles from './styles';

function DrawerHeader(props: DrawerContentComponentProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={LogoBackground}
        resizeMode="cover"
        style={{
          height: 200,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <LogoIcon width={74} height={74} />

        <Text style={styles.subTitle}>{t('drawer.headerSubTitle')}</Text>
      </ImageBackground>

      <View>
        <DrawerItemList {...props} />
      </View>
    </View>
  );
}

export { DrawerHeader };
