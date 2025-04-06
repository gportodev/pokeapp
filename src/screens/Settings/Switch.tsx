import colors from '@/constants/colors';
import { t } from 'i18next';
import React, { useState } from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import styles from './styles';
import { useTheme } from '@/context/theme';

function Switch() {
  const { storeTheme, theme } = useTheme();

  const [switchState, setSwitchState] = useState(theme.dark);

  const handleValue = (value: boolean) => {
    setSwitchState(value);
    storeTheme(value);
  };

  return (
    <ToggleSwitch
      isOn={switchState}
      onColor={colors.strong_blue}
      offColor={colors.dark_grayish}
      label={t('settings.theme.mode.dark')}
      labelStyle={[
        styles.switchText,
        {
          color: theme.colors.screen.settings.text,
        },
      ]}
      size="medium"
      onToggle={handleValue}
    />
  );
}

export { Switch };
