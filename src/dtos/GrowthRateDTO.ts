import { NamedAPIResource } from './NamedAPIResourceDTO';
import { PokemonDescriptionDTO } from './PokemonDescriptionDTO';
import { PokemonSpeciesDTO } from './PokemonSpeciesDTO';

export interface GrowthRateDTO {
  id: number;
  name: string;
  formula: string;
  descriptions: PokemonDescriptionDTO[];
  levels: GrowthRateExperienceLevelDTO[];
  pokemon_species: NamedAPIResource<PokemonSpeciesDTO>[];
}

export interface GrowthRateExperienceLevelDTO {
  level: number;
  experience: number;
}
