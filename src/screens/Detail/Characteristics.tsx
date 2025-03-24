import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

type CharacteristicsProps = {
  height: number;
  weight: number;
};

function Characteristics({
  height,
  weight,
}: CharacteristicsProps): JSX.Element {
  return (
    <View style={styles.firstBlockInfoContainer}>
      <View
        style={{
          flexDirection: 'row',
          gap: 32,
        }}
      >
        <Text style={styles.label}>
          Height:
          <Text style={styles.value}>{' ' + (height / 10).toFixed(1)}m</Text>
        </Text>
        <Text style={styles.label}>
          Weight:
          <Text style={styles.value}>{' ' + (weight * 0.1).toFixed(1)}kg</Text>
        </Text>
      </View>
    </View>
  );
}

export { Characteristics };
