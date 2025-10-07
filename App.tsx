import React, { JSX } from 'react';
import { StatusBar } from 'expo-status-bar';

import useCachedResources from '@/hooks/useCachedResources';
import { PokemonProvider } from '@/context/pokemons';
import { Loader } from '@/components/Loader';
import { SQLiteProvider } from 'expo-sqlite';
import { initializeDatabase } from '@/database/initializeDatabase';
import '@/i18n';
import { LanguageProvider } from '@/context/language';
import { Routes } from '@/routes';
import { ThemeProvider } from '@/context/theme';
import { UpdateProvider } from '@/context/update';
import { SafeAreaView } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App(): JSX.Element {
  const isLoading = useCachedResources();

  if (!isLoading) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <Loader />
      </SafeAreaView>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <UpdateProvider>
            <SQLiteProvider
              databaseName="pokemon.db"
              onInit={initializeDatabase}
            >
              <StatusBar />
              <PokemonProvider>
                <Routes />
              </PokemonProvider>
            </SQLiteProvider>
          </UpdateProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
