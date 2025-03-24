import { PokemonGenerationDTO } from './PokemonGenerationDTO';
import { NamedAPIResource } from './NamedAPIResourceDTO';
import { NameDTO } from './NameDTO';
import { PokedexDTO } from './PokedexDTO';
import { PokemonLocationDTO } from './PokemonLocationDTO';
import { VersionGroupDTO } from './VersionGroup';

export interface PokemonRegionDTO {
  id: number;
  locations: NamedAPIResource<PokemonLocationDTO>[];
  name: string;
  names: NameDTO[];
  main_generation: NamedAPIResource<PokemonGenerationDTO>;
  pokedexes: NamedAPIResource<PokedexDTO>[];
  version_groups: NamedAPIResource<VersionGroupDTO>[];
}
