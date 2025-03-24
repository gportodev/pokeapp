import { NamedAPIResource } from './NamedAPIResourceDTO';
import { NameDTO } from './NameDTO';
import { PokemonSpeciesDTO } from './PokemonSpeciesDTO';

export interface PokemonHabitatDTO {
  id: number;
  name: string;
  names: NameDTO[];
  pokemon_species: NamedAPIResource<PokemonSpeciesDTO>[];
}
