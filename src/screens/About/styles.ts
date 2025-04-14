import colors from '@/constants/colors';
import { Fonts } from '@/constants/fonts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerContainer: {
    backgroundColor: colors.greyish_blue,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    padding: 16,
    elevation: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: Fonts.inter_medium,
    color: colors.dark_grayish,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 18,
    fontFamily: Fonts.montserrat_semibold,
  },
  icon: {
    marginRight: 5,
  },
  description: {
    fontSize: 16,
    fontFamily: Fonts.montserrat_regular,
  },
  text: {
    fontSize: 16,
    fontFamily: Fonts.inter_regular,
    color: colors.strong_blue,
  },
});
