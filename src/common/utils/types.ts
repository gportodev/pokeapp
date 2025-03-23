type PokemonType =
  | 'bug'
  | 'dark'
  | 'dragon'
  | 'electric'
  | 'fairy'
  | 'fighting'
  | 'fire'
  | 'flying'
  | 'ghost'
  | 'grass'
  | 'ground'
  | 'ice'
  | 'normal'
  | 'poison'
  | 'psychic'
  | 'rock'
  | 'steel'
  | 'water';

type TypeColor = {
  background: string;
  text: string;
};

type TypeCardColor = {
  firstColor: string;
  secondColor: string;
};

export { PokemonType, TypeColor, TypeCardColor };
