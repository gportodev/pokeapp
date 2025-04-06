import React, { useCallback } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Pokemons } from '../../components/Pokemons';
import { SafeAreaView } from 'react-native';

import { HomeProps } from '@/routes/types';
import { PokemonDTO } from '@/dtos/PokemonDTO';
import { StatusBar } from 'expo-status-bar';
import { Header } from '@/components/Header';
import { Loader } from '@/components/Loader';
import { useTranslation } from 'react-i18next';
import { usePokemon } from '@/context/pokemons';
import { useTheme } from '@react-navigation/native';

function Home({ navigation }: HomeProps): JSX.Element {
  const { loading } = usePokemon();
  const { t } = useTranslation();
  const { colors } = useTheme();

  const onPress = useCallback(
    (item: PokemonDTO) => {
      navigation.navigate('Detail', { item });
    },
    [navigation],
  );

  if (loading) {
    return <Loader fullScreen loadingText={t('home.loading')} />;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: colors.background,
        }}
      >
        <StatusBar style="auto" />
        <Header />
        <Pokemons onPress={onPress} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export { Home };
