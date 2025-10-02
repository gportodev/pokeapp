import React, { useCallback, useMemo, useState, useDeferredValue } from 'react';

import styles from './styles';

import { Pokemon } from '../Pokemon';
import { PokemonDTO } from '@/dtos/PokemonDTO';
import { ActivityIndicator, FlatList } from 'react-native';
import { View, Text } from 'react-native';
import { usePokemon } from '@/context/pokemons';
import { Filter } from '../Filter';
import { PokeballIcon, SadIcon } from '@/assets/icons/Loader';
import { Fonts } from '@/constants/fonts';
import { useTheme } from '@/context/theme';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';

type PokemonsProps = {
  onPress: (item: PokemonDTO) => void;
};

function Pokemons({ onPress }: PokemonsProps) {
  const { pokemonList, wantedPokemon, pokemonLength } = usePokemon();
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [selectedFilter, setSelectedFilter] = useState('');
  const deferredSearch = useDeferredValue(wantedPokemon);

  const filteredPokemons = useMemo(() => {
    const searchText = deferredSearch.toLowerCase();

    return pokemonList.filter(pokemon => {
      const matchesType =
        selectedFilter === '' ||
        pokemon.types.some(item => item.type.name === selectedFilter);

      const matchesSearch =
        pokemon.displayName.includes(searchText) ||
        pokemon.displayId.toString().includes(searchText);

      return matchesType && matchesSearch;
    });
  }, [pokemonList, selectedFilter, deferredSearch]);

  const renderEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <SadIcon width={100} height={100} color={theme.colors.icon.sad} />

        <Text
          style={[
            styles.emptyTextTitle,
            {
              color: theme.colors.text,
            },
          ]}
        >
          {t('search.error.title')}
        </Text>
        <Text
          style={[
            styles.emptyTextSubTitle,
            {
              color: theme.colors.text,
            },
          ]}
        >
          {t('search.error.subTitle')}
        </Text>
      </View>
    );
  };

  const renderItem = useCallback(
    ({ item }: { item: PokemonDTO }) => {
      return <Pokemon item={item} onPress={onPress} />;
    },
    [onPress],
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <FlatList
        data={filteredPokemons}
        renderItem={renderItem}
        numColumns={2}
        ListHeaderComponent={() => (
          <View style={styles.headerView}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 18,
              }}
            >
              <PokeballIcon color={theme.colors.icon.default} />
              <Text
                style={{
                  fontFamily: Fonts.montserrat_semibold,
                  fontSize: 18,
                  textAlign: 'center',
                  color: theme.colors.text,
                }}
              >
                {pokemonLength + ' ' + t('home.list.header')}
              </Text>
            </View>

            <Filter
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
            />
          </View>
        )}
        columnWrapperStyle={styles.listColumn}
        contentContainerStyle={styles.listContainer}
        keyExtractor={(item: PokemonDTO) => item.id.toString()}
        initialNumToRender={30}
        maxToRenderPerBatch={30}
        ListEmptyComponent={renderEmpty}
        extraData={wantedPokemon}
        refreshing={deferredSearch !== wantedPokemon}
        onRefresh={() => <ActivityIndicator size={'large'} />}
      />
    </SafeAreaView>
  );
}

export { Pokemons };
