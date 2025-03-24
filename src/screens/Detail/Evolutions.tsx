import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { PokemonDTO } from '@/dtos/PokemonDTO';
import styles from './styles';

import { Pokemon } from '@/components/Pokemon';
import { usePokemon } from '@/context/pokemons';

type EvolutionsProps = {
  pokemon: PokemonDTO;
  onPress: (pokemon: PokemonDTO) => void;
};

function Evolutions({ pokemon, onPress }: EvolutionsProps): JSX.Element {
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
        <Text>No evolutions found</Text>
      </View>
    );
  }, []);

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
      <Text style={styles.title}>Family tree</Text>

      {renderEvolutions}
    </View>
  );
}

export { Evolutions };
