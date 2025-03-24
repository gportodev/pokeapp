import { PokemonGenerationDTO } from './PokemonGenerationDTO';
import { NamedAPIResource } from './NamedAPIResourceDTO';
import { PokemonTypeDTO } from './PokemonTypeDTO';

export interface PokemonTypePast {
  generation: NamedAPIResource<PokemonGenerationDTO>;
  types: PokemonTypeDTO[];
}
