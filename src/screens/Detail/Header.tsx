import React, { useMemo } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, TouchableOpacity, View, Image } from 'react-native';
import styles from './styles';

import { PokemonDTO } from '@/dtos/PokemonDTO';
import Ionicon from '@expo/vector-icons/Ionicons';
import colors from '@/constants/colors';
import { getIconFromType } from '@/common/utils/icon';
import { PokemonType } from '@/common/utils/types';
import { getCardFromType } from '@/common/utils/card';

type HeaderProps = {
  item: PokemonDTO;
  onPress: () => void;
};

function Header({ item, onPress }: HeaderProps) {
  const type = item.types[0].type.name as PokemonType;

  const icon = useMemo(() => {
    const Icon = getIconFromType(type);

    return (
      <View style={styles.headerIconContainer}>
        <Icon width={24} height={24} />
      </View>
    );
  }, [type]);

  return (
    <SafeAreaView>
      <LinearGradient
        colors={[
          getCardFromType(type).firstColor,
          getCardFromType(type).secondColor,
        ]}
        style={[styles.headerContainer]}
      >
        {icon}
        <LinearGradient
          colors={[
            getCardFromType(type).firstColor,
            getCardFromType(type).secondColor,
          ]}
          style={[
            styles.headerRainbow,
            {
              borderColor: getCardFromType(type).secondColor,
            },
          ]}
        >
          <LinearGradient
            colors={[
              getCardFromType(type).firstColor,
              getCardFromType(type).secondColor,
            ]}
            style={[
              styles.innerHeaderRainbow,
              {
                borderColor: getCardFromType(type).secondColor,
              },
            ]}
          />
        </LinearGradient>
      </LinearGradient>

      <TouchableOpacity onPress={onPress} style={styles.backButtonContainer}>
        <Ionicon name="arrow-back" size={24} color={colors.black} />
      </TouchableOpacity>

      <Image source={{ uri: item.avatar }} style={styles.headerPokemonAvatar} />
    </SafeAreaView>
  );
}

export { Header };
