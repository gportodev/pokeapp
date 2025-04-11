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
  loadingText: {
    fontFamily: Fonts.montserrat_semibold,
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
  },
});
