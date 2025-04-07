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
    marginTop: 24,
    padding: 16,
    backgroundColor: colors.white,
    gap: 24,
  },
  title: {
    fontSize: 18,
    fontFamily: Fonts.montserrat_semibold,
    paddingHorizontal: 8,
  },
  dropdown: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  innerDropdownContainer: {
    backgroundColor: colors.white,
  },
  icon: {
    marginRight: 5,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  switchText: {
    fontSize: 15,
    fontFamily: Fonts.inter_regular,
  },
});
