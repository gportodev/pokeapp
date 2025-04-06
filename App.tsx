import React from 'react';
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

export default function App(): JSX.Element {
  const isLoading = useCachedResources();

  if (!isLoading) {
    return <Loader fullScreen />;
  }

  return (
    <ThemeProvider>
      <LanguageProvider>
        <SQLiteProvider databaseName="pokemon.db" onInit={initializeDatabase}>
          <StatusBar />
          <PokemonProvider>
            <Routes />
          </PokemonProvider>
        </SQLiteProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
