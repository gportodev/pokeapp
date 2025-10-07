import React, { JSX } from 'react';

import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

import { Header } from './Header';
import { DetailProps } from '@/routes/types';
import { Stats } from './Stats';
import { Weaknesses } from './Weaknesses';
import { Characteristics } from './Characteristics';
import { Types } from './Types';
import { Evolutions } from './Evolutions';
import { PokemonDTO } from '@/dtos/PokemonDTO';
import { Forms } from './Forms';
import { Abilities } from './Abilities';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import { useTheme } from '@/context/theme';

export type Translate = {
  translate: TFunction<'translation', undefined>;
};

function Detail({ navigation, route }: DetailProps): JSX.Element {
  const { item } = route.params;
  const { theme } = useTheme();
  const { t } = useTranslation();

  const themeMode = theme.colors.screen.detail.text;

  const {
    displayId,
    displayName,
    height,
    types,
    weight,
    abilities,
    weaknesses,
    stats,
  } = item;

  const onPress = (item: PokemonDTO) => {
    navigation.replace('Detail', {
      item,
    });
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
        },
      ]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header item={item} onPress={goBack} />

        <View style={styles.infoContainer}>
          <View style={styles.infoHeaderContainer}>
            <Text
              style={[
                styles.infoHeaderId,
                {
                  color: theme.colors.screen.detail.id,
                },
              ]}
            >
              {'#' + displayId}
            </Text>

            <Text
              style={[
                styles.infoHeaderName,
                {
                  color: themeMode,
                },
              ]}
            >
              {displayName}
            </Text>
          </View>

          <Types types={types} translate={t} />

          <Characteristics
            height={height}
            weight={weight}
            themeColor={themeMode}
            translate={t}
          />

          <Abilities
            abilities={abilities}
            themeColor={themeMode}
            translate={t}
          />

          <Weaknesses
            weaknesses={weaknesses}
            themeColor={themeMode}
            translate={t}
          />

          <Stats stats={stats} themeMode={themeMode} translate={t} />
        </View>

        <Evolutions
          pokemon={item}
          onPress={onPress}
          themeColor={themeMode}
          translate={t}
        />

        <Forms
          pokemon={item}
          onPress={onPress}
          themeColor={themeMode}
          translate={t}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export { Detail };
