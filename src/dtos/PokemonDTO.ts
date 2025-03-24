import { NamedAPIResource } from './NamedAPIResourceDTO';
import { PokemonAbility } from './PokemonAbilityDTO';
import { PokemonForm } from './PokemonFormDTO';
import { VersionGameIndex } from './VersionGameIndexDTO';
import { PokemonHeldItem } from './PokemonHeldItemDTO';
import { PokemonMoveDTO } from './PokemonMoveDTO';
import { PokemonTypePast } from './PokemonTypePastDTO';
import { PokemonCries } from './PokemonCriesDTO';
import { PokemonStat } from './PokemonStatDTO';
import { PokemonTypeDTO } from './PokemonTypeDTO';
import { PokemonSprites } from './PokemonSpritesDTO';
import { PokemonSpeciesDTO } from './PokemonSpeciesDTO';

export interface PokemonDTO {
  id: number;
  name: string;
  displayName: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: NamedAPIResource<PokemonForm>[];
  game_indices: VersionGameIndex[];
  held_items: PokemonHeldItem[];
  location_area_encounters: string;
  moves: PokemonMoveDTO[];
  past_types: PokemonTypePast[];
  sprites: PokemonSprites;
  cries: PokemonCries;
  species: NamedAPIResource<PokemonSpeciesDTO>;
  stats: PokemonStat[];
  types: PokemonTypeDTO[];
  avatar: string;
  weaknesses: string[];
  evolutions?: string[];
}
