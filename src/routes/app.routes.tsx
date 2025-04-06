import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Detail } from '@/screens/Detail';
import { StackParamList } from './types';
import { Home } from '@/screens/Home';

const Stack = createNativeStackNavigator<StackParamList>();

function AppStackRoutes(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}

export { AppStackRoutes };
