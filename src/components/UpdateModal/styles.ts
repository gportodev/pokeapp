import colors from '@/constants/colors';
import { Fonts } from '@/constants/fonts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(18, 18, 18, 0.5)',
  },
  content: {
    width: '100%',
    gap: 10,
    borderRadius: 4,
    padding: 24,
    borderWidth: 0.1,
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.inter_semibold,
  },
  subTitle: {
    fontSize: 16,
    fontFamily: Fonts.inter_regular,
    letterSpacing: 0.5,
  },
  buttonContainer: {
    marginTop: 20,
    width: 150,
    height: 40,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.strong_red,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: Fonts.inter_semibold,
    color: colors.white,
  },
});
