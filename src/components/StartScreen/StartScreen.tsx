import React, { JSX, useEffect, useMemo } from 'react';
import { ImageBackground, Text, View } from 'react-native';

import start from '../../../src/assets/icons/png/start.png';
import { AnimatedLogo } from '../AnimatedLogo';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import { ProgressBar } from 'rn-inkpad';
import colors from '@/constants/colors';

type StartScreenProps = {
  onFinish: (value: boolean) => void;
  progress: number;
  total: number;
};

function StartScreen({
  onFinish,
  progress,
  total,
}: StartScreenProps): JSX.Element {
  const { t } = useTranslation();

  const calculatedProgress = useMemo(() => {
    if (total === 0) return 0;

    const result = (progress / total) * 100;

    return result;
  }, [progress, total]);

  useEffect(() => {
    if (total > 0 && progress === total) {
      setTimeout(() => {
        onFinish(false);
      }, 3000);
    }
  });

  return (
    <ImageBackground style={styles.container} source={start}>
      <AnimatedLogo onFinish={onFinish} />

      <View
        style={{
          gap: 10,
        }}
      >
        <Text style={styles.loadingTextTitle}>{t('home.loading.title')}</Text>

        <View
          style={{
            width: 200,
          }}
        >
          <ProgressBar
            value={calculatedProgress}
            rounded
            progressColor={colors.strong_blue}
            textColor={colors.black}
            showPercent
            height={30}
          />
        </View>

        <Text style={styles.loadingTextSubTitle}>
          ({t('home.loading.subTitle')})
        </Text>
      </View>
    </ImageBackground>
  );
}

export { StartScreen };
