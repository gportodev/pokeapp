import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { getTagFromType } from '@/common/utils/tag';
import { PokemonType } from '@/common/utils/types';

type WeaknessesProps = {
  weaknesses: string[];
};

function Weaknesses({ weaknesses }: WeaknessesProps) {
  return (
    <View style={styles.secondBlockInfoContainer}>
      <Text style={styles.title}>Weaknesses</Text>

      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          flexWrap: 'wrap',
        }}
      >
        {weaknesses.map(weakness => {
          return (
            <View
              key={weakness}
              style={[
                styles.tagTypeContainer,
                {
                  backgroundColor: getTagFromType(weakness as PokemonType)
                    .background,
                },
              ]}
            >
              <Text
                style={[
                  styles.tagTypeText,
                  {
                    color: getTagFromType(weakness as PokemonType).text,
                  },
                ]}
              >
                {weakness}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

export { Weaknesses };
