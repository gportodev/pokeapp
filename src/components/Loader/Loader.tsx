import React, { useEffect, useMemo } from 'react';
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

type LoaderProps = {
  width?: number;
  height?: number;
  loadingText?: string;
  fullScreen?: boolean;
};

function Loader({
  width = 100,
  height = 100,
  loadingText = '',
  fullScreen = false,
}: LoaderProps): JSX.Element {
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

  useEffect(() => {
    sv.value = withRepeat(
      withTiming(360, { duration }),
      -1,
      false,
      () => {},
      ReduceMotion.System,
    );
  }, [sv]);

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
      </ImageBackground>
    );
  }, [animatedStyle, height, loadingText, width]);

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
