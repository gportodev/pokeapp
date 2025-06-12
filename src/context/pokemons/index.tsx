import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
  JSX,
} from 'react';
import { PokemonDTO } from '@/dtos/PokemonDTO';
import api from '@/services/api';
import { PokemonsDTO } from '@/dtos/PokemonsDTO';
import { Alert } from 'react-native';
import { usePokemonDatabase } from '@/database/usePokemonDatabase';
import _ from 'lodash';

import { PokemonListContext, PokemonProps } from './types';
import { saveImage } from '@/common/utils/file';
import { formatNameToShow } from '@/common/utils/format';
import { PokemonSpeciesDTO } from '@/dtos/PokemonSpeciesDTO';
import { PokemonEvolutionChainDTO } from '@/dtos/PokemonEvolutionChainDTO';
import {
  nameFromChainList,
  listForApiMisleadingEvolution,
  correctGalarPokemonsTree,
  checkAlolaEvolution,
  checkGalarEvolution,
  checkHisuiEvolution,
  checkNormalEvolution,
  countUniqueSpecies,
} from '@/common/utils/evolutions';
import { useTranslation } from 'react-i18next';
import { StartScreen } from '@/components/StartScreen';
// import { validatePokemonEvolutions } from '@/common/utils/validation';

const defaultValue: PokemonListContext = {
  pokemonList: [],
  setPokemonList: () => { },
  loading: false,
  pokemonLength: 0,
  wantedPokemon: '',
  setWantedPokemon: () => { },
  setLoading: () => { },
  monitorProgress: 0,
  total: 0,
};

const PokemonContext = createContext(defaultValue);

function PokemonProvider({ children }: PokemonProps): JSX.Element {
  const [pokemonList, setPokemonList] = useState<PokemonDTO[]>([]);
  const [pokemonLength, setPokemonLength] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [wantedPokemon, setWantedPokemon] = useState('');
  const pokemonDatabase = usePokemonDatabase();
  const { t } = useTranslation();
  const [monitorProgress, setMonitorProgress] = useState(0);
  const [total, setTotal] = useState(0);

  const extractEvolutions = useCallback((chain: any, name: string) => {
    if (listForApiMisleadingEvolution[name]) {
      return [];
    } else {
      const evolutionMap: Record<string, string[]> = {};

      function traverse(node: any, previous: string[] = []) {
        const name = node.species.name;

        // Initialize entry for this Pokémon if not present
        if (!evolutionMap[name]) {
          evolutionMap[name] = [];
        }

        previous.forEach(prev => {
          if (!evolutionMap[name].includes(prev)) {
            evolutionMap[name].push(prev);
          }
          if (!evolutionMap[prev].includes(name)) {
            evolutionMap[prev].push(name);
          }
        });

        // Traverse evolutions
        node.evolves_to.forEach((evolution: any) =>
          traverse(evolution, [...previous, name]),
        );
      }

      traverse(chain);

      // Retrieve evolution tree that matches the pokemon name
      const chainName = nameFromChainList[name] || name;

      return evolutionMap[chainName];
    }
  }, []);

  const getAllEvolutions = useCallback((evolutions: string[], name: string) => {
    const isAlolaPokemon = name.includes('alola');
    const isGalarPokemon = name.includes('galar');
    const isHisuiPokemon = name.includes('hisui');

    const alolaEvolutionsList = checkAlolaEvolution(name);

    const galarEvolutionsList = checkGalarEvolution(name);

    const normalEvolutionsList = checkNormalEvolution(name);

    const hisuiEvolutionsList = checkHisuiEvolution(name);

    const apiEvolutionList =
      isAlolaPokemon ||
        isGalarPokemon ||
        isHisuiPokemon ||
        normalEvolutionsList.length > 0
        ? []
        : evolutions;

    const joinChecks = [
      ...alolaEvolutionsList,
      ...galarEvolutionsList,
      ...normalEvolutionsList.filter(name => name !== ''),
      ...hisuiEvolutionsList,
      ...apiEvolutionList,
    ];

    return joinChecks;
  }, []);

  const getEvolutionChain = useCallback(
    async (name: string, id: number) => {
      try {
        const { data } = await api.get<PokemonSpeciesDTO>(
          `pokemon-species/${id}`,
        );

        const evolutionResponse = await api.get<PokemonEvolutionChainDTO>(
          data.evolution_chain.url,
        );

        const { chain } = evolutionResponse.data;

        // Join arrays and remove duplicates
        const evolutions = extractEvolutions(chain, name);

        const allEvolutions = getAllEvolutions(
          correctGalarPokemonsTree[name] || evolutions,
          name,
        );

        return allEvolutions;
      } catch (error) {
        console.log(
          id + ' Error pokemon: ' + JSON.stringify(name, undefined, 2),
        );

        console.error('Error fetching evolution chain: ', error);

        return [];
      }
    },
    [extractEvolutions, getAllEvolutions],
  );

  const fetchAllPokemon = useCallback(async () => {
    try {
      setLoading(true);

      const numberOfPokemons = await api.get<PokemonsDTO>('pokemon');

      const { count } = numberOfPokemons.data;

      setTotal(count);

      const response = await api.get<PokemonsDTO>(
        `pokemon?limit=${count}&offset=0`,
      );

      const { results } = response.data;

      const arr: (PokemonDTO | null)[] = await Promise.all(
        results.map(async pokemon => {
          try {
            const pokemonInfo = await api.get<PokemonDTO>(
              `pokemon/${pokemon.name}`,
            );

            const {
              id,
              name,
              types,
              sprites,
              stats,
              abilities,
              moves,
              species,
              past_types,
              held_items,
              game_indices,
              forms,
              cries,
              is_default,
              order,
            } = pokemonInfo.data;

            const statNameMap: Record<string, string> = {
              'special-attack': 'Sp. Atk',
              'special-defense': 'Sp. Def',
            };

            const formattedStatsName = stats.map(statItem => {
              return {
                ...statItem,
                stat: {
                  ...statItem.stat,
                  name: statNameMap[statItem.stat.name] || statItem.stat.name,
                },
              };
            });

            const pokemonWeaknesses = await Promise.all(
              types.map(async pokemonType => {
                const response = await api.get(`type/${pokemonType.type.name}`);

                const { damage_relations } = response.data;

                const { double_damage_from } = damage_relations;

                const weaknesses = double_damage_from.map(
                  (item: { name: string; url: string }) => item.name,
                );

                return weaknesses;
              }),
            );

            const flattenedWeaknesses = [...new Set(pokemonWeaknesses.flat())];

            const imagePath = await saveImage(
              sprites.other['official-artwork'].front_default,
              name,
            );

            if (!imagePath) return null;

            const pokemonEvolutions =
              id > 1025
                ? getAllEvolutions([], name)
                : await getEvolutionChain(name, id);

            const match = species.url.match(/pokemon-species\/(\d+)\//) || '';

            const dataToShow = {
              ...pokemonInfo.data,
              displayId: match[1],
              displayName: formatNameToShow(name),
              avatar: imagePath,
              weaknesses: flattenedWeaknesses,
              stats: formattedStatsName,
              evolutions: pokemonEvolutions,
            };

            const dataToStore = {
              ...pokemonInfo.data,
              types: JSON.stringify(types),
              sprites: JSON.stringify(sprites),
              stats: JSON.stringify(formattedStatsName),
              abilities: JSON.stringify(abilities),
              moves: JSON.stringify(moves),
              species: JSON.stringify(species),
              past_types: JSON.stringify(past_types) || '',
              held_items: JSON.stringify(held_items),
              game_indices: JSON.stringify(game_indices),
              forms: JSON.stringify(forms),
              cries: JSON.stringify(cries),
              is_default: is_default ? 1 : 0,
              pokemon_order: order,
              displayId: match[1],
              displayName: formatNameToShow(name),
              weaknesses: JSON.stringify(flattenedWeaknesses),
              avatar: JSON.stringify(imagePath),
              evolutions: JSON.stringify(pokemonEvolutions),
            };

            await pokemonDatabase.create(dataToStore);

            return dataToShow;
          } catch (error) {
            return null;
          } finally {
            setMonitorProgress(state => state + 1);
          }
        }),
      );

      const validPokemonList: PokemonDTO[] = arr.filter(
        (item): item is PokemonDTO => item !== null,
      );

      // Function to validate all pokemons evolutions
      //
      // let correctPokemonEvolutions = 0;

      // validPokemonList.forEach(pokemon => {
      //   correctPokemonEvolutions =
      //     correctPokemonEvolutions + validatePokemonEvolutions(pokemon);
      // });

      // console.log('Pokemons validated: ' + correctPokemonEvolutions);

      setPokemonList(validPokemonList);
    } catch (error) {
      Alert.alert(t('list.error.title'), t('list.error.message'));
    }
  }, [getAllEvolutions, getEvolutionChain, pokemonDatabase, t]);

  const getPokemonsList = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);

      const response = await pokemonDatabase.searchAll();

      if (response.length > 0) {
        const convertedList = response.map(row => {
          const {
            types,
            sprites,
            abilities,
            moves,
            species,
            past_types,
            held_items,
            game_indices,
            forms,
            cries,
            stats,
            is_default,
            pokemon_order,
            weaknesses,
            avatar,
            evolutions,
          } = row;

          const formatted: PokemonDTO = {
            ...row,
            types: JSON.parse(types),
            sprites: JSON.parse(sprites),
            stats: JSON.parse(stats),
            abilities: JSON.parse(abilities),
            moves: JSON.parse(moves),
            species: JSON.parse(species),
            past_types: JSON.parse(past_types),
            held_items: JSON.parse(held_items),
            game_indices: JSON.parse(game_indices),
            forms: JSON.parse(forms),
            cries: JSON.parse(cries),
            is_default: is_default === 1,
            order: pokemon_order,
            weaknesses: JSON.parse(weaknesses),
            avatar: JSON.parse(avatar),
            evolutions: JSON.parse(evolutions),
          };

          setMonitorProgress(state => state + 1);

          return formatted;
        });

        setTotal(convertedList.length);
        setPokemonList(convertedList);
      } else {
        await fetchAllPokemon();
      }
    } catch (error) {
      Alert.alert(t('list.error.title'), t('list.error.message'));
    }
  }, [fetchAllPokemon, pokemonDatabase, t]);

  useEffect(() => {
    getPokemonsList();
  }, []);

  useEffect(() => {
    if (pokemonList.length > 0) {
      setPokemonLength(countUniqueSpecies(pokemonList));
    }
  }, [pokemonList, pokemonList.length]);

  return (
    <PokemonContext.Provider
      value={{
        pokemonList,
        loading,
        pokemonLength,
        setPokemonList,
        wantedPokemon,
        setWantedPokemon,
        setLoading,
        monitorProgress,
        total,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

function usePokemon() {
  const context = useContext(PokemonContext);

  return context;
}

export { usePokemon, PokemonProvider };
