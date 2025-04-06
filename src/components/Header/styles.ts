import colors from '@/constants/colors';
import { Fonts } from '@/constants/fonts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    gap: 24,
    elevation: 5,
    backgroundColor: colors.greyish_blue,
    borderBottomWidth: 1,
    borderBottomColor: colors.greyish_blue,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    paddingHorizontal: 24,
    paddingBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  infoText: {
    fontFamily: Fonts.montserrat_semibold,
    fontSize: 18,
    color: colors.gray_bold,
    textAlign: 'center',
  },
  content: {
    paddingHorizontal: 10,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
});
