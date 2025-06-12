import React, { JSX } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AppDrawerRoutes } from './app.drawer.routes';
import { useTheme } from '@/context/theme';

function Routes(): JSX.Element {
  const { theme } = useTheme();

  return (
    <NavigationContainer theme={theme}>
      <AppDrawerRoutes />
    </NavigationContainer>
  );
}

export { Routes };
