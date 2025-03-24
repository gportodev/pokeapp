import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Routes } from '@/routes';
import useCachedResources from '@/hooks/useCachedResources';
import { PokemonProvider } from '@/context/pokemons';
import { Loader } from '@/components/Loader';
import { SQLiteProvider } from 'expo-sqlite';
import { initializeDatabase } from '@/database/initializeDatabase';

export default function App(): JSX.Element {
  const isLoading = useCachedResources();

  if (!isLoading) {
    return <Loader />;
  }

  return (
    <SQLiteProvider databaseName="pokemon.db" onInit={initializeDatabase}>
      <StatusBar />
      <PokemonProvider>
        <Routes />
      </PokemonProvider>
    </SQLiteProvider>
  );
}
