import { NamedAPIResource } from './NamedAPIResourceDTO';
import { NameDTO } from './NameDTO';
import { PokemonDTO } from './PokemonDTO';
import { VersionDTO } from './VersionDTO';

export interface PokemonEncounterDTO {
  pokemon: NamedAPIResource<PokemonDTO>;
  version_details: VersionEncounterDetailDTO[];
}

export interface VersionEncounterDetailDTO {
  version: NamedAPIResource<VersionDTO>;
  max_chance: number;
  encounter_details: EncounterDTO[];
}

export interface EncounterDTO {
  min_level: number;
  max_level: number;
  condition_values: NamedAPIResource<EncounterConditionValueDTO>[];
  chance: number;
  method: NamedAPIResource<EncounterMethodDTO>;
}

export interface EncounterConditionValueDTO {
  id: number;
  name: string;
  condition: NamedAPIResource<EncounterConditionDTO>[];
  chance: number;
  names: NameDTO[];
}

export interface EncounterConditionDTO {
  id: number;
  name: string;
  names: NameDTO[];
  values: NamedAPIResource<EncounterConditionValueDTO>[];
}

export interface EncounterMethodDTO {
  id: number;
  name: string;
  names: NameDTO[];
}

export interface EncounterMethodRateDTO {
  encounter_method: NamedAPIResource<EncounterMethodDTO>;
  version_details: EncounterVersionDetailDTO[];
}

export interface EncounterVersionDetailDTO {
  rate: number;
  version: NamedAPIResource<VersionDTO>;
}
