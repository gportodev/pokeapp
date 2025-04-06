import React from 'react';
import { TextInput, View } from 'react-native';
import style from './style';

import { useTranslation } from 'react-i18next';
import { SearchIcon } from '@/assets/icons/Loader';
import { useTheme } from '@/context/theme';

type Props = {
  wantedPokemon: string;
  setWantedPokemon: (value: string) => void;
};

function Input({ wantedPokemon, setWantedPokemon }: Props): JSX.Element {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <View
      style={[
        style.container,
        {
          backgroundColor: theme.colors.input.background,
          borderColor: theme.colors.input.borderColor,
        },
      ]}
    >
      <View style={style.icon}>
        <SearchIcon width={16} height={16} color={theme.colors.icon.search} />
      </View>

      <TextInput
        placeholder={t('home.input.text')}
        placeholderTextColor={theme.colors.input.placeHolderTextColor}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={text => setWantedPokemon(text)}
        value={wantedPokemon}
        style={[
          style.input,
          {
            color: theme.colors.input.text,
          },
        ]}
      />
    </View>
  );
}

export { Input };
