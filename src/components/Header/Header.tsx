import React from 'react';

import {
  View,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { Input } from '../Input';
import { MenuIcon } from '@/assets/icons/Loader';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemon } from '@/context/pokemons';

import { useTheme } from '@/context/theme';
import { useNavigation } from '@react-navigation/native';
import { DrawerParamList } from '@/routes/types';
import { DrawerNavigationProp } from '@react-navigation/drawer';

function Header(): JSX.Element {
  const { wantedPokemon, setWantedPokemon } = usePokemon();
  const insets = useSafeAreaInsets();
  const { theme } = useTheme();
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

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
              backgroundColor: theme.colors.header.background,
              borderBottomColor: theme.colors.header.borderBottomColor,
            },
          ]}
        >
          <View style={styles.content}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <MenuIcon color={theme.colors.text} />
            </TouchableOpacity>

            <Input
              wantedPokemon={wantedPokemon}
              setWantedPokemon={setWantedPokemon}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export { Header };
