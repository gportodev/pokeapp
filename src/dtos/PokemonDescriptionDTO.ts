import { LanguageDTO } from './LanguageDTO';
import { NamedAPIResource } from './NamedAPIResourceDTO';

export interface PokemonDescriptionDTO {
  description: string;
  language: NamedAPIResource<LanguageDTO>;
}
