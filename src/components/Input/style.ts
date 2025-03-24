import colors from '@/constants/colors';
import { Fonts } from '@/constants/fonts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 56,
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.greyish_blue,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: Fonts.inter_regular,
    paddingLeft: 50,
  },
  icon: {
    backgroundColor: colors.pastel_blue,
    width: 42,
    height: 42,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 5,
  },
});
