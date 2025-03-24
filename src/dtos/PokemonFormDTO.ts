import { NamedAPIResource } from './NamedAPIResourceDTO';
import { NameDTO } from './NameDTO';
import { PokemonFormSprites } from './PokemonFormSpritesDTO';
import { PokemonFormType } from './PokemonFormType';
import { VersionGroupDTO } from './VersionGroup';

export interface PokemonForm {
  id: number;
  name: string;
  order: number;
  form_order: number;
  is_default: boolean;
  is_battle_only: boolean;
  is_mega: boolean;
  form_name: string;
  pokemon: NamedAPIResource<PokemonForm>;
  types: PokemonFormType[];
  sprites: PokemonFormSprites;
  version_group: NamedAPIResource<VersionGroupDTO>;
  names: NameDTO[];
  form_names: NameDTO[];
}
