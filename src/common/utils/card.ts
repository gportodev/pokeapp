import { PokemonType, TypeCardColor } from './types';

//Card type
const typeCardColorMap: Record<PokemonType, TypeCardColor> = {
  fire: {
    firstColor: '#FFEBCA', // FireStrong Red-Orange
    secondColor: '#E96303', // Strong Red-Orange-Orange
  },
  grass: {
    firstColor: '#D6EBDC', // GrassBold Forest Green
    secondColor: '#68AE28', // Bold Forest Green Green
  },
  water: {
    firstColor: '#DFECF5', // WaterStrong Blue
    secondColor: '#2079FF', // Strong Blue
  },
  bug: {
    firstColor: '#D0E6A5', // BugDeep Olive Green
    secondColor: '#6A8E1C', // Deep Olive Green Green
  },
  dark: {
    firstColor: '#A9A9A9', // DarkBlack
    secondColor: '#000000', // Black
  },
  dragon: {
    firstColor: '#C5CAE9', // DragonDeep Purple
    secondColor: '#512DA8', // Deep Purple
  },
  electric: {
    firstColor: '#FFF9C4', // ElectricBold Yellow-Orange
    secondColor: '#F2CE0E', // Bold Yellow-Orange-Orange
  },
  fairy: {
    firstColor: '#FCE4EC', // FairyStrong Magenta
    secondColor: '#C2185B', // Strong Magenta
  },
  fighting: {
    firstColor: '#FFCDD2', // FightingBold Red
    secondColor: '#C62828', // Bold Red
  },
  flying: {
    firstColor: '#BBDEFB', // FlyingStrong Sky Blue
    secondColor: '#8C9089', // Strong Sky Blue Blue
  },
  ghost: {
    firstColor: '#CE93D8', // GhostDeep Violet
    secondColor: '#4527A0', // Deep Violet
  },
  ground: {
    firstColor: '#EFEBE9', // GroundBold Brown
    secondColor: '#D35005', // Bold Brown
  },
  ice: {
    firstColor: '#E0F7FA', // IceStrong Teal
    secondColor: '#58B7ED', // Strong Teal
  },
  normal: {
    firstColor: '#F5F5F5', // NormalCharcoal Black
    secondColor: '#212121', // Charcoal Black
  },
  poison: {
    firstColor: '#E1BEE7', // PoisonDeep Purple
    secondColor: '#A234F9', // Deep Purple
  },
  psychic: {
    firstColor: '#FFCCBC', // PsychicBold Burnt Orange
    secondColor: '#F02F8C', // Bold Burnt Orange Orange
  },
  rock: {
    firstColor: '#D7CCC8', // RockDark Brown
    secondColor: '#E5A23D', // Dark Brown
  },
  steel: {
    firstColor: '#CFD8DC', // SteelDeep Slate
    secondColor: '#37474F', // Deep Slate
  },
};

function getCardFromType(type: PokemonType): TypeCardColor {
  return typeCardColorMap[type];
}

export { getCardFromType };
