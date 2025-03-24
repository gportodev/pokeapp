import { PokemonDTO } from '@/dtos/PokemonDTO';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type StackParamList = {
  Home: undefined;
  Detail: {
    item: PokemonDTO;
  };
};

type HomeProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'Home'>;
};

type DetailProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'Detail'>;
  route: RouteProp<StackParamList, 'Detail'>;
};

export { StackParamList, HomeProps, DetailProps };
