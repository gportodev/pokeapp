import { NamedAPIResource } from './NamedAPIResourceDTO';
import { NameDTO } from './NameDTO';
import {
  EncounterMethodRateDTO,
  PokemonEncounterDTO,
} from './PokemonEncounterDTO';
import { PokemonLocationDTO } from './PokemonLocationDTO';

export interface PokemonLocationAreaDTO {
  id: number;
  name: string;
  game_index: number;
  encounter_method_rates: EncounterMethodRateDTO[];
  location: NamedAPIResource<PokemonLocationDTO>;
  names: NameDTO[];
  pokemon_encounters: PokemonEncounterDTO[];
}
