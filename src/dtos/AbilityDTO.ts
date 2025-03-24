import { PokemonGenerationDTO } from './PokemonGenerationDTO';
import { NamedAPIResource } from './NamedAPIResourceDTO';

export interface Ability {
  id: number;
  name: string;
  is_main_series: boolean;
  generation: NamedAPIResource<PokemonGenerationDTO>;
}
