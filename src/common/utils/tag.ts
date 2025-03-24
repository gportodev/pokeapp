import colors from '@/constants/colors';
import { PokemonType, TypeColor } from './types';

//Tag type

const tagMap: Record<PokemonType, TypeColor> = {
  fire: {
    background: colors.strong_orange_red_10, // Strong Red-Orange
    text: colors.strong_red, // Strong Red-Orange
  },
  grass: {
    background: colors.bold_forest_green_10, // Bold Forest Green
    text: colors.bold_forest_green, // Bold Forest Green
  },
  water: {
    background: colors.strong_blue_10, // Strong Blue
    text: colors.strong_blue, // Strong Blue
  },
  bug: {
    background: colors.deep_olive_green_10, // Deep Olive Green
    text: colors.deep_olive_green, // Deep Olive Green
  },
  dark: {
    background: colors.black_10, // Black
    text: colors.black, // Black
  },
  dragon: {
    background: colors.deep_purple_10, // Deep Purple
    text: colors.deep_purple, // Deep Purple
  },
  electric: {
    background: colors.bold_yellow_orange_10, // Bold Yellow-Orange
    text: colors.bold_yellow_orange, // Bold Yellow-Orange
  },
  fairy: {
    background: colors.strong_magenta_10, // Strong Magenta
    text: colors.strong_magenta, // Strong Magenta
  },
  fighting: {
    background: colors.bold_red_10, // Bold Red
    text: colors.bold_red, // Bold Red
  },
  flying: {
    background: colors.strong_sky_blue_10, // Strong Sky Blue
    text: colors.strong_sky_blue, // Strong Sky Blue
  },
  ghost: {
    background: colors.deep_violet_10, // Deep Violet
    text: colors.deep_violet, // Deep Violet
  },
  ground: {
    background: colors.bold_brown_10, // Bold Brown
    text: colors.bold_brown, // Bold Brown
  },
  ice: {
    background: colors.strong_teal_10, // Strong Teal
    text: colors.strong_teal, // Strong Teal
  },
  normal: {
    background: colors.charcoal_black_10, // Charcoal Black
    text: colors.charcoal_black, // Charcoal Black
  },
  poison: {
    background: colors.deep_purple_variant_10, // Deep Purple
    text: colors.deep_purple_variant, // Deep Purple
  },
  psychic: {
    background: colors.bold_burnt_orange_10, // Bold Burnt Orange
    text: colors.bold_burnt_orange, // Bold Burnt Orange
  },
  rock: {
    background: colors.dark_brown_10, // Dark Brown
    text: colors.dark_brown, // Dark Brown
  },
  steel: {
    background: colors.deep_slate_10, // Deep Slate
    text: colors.deep_slate, // Deep Slate
  },
};

function getTagFromType(type: PokemonType): TypeColor {
  return tagMap[type];
}

export { getTagFromType };
