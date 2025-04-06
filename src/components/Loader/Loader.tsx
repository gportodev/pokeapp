import React, { useEffect, useMemo } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import styles from './styles';

import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  withRepeat,
  ReduceMotion,
} from 'react-native-reanimated';
import img from '../../../assets/icon.png';
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

  useEffect(() => {
    sv.value = withRepeat(
      withTiming(1, { duration }),
      -1,
      false,
      () => {},
      ReduceMotion.System,
    );
  }, [sv]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${sv.value * 360}deg` }],
  }));

  const renderLoad = useMemo(() => {
    return (
      <View style={styles.container}>
        <Animated.Image
          source={img}
          style={[
            {
              width,
              height,
            },
            animatedStyle,
          ]}
        />

        {loadingText && <Text style={styles.loadingText}>{loadingText}</Text>}
      </View>
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
