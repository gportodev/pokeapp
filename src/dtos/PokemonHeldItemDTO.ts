import { NamedAPIResource } from './NamedAPIResourceDTO';
import { Item } from './ItemDTO';
import { PokemonHeldItemVersion } from './PokemonHeldItemVersionDTO';

export interface PokemonHeldItem {
  item: NamedAPIResource<Item>;
  version_details: PokemonHeldItemVersion[];
}
