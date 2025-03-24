import { PokemonDTO } from './PokemonDTO';

export interface PokemonsDTO {
  count: number;
  next: string;
  previous: null;
  results: PokemonDTO[];
}
