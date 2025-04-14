import React from 'react';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { DrawerParamList } from './types';
import { Settings } from '@/screens/Settings';
import { AppStackRoutes } from './app.routes';

import { useTranslation } from 'react-i18next';
import { DrawerHeader } from '@/components/DrawerHeader';
import { HomeIcon, InfoIcon, SettingsIcon } from '@/assets/icons/Loader';
import { useTheme } from '@/context/theme';
import { About } from '@/screens/About';

const Drawer = createDrawerNavigator<DrawerParamList>();

function AppDrawerRoutes(): JSX.Element {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    return <DrawerHeader {...props} />;
  };

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: theme.colors.drawer.background,
        },
        drawerInactiveTintColor: theme.colors.drawer.text,
      }}
    >
      <Drawer.Screen
        name="Main"
        component={AppStackRoutes}
        options={{
          title: t('main'),
          headerShown: false,
          drawerIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          title: t('settings.title'),
          headerShown: false,
          drawerIcon: ({ color }) => <SettingsIcon color={color} />,
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          title: t('about.title'),
          headerShown: false,
          drawerIcon: ({ color }) => <InfoIcon color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
}

export { AppDrawerRoutes };
