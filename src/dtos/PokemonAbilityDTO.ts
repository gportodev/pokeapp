import { Ability } from './AbilityDTO';
import { NamedAPIResource } from './NamedAPIResourceDTO';

export interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource<Ability>;
}
