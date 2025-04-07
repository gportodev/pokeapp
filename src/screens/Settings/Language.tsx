import React, { useCallback, useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import styles from './styles';
import { useLanguage } from '@/context/language';
import colors from '@/constants/colors';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/context/theme';

function Language() {
  const { theme } = useTheme();
  const { locale, changeLanguage } = useLanguage();
  const [isFocus, setIsFocus] = useState(false);
  const { t } = useTranslation();

  const languages = [
    {
      label: t('settings.language.dropdown.english.label'),
      value: t('settings.language.dropdown.english.value'),
    },
    {
      label: t('settings.language.dropdown.portuguese.label'),
      value: t('settings.language.dropdown.portuguese.value'),
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

  return (
    <>
      <Dropdown
        style={[styles.dropdown, whenIsFocused('view')]}
        containerStyle={[
          styles.innerDropdownContainer,
          {
            backgroundColor: theme.colors.screen.settings.background,
          },
        ]}
        itemTextStyle={{
          color: theme.colors.screen.settings.text,
        }}
        selectedTextStyle={[
          styles.selectedTextStyle,
          {
            color: theme.colors.screen.settings.text,
          },
          whenIsFocused('text'),
        ]}
        iconStyle={[
          styles.iconStyle,
          {
            tintColor: theme.colors.icon.default,
          },
        ]}
        activeColor={theme.colors.screen.settings.dropdown.activeItem}
        data={languages}
        maxHeight={300}
        labelField="label"
        valueField="value"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        value={locale}
        onChange={item => {
          changeLanguage(item.value);
          setIsFocus(false);
        }}
      />
    </>
  );
}

export { Language };
