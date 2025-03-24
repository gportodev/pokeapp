import { NamedAPIResource } from './NamedAPIResourceDTO';
import { NameDTO } from './NameDTO';
import { PokemonDescriptionDTO } from './PokemonDescriptionDTO';
import { PokemonRegionDTO } from './PokemonRegionDTO';
import { PokemonSpeciesDTO } from './PokemonSpeciesDTO';
import { VersionGroupDTO } from './VersionGroup';

export interface PokedexDTO {
  id: number;
  name: string;
  is_main_series: boolean;
  descriptions: PokemonDescriptionDTO[];
  names: NameDTO[];
  pokemon_entries: PokemonEntryDTO[];
  region: NamedAPIResource<PokemonRegionDTO> | null;
  version_groups: NamedAPIResource<VersionGroupDTO>[];
}

export interface PokemonEntryDTO {
  entry_number: number;
  pokemon_species: NamedAPIResource<PokemonSpeciesDTO>;
}
