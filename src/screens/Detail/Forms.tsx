import React, { useCallback, useEffect, useMemo, useState } from 'react';
import api from '@/services/api';
import { View, Text, FlatList, Alert } from 'react-native';
import { PokemonDTO } from '@/dtos/PokemonDTO';
import styles from './styles';

import { PokemonSpeciesDTO } from '@/dtos/PokemonSpeciesDTO';
import { Pokemon } from '@/components/Pokemon';
import { usePokemon } from '@/context/pokemons';
import { Loader } from '@/components/Loader';

type FormsProps = {
  pokemon: PokemonDTO;
  onPress: (pokemon: PokemonDTO) => void;
};

function Forms({ pokemon, onPress }: FormsProps): JSX.Element {
  const { pokemonList } = usePokemon();
  const [forms, setForms] = useState<PokemonDTO[]>([]);
  const { name, id, is_default, displayName, species } = pokemon;
  const [loading, setLoading] = useState(false);

  // Catch pokemons forms to not default forms
  // Ex: ogerpon
  const getNotDefaultPokemonForms = useCallback(() => {
    const pokemonForms = pokemonList
      .filter(pokemon => {
        return species.name === pokemon.species.name;
      })
      .filter(pokemon => pokemon.displayName !== displayName);

    setForms(pokemonForms);
    setLoading(false);
  }, [displayName, pokemonList, species.name]);

  const getDefaultPokemonForms = useCallback(async () => {
    try {
      setLoading(true);

      const speciesResponse = await api.get<PokemonSpeciesDTO>(
        `/pokemon-species/${id}`,
      );

      const { varieties } = speciesResponse.data;

      const forms = varieties
        .map(variety => ({
          name: variety.pokemon.name,
        }))
        .filter(pokemonVariety => pokemonVariety.name !== name);

      if (forms.length > 0) {
        const pokemonForms = forms.map(formName => {
          const findPokemon = pokemonList.find(
            pokemon => pokemon.name === formName.name,
          );

          if (findPokemon) {
            return findPokemon;
          }

          return;
        });

        setForms(pokemonForms.filter(Boolean) as PokemonDTO[]);
      }
    } catch (error) {
      Alert.alert('Error', 'Could not fetching forms');
    } finally {
      setLoading(false);
    }
  }, [id, name, pokemonList]);

  const renderItem = useCallback(
    ({ item }: { item: PokemonDTO }) => {
      return <Pokemon item={item} onPress={onPress} />;
    },
    [onPress],
  );

  const renderEmpty = useMemo(() => {
    return (
      <View>
        <Text>No forms found</Text>
      </View>
    );
  }, []);

  const renderForms = useMemo(
    () => (
      <FlatList
        data={forms}
        renderItem={renderItem}
        contentContainerStyle={styles.evolutionContainer}
        keyExtractor={(item: PokemonDTO) => item.id.toString()}
        horizontal
        ListEmptyComponent={renderEmpty}
      />
    ),
    [forms, renderEmpty, renderItem],
  );

  const renderLoading = useMemo(
    () => (
      <View>
        <Loader height={70} width={70} loadingText="Loading forms..." />
      </View>
    ),
    [],
  );

  useEffect(() => {
    if (is_default) {
      getDefaultPokemonForms();
    } else {
      getNotDefaultPokemonForms();
    }
  }, [getDefaultPokemonForms, getNotDefaultPokemonForms, is_default]);

  return (
    <View style={styles.fourthBlockInfoContainer}>
      <Text style={styles.title}>Forms</Text>

      {loading ? renderLoading : renderForms}
    </View>
  );
}

export { Forms };
