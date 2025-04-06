import React from 'react';
import styles from './styles';
import { View, Text } from 'react-native';
import { PokemonAbility } from '@/dtos/PokemonAbilityDTO';
import { formatNameToShow } from '@/common/utils/format';
import { Translate } from './Detail';
import { getAbilityTranslation } from '@/common/utils/abilities';

type AbilitiesProps = Translate & {
  abilities: PokemonAbility[];
  themeColor: string;
};

function Abilities({ abilities, themeColor, translate }: AbilitiesProps) {
  return (
    <View
      style={{
        marginTop: 32,
        gap: 16,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={[
          styles.title,
          {
            color: themeColor,
          },
        ]}
      >
        {translate('detail.abilities.title')}
      </Text>

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
              <View
                key={name}
                style={[
                  styles.tagAbilityContainer,
                  {
                    borderColor: themeColor,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.tagAbilityText,
                    {
                      color: themeColor,
                    },
                  ]}
                >
                  {formatNameToShow(translate(getAbilityTranslation(name)))}
                </Text>
              </View>
            );
          })}
      </View>
    </View>
  );
}

export { Abilities };
