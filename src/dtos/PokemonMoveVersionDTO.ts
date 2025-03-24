import { MoveLearnMethod } from './MoveLearnMethod';
import { NamedAPIResource } from './NamedAPIResourceDTO';
import { VersionGroupDTO } from './VersionGroup';

export interface PokemonMoveVersion {
  move_learn_method: NamedAPIResource<MoveLearnMethod>;
  version_group: NamedAPIResource<VersionGroupDTO>;
  level_learned_at: number;
}
