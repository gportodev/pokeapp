import { NamedAPIResource } from './NamedAPIResourceDTO';
import { Type } from './TypeDTO';

export interface PokemonFormType {
  slot: number;
  type: NamedAPIResource<Type>;
}
