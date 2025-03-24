import colors from '@/constants/colors';
import { Fonts } from '@/constants/fonts';
import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerContainer: {
    height: 250,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  backButtonContainer: {
    position: 'absolute',
    top: 40,
    left: 10,
  },
  headerIconContainer: {
    backgroundColor: 'white',
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 40,
    right: 10,
  },
  headerRainbow: {
    width: width * 0.9,
    height: width * 0.45,
    borderTopLeftRadius: width * 0.45,
    borderTopRightRadius: width * 0.45,
    borderWidth: 15,
    borderBottomWidth: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  innerHeaderRainbow: {
    width: width * 0.6,
    height: width * 0.3,
    borderTopLeftRadius: width * 0.3,
    borderTopRightRadius: width * 0.3,
    borderWidth: 15,
    borderBottomWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerPokemonAvatar: {
    height: 200,
    width: 200,
    bottom: -50,
    position: 'absolute',
    alignSelf: 'center',
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 100,
  },
  infoHeaderContainer: {
    gap: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoHeaderName: {
    fontSize: 24,
    fontFamily: Fonts.montserrat_bold,
    color: colors.dark_grayish,
    textTransform: 'capitalize',
    flexShrink: 1,
  },
  infoHeaderId: {
    fontSize: 18,
    fontFamily: Fonts.montserrat_regular,
    color: colors.gray_bold,
    textTransform: 'capitalize',
  },
  infoSubHeaderContainer: {
    paddingTop: 16,
    flexDirection: 'row',
    gap: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  tagAbilityContainer: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 4,
  },
  tagAbilityText: {
    fontSize: 14,
    fontFamily: Fonts.montserrat_semibold,
    textTransform: 'capitalize',
  },
  tagTypeContainer: {
    width: 80,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  tagTypeText: {
    fontSize: 14,
    fontFamily: Fonts.montserrat_semibold,
    textTransform: 'capitalize',
  },
  firstBlockInfoContainer: {
    paddingTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstBlockInfoLabelText: {
    fontSize: 14,
    fontFamily: Fonts.inter_regular,
  },
  label: {
    fontSize: 14,
    fontFamily: Fonts.inter_regular,
  },
  value: {
    fontSize: 14,
    fontFamily: Fonts.montserrat_semibold,
  },
  secondBlockInfoContainer: {
    paddingTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  title: {
    fontSize: 14,
    fontFamily: Fonts.inter_semibold,
  },
  thirdBlockInfoContainer: {
    paddingVertical: 32,
    alignItems: 'center',
    gap: 16,
  },
  statInfo: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statColumn: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 12,
  },
  statLabel: {
    fontSize: 14,
    fontFamily: Fonts.inter_regular,
    textTransform: 'capitalize',
  },
  fourthBlockInfoContainer: {
    paddingVertical: 32,
    alignItems: 'center',
    gap: 16,
  },
  evolutionContainer: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    gap: 10,
  },
});
