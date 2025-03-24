import { NamedAPIResource } from './NamedAPIResourceDTO';
import { VersionDTO } from './VersionDTO';

export interface PokemonHeldItemVersion {
  version: NamedAPIResource<VersionDTO>;
  rarity: number;
}
