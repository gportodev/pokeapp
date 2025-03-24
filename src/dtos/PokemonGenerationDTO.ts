import { Ability } from './AbilityDTO';
import { MoveDTO } from './MoveDTO';
import { NamedAPIResource } from './NamedAPIResourceDTO';
import { NameDTO } from './NameDTO';
import { PokemonRegionDTO } from './PokemonRegionDTO';
import { PokemonSpeciesDTO } from './PokemonSpeciesDTO';
import { Type } from './TypeDTO';
import { VersionGroupDTO } from './VersionGroup';

export interface PokemonGenerationDTO {
  id: number;
  name: string;
  abilities: NamedAPIResource<Ability>[];
  names: NameDTO[];
  main_region: NamedAPIResource<PokemonRegionDTO>[];
  moves: NamedAPIResource<MoveDTO>[];
  pokemon_species: NamedAPIResource<PokemonSpeciesDTO>[];
  types: NamedAPIResource<Type>[];
  version_groups: NamedAPIResource<VersionGroupDTO>[];
}
