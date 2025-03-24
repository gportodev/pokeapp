import colors from '@/constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.greyish_blue,
    flexDirection: 'row',
    width: 36,
    marginHorizontal: 2,
  },
  progressContainer: {
    height: 3,
    backgroundColor: colors.strong_red,
  },
});
