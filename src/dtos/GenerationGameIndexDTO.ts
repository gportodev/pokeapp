import { PokemonGenerationDTO } from './PokemonGenerationDTO';
import { NamedAPIResource } from './NamedAPIResourceDTO';

export interface GenerationGameIndexDTO {
  game_index: number;
  generation: NamedAPIResource<PokemonGenerationDTO>;
}
