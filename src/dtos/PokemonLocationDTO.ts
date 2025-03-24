import { NamedAPIResource } from './NamedAPIResourceDTO';
import { NameDTO } from './NameDTO';
import { PokemonLocationAreaDTO } from './PokemonLocationAreaDTO';
import { PokemonRegionDTO } from './PokemonRegionDTO';

export interface PokemonLocationDTO {
  id: number;
  name: string;
  region: NamedAPIResource<PokemonRegionDTO>;
  names: NameDTO[];
  game_indices: [];
  areas: NamedAPIResource<PokemonLocationAreaDTO>[];
}
