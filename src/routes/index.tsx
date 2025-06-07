import React, { JSX } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AppDrawerRoutes } from './app.drawer.routes';
import { useTheme } from '@/context/theme';
import { usePokemon } from '@/context/pokemons';

function Routes(): JSX.Element {
  const { loading } = usePokemon();
  const { theme } = useTheme();

  return (
    <NavigationContainer theme={theme}>
      {!loading && <AppDrawerRoutes />}
    </NavigationContainer>
  );
}

export { Routes };
