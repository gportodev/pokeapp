import colors from '@/constants/colors';
import { Fonts } from '@/constants/fonts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingTextTitle: {
    fontFamily: Fonts.montserrat_bold,
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
  },
  loadingTextSubTitle: {
    fontFamily: Fonts.montserrat_semibold,
    fontSize: 14,
    color: colors.white,
    textAlign: 'center',
  },
});
