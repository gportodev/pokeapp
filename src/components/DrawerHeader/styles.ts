import colors from '@/constants/colors';
import { Fonts } from '@/constants/fonts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.montserrat_bold,
    color: colors.white,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: Fonts.inter_medium,
    color: colors.white,
    textAlign: 'center',
  },
});
