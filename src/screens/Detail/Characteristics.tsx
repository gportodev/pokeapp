import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Translate } from '.';

type CharacteristicsProps = Translate & {
  height: number;
  weight: number;
  themeColor: string;
};

function Characteristics({
  height,
  weight,
  themeColor,
  translate,
}: CharacteristicsProps): JSX.Element {
  return (
    <View style={styles.firstBlockInfoContainer}>
      <View
        style={{
          flexDirection: 'row',
          gap: 32,
        }}
      >
        <Text
          style={[
            styles.label,
            {
              color: themeColor,
            },
          ]}
        >
          {translate('detail.characteristics.height') + ':'}
          <Text
            style={[
              styles.value,
              {
                color: themeColor,
              },
            ]}
          >
            {' ' + (height / 10).toFixed(1)}m
          </Text>
        </Text>
        <Text
          style={[
            styles.label,
            {
              color: themeColor,
            },
          ]}
        >
          {translate('detail.characteristics.weight') + ':'}

          <Text
            style={[
              styles.value,
              {
                color: themeColor,
              },
            ]}
          >
            {' ' + (weight * 0.1).toFixed(1)}kg
          </Text>
        </Text>
      </View>
    </View>
  );
}

export { Characteristics };
