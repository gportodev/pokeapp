import React from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, View, Text, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';
import { useTheme } from '@/context/theme';
import Constants from 'expo-constants';

type UpdateModalProps = {
  hasUpdate: boolean;
  setHasUpdate: (value: boolean) => void;
};

function UpdateModal({
  hasUpdate,
  setHasUpdate,
}: UpdateModalProps): JSX.Element {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const openPlayStore = () => {
    const androidPackage = Constants.expoConfig?.android?.package;

    if (!androidPackage) return;

    const packageName = androidPackage;
    const url = `market://details?id=${packageName}`;

    Linking.openURL(url)
      .catch(() => {
        const webUrl = `https://play.google.com/store/apps/details?id=${packageName}`;
        Linking.openURL(webUrl);
      })
      .then(() => setHasUpdate(false));
  };

  return (
    <Modal transparent visible={hasUpdate} onRequestClose={() => setHasUpdate}>
      <View style={styles.container}>
        <View
          style={[
            styles.content,
            {
              backgroundColor: theme.colors.background,
              borderColor: theme.colors.text,
            },
          ]}
        >
          <Text
            style={[
              styles.title,
              {
                color: theme.colors.text,
              },
            ]}
          >
            {t('updateModal.title')}
          </Text>
          <Text
            style={[
              styles.subTitle,
              {
                color: theme.colors.text,
              },
            ]}
          >
            {t('updateModal.subTitle')}
          </Text>

          <TouchableOpacity
            onPress={openPlayStore}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>{t('updateModal.update')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export { UpdateModal };
