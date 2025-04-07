import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { getTagFromType, getTypeTranslation } from '@/common/utils/tag';
import { PokemonType } from '@/common/utils/types';
import { Translate } from './Detail';

type WeaknessesProps = Translate & {
  weaknesses: string[];
  themeColor: string;
};

function Weaknesses({ weaknesses, themeColor, translate }: WeaknessesProps) {
  return (
    <View style={styles.secondBlockInfoContainer}>
      <Text
        style={[
          styles.title,
          {
            color: themeColor,
          },
        ]}
      >
        {translate('detail.weaknesses')}
      </Text>

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
                {translate(getTypeTranslation(weakness))}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

export { Weaknesses };
