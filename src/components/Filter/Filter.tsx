import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

import styles from './styles';
import { useTheme } from '@/context/theme';
import colors from '@/constants/colors';
import { getIconFromType } from '@/common/utils/icon';
import { PokemonType } from '@/common/utils/types';

type FilterProps = {
  selectedFilter: string;
  setSelectedFilter: (value: string) => void;
};

function Filter({
  selectedFilter,
  setSelectedFilter,
}: FilterProps): JSX.Element {
  const { t } = useTranslation();
  const [isFocus, setIsFocus] = useState(false);
  const { theme: themeMode } = useTheme();

  const types = [
    {
      label: t('home.filter.all'),
      value: '',
    },
    {
      label: t('detail.types.normal'),
      value: 'normal',
    },
    {
      label: t('detail.types.fire'),
      value: 'fire',
    },
    {
      label: t('detail.types.water'),
      value: 'water',
    },
    {
      label: t('detail.types.electric'),
      value: 'electric',
    },
    {
      label: t('detail.types.grass'),
      value: 'grass',
    },
    {
      label: t('detail.types.ice'),
      value: 'ice',
    },
    {
      label: t('detail.types.fighting'),
      value: 'fighting',
    },
    {
      label: t('detail.types.poison'),
      value: 'poison',
    },
    {
      label: t('detail.types.ground'),
      value: 'ground',
    },
    {
      label: t('detail.types.flying'),
      value: 'flying',
    },
    {
      label: t('detail.types.psychic'),
      value: 'psychic',
    },
    {
      label: t('detail.types.bug'),
      value: 'bug',
    },
    {
      label: t('detail.types.rock'),
      value: 'rock',
    },
    {
      label: t('detail.types.ghost'),
      value: 'ghost',
    },
    {
      label: t('detail.types.dragon'),
      value: 'dragon',
    },
    {
      label: t('detail.types.dark'),
      value: 'dark',
    },
    {
      label: t('detail.types.steel'),
      value: 'steel',
    },
    {
      label: t('detail.types.fairy'),
      value: 'fairy',
    },
  ];

  const whenIsFocused =
    useCallback(
      (type: 'text' | 'view') => {
        return (
          isFocus &&
          (type === 'view'
            ? {
                borderColor: colors.strong_blue,
              }
            : {
                color: colors.strong_blue,
              })
        );
      },
      [isFocus],
    ) || undefined;

  const getIcon = useCallback((type: string) => {
    if (type === '') return null;

    const Icon = getIconFromType(type as PokemonType);

    return (
      <View>
        <Icon width={24} height={24} />
      </View>
    );
  }, []);

  return (
    <View
      style={{
        gap: 10,
      }}
    >
      <Dropdown
        style={[styles.dropdown, whenIsFocused('view')]}
        containerStyle={[
          styles.innerDropdownContainer,
          {
            backgroundColor: themeMode.colors.screen.settings.background,
          },
        ]}
        selectedTextStyle={[
          styles.selectedTextStyle,
          {
            color: themeMode.colors.filter.listText,
          },
          whenIsFocused('text'),
        ]}
        iconStyle={[
          styles.iconStyle,
          {
            tintColor: themeMode.colors.icon.default,
          },
        ]}
        placeholder={t('home.filter.all')}
        placeholderStyle={[
          styles.placeholderStyle,
          {
            color: themeMode.colors.filter.placeholderText,
          },
        ]}
        activeColor={themeMode.colors.screen.settings.dropdown.activeItem}
        renderItem={item => {
          return (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                margin: 5,
              }}
            >
              {getIcon(item.value)}
              <Text
                style={[
                  styles.itemText,
                  {
                    color: themeMode.colors.filter.listText,
                  },
                ]}
              >
                {item.label}
              </Text>
            </View>
          );
        }}
        data={types}
        maxHeight={300}
        labelField="label"
        valueField="value"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        value={selectedFilter}
        onChange={item => {
          setSelectedFilter(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
}

export { Filter };
