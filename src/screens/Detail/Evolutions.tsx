import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { PokemonDTO } from '@/dtos/PokemonDTO';
import styles from './styles';

import { Pokemon } from '@/components/Pokemon';
import { usePokemon } from '@/context/pokemons';
import { Translate } from './Detail';

type EvolutionsProps = Translate & {
  pokemon: PokemonDTO;
  onPress: (pokemon: PokemonDTO) => void;
  themeColor: string;
};

function Evolutions({
  pokemon,
  onPress,
  themeColor,
  translate,
}: EvolutionsProps): JSX.Element {
  const { pokemonList } = usePokemon();
  const { evolutions } = pokemon;
  const [list, setList] = useState<PokemonDTO[]>([]);

  const renderItem = useCallback(
    ({ item }: { item: PokemonDTO }) => {
      return <Pokemon item={item} onPress={onPress} />;
    },
    [onPress],
  );

  const renderEmpty = useMemo(() => {
    return (
      <View>
        <Text
          style={{
            color: themeColor,
          }}
        >
          {translate('detail.evolutions.error')}
        </Text>
      </View>
    );
  }, [themeColor, translate]);

  const renderEvolutions = useMemo(
    () => (
      <FlatList
        data={list}
        renderItem={renderItem}
        ListEmptyComponent={renderEmpty}
        contentContainerStyle={styles.evolutionContainer}
        keyExtractor={(item: PokemonDTO) => item.id.toString()}
        horizontal
      />
    ),
    [list, renderEmpty, renderItem],
  );

  useEffect(() => {
    if (evolutions && evolutions?.length > 0) {
      const result = evolutions
        .map(evolution => {
          const findEvolution = pokemonList.find(
            pokemon => pokemon.name === evolution,
          );

          if (!findEvolution) return null;

          return findEvolution;
        })
        .filter(Boolean) as PokemonDTO[];

      setList(result);
    }
  }, [evolutions, pokemonList]);

  return (
    <View style={styles.fourthBlockInfoContainer}>
      <Text
        style={[
          styles.title,
          {
            color: themeColor,
          },
        ]}
      >
        {translate('detail.evolutions.title')}
      </Text>

      {renderEvolutions}
    </View>
  );
}

export { Evolutions };
