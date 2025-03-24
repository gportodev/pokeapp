import { PokemonHabitatDTO } from './PokemonHabitatDTO';
import { NamedAPIResource } from './NamedAPIResourceDTO';
import { GrowthRateDTO } from './GrowthRateDTO';
import { PokemonDescriptionDTO } from './PokemonDescriptionDTO';
import { NameDTO } from './NameDTO';
import { PokedexDTO } from './PokedexDTO';
import { LanguageDTO } from './LanguageDTO';
import { PokemonEvolutionChainDTO } from './PokemonEvolutionChainDTO';
import { PokemonAPIResourceDTO } from './PokemonAPIResourceDTO';
import { PokemonGenerationDTO } from './PokemonGenerationDTO';
import { VersionDTO } from './VersionDTO';
import { PokemonDTO } from './PokemonDTO';

export interface PokemonSpeciesDTO {
  id: number;
  name: string;
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  hatch_counter: number;
  has_gender_differences: boolean;
  forms_switchable: boolean;
  growth_rate: NamedAPIResource<GrowthRateDTO>;
  pokedex_numbers: PokemonSpeciesDexEntryDTO[];
  egg_groups: NamedAPIResource<PokemonEggGroupDTO>[];
  color: NamedAPIResource<PokemonColorDTO>;
  shape: NamedAPIResource<PokemonShapeDTO>;
  evolves_from_species: NamedAPIResource<PokemonSpeciesDTO> | null;
  evolution_chain: PokemonAPIResourceDTO<PokemonEvolutionChainDTO>;
  habitat: NamedAPIResource<PokemonHabitatDTO> | null;
  generation: NamedAPIResource<PokemonGenerationDTO>;
  names: NameDTO[];
  pal_park_encounters: PalParkEncounterArea[];
  flavor_text_entries: FlavorTextEntry[];
  form_descriptions: PokemonDescriptionDTO[];
  genera: Genus[];
  varieties: PokemonSpeciesVariety[];
}

export interface PokemonSpeciesDexEntryDTO {
  entry_number: number;
  pokedex: NamedAPIResource<PokedexDTO>;
}

export interface PokemonEggGroupDTO {
  id: number;
  name: string;
  names: NameDTO[];
  pokemon_species: NamedAPIResource<PokemonSpeciesDTO>[];
}

export interface PokemonColorDTO {
  id: number;
  name: string;
  names: NameDTO[];
  pokemon_species: NamedAPIResource<PokemonSpeciesDTO>[];
}

export interface PokemonShapeDTO {
  id: number;
  name: string;
  awesome_names: PokemonAwesomeNameDTO[];
  names: NameDTO[];
  pokemon_species: NamedAPIResource<PokemonSpeciesDTO>[];
}

export interface PokemonAwesomeNameDTO {
  awesome_name: string;
  language: NamedAPIResource<LanguageDTO>;
}

export interface PokemonPalParkEncounterSpecies {
  base_score: number;
  rate: number;
  area: NamedAPIResource<PokemonSpeciesDTO>;
}

export interface PokemonPalParkArea {
  id: number;
  name: string;
  names: NameDTO[];
  pokemon_encounters: PokemonPalParkEncounterSpecies[];
}

export interface PalParkEncounterArea {
  base_score: number;
  rate: number;
  area: NamedAPIResource<PokemonPalParkArea>;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: NamedAPIResource<LanguageDTO>;
  version: NamedAPIResource<VersionDTO>;
}

export interface Genus {
  genus: string;
  language: NamedAPIResource<LanguageDTO>;
}

export interface PokemonSpeciesVariety {
  is_default: boolean;
  pokemon: NamedAPIResource<PokemonDTO>;
}
