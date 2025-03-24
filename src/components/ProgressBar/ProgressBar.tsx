import React, { useCallback, useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import styles from './styles';

type ProgressBarProps = {
  progress: number;
};

function ProgressBar({ progress }: ProgressBarProps): JSX.Element {
  const maxWidth = 36;

  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: progress,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [animatedValue, progress]);

  const renderBlocks = useCallback(() => {
    return (
      <>
        {[...Array(5)].map((_, index) => {
          const width = animatedValue.interpolate({
            inputRange: [index * maxWidth, (index + 1) * maxWidth],
            outputRange: [0, maxWidth],
            extrapolate: 'clamp',
          });

          return (
            <View key={index} style={styles.container}>
              <Animated.View
                style={[
                  styles.progressContainer,
                  {
                    width,
                  },
                ]}
              />
            </View>
          );
        })}
      </>
    );
  }, [animatedValue]);

  return (
    <View
      style={{
        flexDirection: 'row',
      }}
    >
      {renderBlocks()}
    </View>
  );
}

export { ProgressBar };
