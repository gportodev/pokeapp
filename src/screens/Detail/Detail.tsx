import React from 'react';

import { View, Text, SafeAreaView, ScrollView } from 'react-native';

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

function Detail({ navigation, route }: DetailProps): JSX.Element {
  const { item } = route.params;

  const {
    id,
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
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header item={item} onPress={goBack} />

        <View style={styles.infoContainer}>
          <View style={styles.infoHeaderContainer}>
            <Text style={styles.infoHeaderId}>{'#' + id.toString()}</Text>

            <Text style={styles.infoHeaderName}>{displayName}</Text>
          </View>

          <Types types={types} />

          <Characteristics height={height} weight={weight} />

          <Abilities abilities={abilities} />

          <Weaknesses weaknesses={weaknesses} />

          <Stats stats={stats} />
        </View>

        <Evolutions pokemon={item} onPress={onPress} />

        <Forms pokemon={item} onPress={onPress} />
      </ScrollView>
    </SafeAreaView>
  );
}

export { Detail };
