import React, { JSX, useEffect, useMemo } from 'react';
import { Text, SafeAreaView, ImageBackground } from 'react-native';

import styles from './styles';

import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  withRepeat,
  ReduceMotion,
} from 'react-native-reanimated';
import bg from '../../../src/assets/icons/png/bg.png';
import logo from '../../../src/assets/icons/png/logo.png';
import { useTheme } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import { usePokemon } from '@/context/pokemons';

type LoaderProps = {
  width?: number;
  height?: number;
  loadingText?: string;
  fullScreen?: boolean;
  showProgressBar?: boolean;
  progress?: number;
  total?: number;
};

function Loader({
  width = 100,
  height = 100,
  loadingText = '',
  fullScreen = false,
  showProgressBar = false,
  progress = 0,
  total = 0,
}: LoaderProps): JSX.Element {
  const { setLoading } = usePokemon();
  const { colors } = useTheme();
  const duration = 1000;

  const sv = useSharedValue<number>(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1000 },
      {
        rotateY: `${sv.value}deg`,
      },
    ],
  }));

  const calculatedProgress = total === 0 ? 0 : progress / total;

  useEffect(() => {
    sv.value = withRepeat(
      withTiming(360, { duration }),
      -1,
      false,
      () => { },
      ReduceMotion.System,
    );
  }, [sv]);

  useEffect(() => {
    if (calculatedProgress >= 1) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  });

  const renderLoad = useMemo(() => {
    return (
      <ImageBackground style={styles.container} source={bg}>
        <Animated.Image
          source={logo}
          style={[
            {
              width,
              height,
            },
            animatedStyle,
          ]}
        />

        {loadingText && <Text style={styles.loadingText}>{loadingText}</Text>}

        {showProgressBar && (
          // <Progress.Bar progress={calculatedProgress} width={200} />
          <Progress.Circle
            size={100}
            thickness={10}
            showsText
            progress={calculatedProgress}
          />
        )}
      </ImageBackground>
    );
  }, [
    animatedStyle,
    calculatedProgress,
    height,
    loadingText,
    showProgressBar,
    width,
  ]);

  return fullScreen ? (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      {renderLoad}
    </SafeAreaView>
  ) : (
    renderLoad
  );
}

export { Loader };
