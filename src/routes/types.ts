import { PokemonDTO } from '@/dtos/PokemonDTO';
import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type StackParamList = {
  Home: undefined;
  Detail: {
    item: PokemonDTO;
  };
};

type DrawerParamList = {
  Main: NavigatorScreenParams<StackParamList>;
  Settings: undefined;
  About: undefined;
};

type HomeProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'Home'>;
};

type DetailProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'Detail'>;
  route: RouteProp<StackParamList, 'Detail'>;
};

type SettingsProps = {
  navigation: NativeStackNavigationProp<DrawerParamList, 'Settings'>;
};

type AboutProps = {
  navigation: NativeStackNavigationProp<DrawerParamList, 'About'>;
};

export {
  DrawerParamList,
  StackParamList,
  HomeProps,
  DetailProps,
  SettingsProps,
  AboutProps,
};
