import React from 'react';

import {
  View,
  Text,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';
import { Input } from '../Input';
import { PokeballIcon } from '@/assets/icons/Loader';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type HeaderProps = {
  value: string;
  onChangeText: (value: string) => void;
  pokemonLength: number;
};

function Header({
  value,
  onChangeText,
  pokemonLength,
}: HeaderProps): JSX.Element {
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={[
            styles.header,
            {
              paddingTop: insets.top * 2,
            },
          ]}
        >
          <Input wantedPokemon={value} setWantedPokemon={onChangeText} />

          <View style={styles.infoContainer}>
            <PokeballIcon />
            <Text style={styles.infoText}>{pokemonLength} Pokémons</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export { Header };
