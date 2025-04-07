import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { PokemonTypeDTO } from '@/dtos/PokemonTypeDTO';
import { getTagFromType, getTypeTranslation } from '@/common/utils/tag';
import { PokemonType } from '@/common/utils/types';
import { Translate } from './Detail';

type TypeProps = Translate & {
  types: PokemonTypeDTO[];
};

function Types({ types, translate }: TypeProps) {
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
              {translate(getTypeTranslation(type))}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

export { Types };
