import React, { JSX, useEffect } from 'react';

import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  withRepeat,
  ReduceMotion,
} from 'react-native-reanimated';

import logo from '../../../src/assets/icons/png/logo.png';

type AnimatedLogoProps = {
  width?: number;
  height?: number;
  onFinish: (value: boolean) => void;
};

function AnimatedLogo({
  width = 100,
  height = 100,
}: AnimatedLogoProps): JSX.Element {
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
      () => { },
      ReduceMotion.System,
    );
  }, [sv]);

  return (
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
  );
}

export { AnimatedLogo };
