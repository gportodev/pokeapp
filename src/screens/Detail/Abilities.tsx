import React from 'react';
import styles from './styles';
import { View, Text } from 'react-native';
import { PokemonAbility } from '@/dtos/PokemonAbilityDTO';
import { formatNameToShow } from '@/common/utils/format';

type AbilitiesProps = {
  abilities: PokemonAbility[];
};

function Abilities({ abilities }: AbilitiesProps) {
  return (
    <View
      style={{
        marginTop: 32,
        gap: 16,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={styles.title}>Abilities</Text>

      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          flexWrap: 'wrap',
        }}
      >
        {abilities.length > 0 &&
          abilities.map(item => {
            const { ability } = item;

            const { name } = ability;

            return (
              <View key={name} style={styles.tagAbilityContainer}>
                <Text style={styles.tagAbilityText}>
                  {formatNameToShow(name)}
                </Text>
              </View>
            );
          })}
      </View>
    </View>
  );
}

export { Abilities };
