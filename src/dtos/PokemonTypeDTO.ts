import { NamedAPIResource } from './NamedAPIResourceDTO';
import { Type } from './TypeDTO';

export interface PokemonTypeDTO {
  slot: number;
  type: NamedAPIResource<Type>;
}
