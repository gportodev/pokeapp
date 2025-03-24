import colors from '@/constants/colors';
import { Fonts } from '@/constants/fonts';
import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: (width - 24 * 2 - 10) / 2,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    elevation: 5,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    padding: 16,
  },
  imageContainer: {
    height: 100,
    width: 100,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  content: {
    paddingTop: 10,
    width: '100%',
    justifyContent: 'space-between',
    gap: 10,
  },
  data: {
    fontFamily: Fonts.inter_medium,
    fontSize: 16,
    color: colors.dark_grayish,
    textTransform: 'capitalize',
    flexShrink: 1,
  },
  typeContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});
