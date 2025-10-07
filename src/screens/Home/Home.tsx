import React, { JSX, useCallback } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Pokemons } from '../../components/Pokemons';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HomeProps } from '@/routes/types';
import { PokemonDTO } from '@/dtos/PokemonDTO';
import { StatusBar } from 'expo-status-bar';
import { Header } from '@/components/Header';

import { useTheme } from '@/context/theme';
import { usePokemon } from '@/context/pokemons';
import { StartScreen } from '@/components/StartScreen';

function Home({ navigation }: HomeProps): JSX.Element {
  const { theme } = useTheme();
  const { loading, monitorProgress, total, setLoading } = usePokemon();

  const onPress = useCallback(
    (item: PokemonDTO) => {
      navigation.navigate('Detail', { item });
    },
    [navigation],
  );

  if (loading) {
    return (
      <StartScreen
        progress={monitorProgress}
        total={total}
        onFinish={setLoading}
      />
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
        }}
      >
        <StatusBar style={theme.dark ? 'light' : 'dark'} />
        <Header />
        <Pokemons onPress={onPress} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export { Home };
