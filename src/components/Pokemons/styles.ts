import colors from '@/constants/colors';
import { Fonts } from '@/constants/fonts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  listContainer: {
    padding: 24,
    gap: 10,
  },
  listColumn: {
    justifyContent: 'space-between',
  },
  loadingView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontFamily: Fonts.montserrat_semibold,
    fontSize: 18,
    color: colors.gray_bold,
    textAlign: 'center',
  },
  headerView: {
    gap: 34,
    paddingVertical: 30,
  },
  emptyContainer: {
    gap: 16,
    alignItems: 'center',
  },
  emptyTextTitle: {
    fontFamily: Fonts.montserrat_semibold,
    fontSize: 18,
    textAlign: 'center',
  },
  emptyTextSubTitle: {
    fontFamily: Fonts.montserrat_regular,
    fontSize: 16,
    textAlign: 'center',
  },
});
