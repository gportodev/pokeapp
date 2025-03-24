import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { PokemonTypeDTO } from '@/dtos/PokemonTypeDTO';
import { getTagFromType } from '@/common/utils/tag';
import { PokemonType } from '@/common/utils/types';

type TypeProps = {
  types: PokemonTypeDTO[];
};

function Types({ types }: TypeProps) {
  return (
    <View style={styles.infoSubHeaderContainer}>
      {types.map(item => {
        const type = item.type.name;

        return (
          <View
            key={item.type.name}
            style={[
              styles.tagTypeContainer,
              {
                backgroundColor: getTagFromType(type as PokemonType).background,
              },
            ]}
          >
            <Text
              style={[
                styles.tagTypeText,
                {
                  color: getTagFromType(type as PokemonType).text,
                },
              ]}
            >
              {type}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

export { Types };
