import React from 'react';
import { TextInput, View } from 'react-native';
import style from './style';
import { Ionicons } from '@expo/vector-icons';
import colors from '@/constants/colors';

type Props = {
  wantedPokemon: string;
  setWantedPokemon: (value: string) => void;
};

function Input({ wantedPokemon, setWantedPokemon }: Props): JSX.Element {
  return (
    <View style={style.container}>
      <View style={style.icon}>
        <Ionicons name="search-sharp" size={16} color={colors.dark_blue} />
      </View>

      <TextInput
        placeholder="Search"
        placeholderTextColor={colors.soft_muted_greyish_blue}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={text => setWantedPokemon(text)}
        value={wantedPokemon}
        style={style.input}
      />
    </View>
  );
}

export { Input };
