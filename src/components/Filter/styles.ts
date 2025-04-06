import colors from '@/constants/colors';
import { Fonts } from '@/constants/fonts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  dropdown: {
    borderColor: colors.soft_muted_greyish_blue,
    borderWidth: 1,
    borderRadius: 100,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  innerDropdownContainer: {
    backgroundColor: colors.white,
  },
  selectedTextStyle: {
    fontFamily: Fonts.montserrat_regular,
    fontSize: 14,
    textTransform: 'capitalize',
  },
  itemText: {
    fontFamily: Fonts.inter_regular,
    fontSize: 14,
    textTransform: 'capitalize',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  placeholderStyle: {
    fontFamily: Fonts.montserrat_regular,
    fontSize: 14,
  },
});
