import { NamedAPIResource } from './NamedAPIResourceDTO';
import { VersionDTO } from './VersionDTO';

export interface VersionGameIndex {
  game_index: number;
  version: NamedAPIResource<VersionDTO>;
}
