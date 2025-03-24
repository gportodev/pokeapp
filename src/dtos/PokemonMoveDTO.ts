import { MoveDTO } from './MoveDTO';
import { NamedAPIResource } from './NamedAPIResourceDTO';
import { PokemonMoveVersion } from './PokemonMoveVersionDTO';

export interface PokemonMoveDTO {
  move: NamedAPIResource<MoveDTO>;
  version_group_details: PokemonMoveVersion[];
}
