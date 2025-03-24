import { NamedAPIResource } from './NamedAPIResourceDTO';
import { Stat } from './StatDTO';

export interface PokemonStat {
  stat: NamedAPIResource<Stat>;
  effort: number;
  base_stat: number;
}
