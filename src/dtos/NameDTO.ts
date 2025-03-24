import { LanguageDTO } from './LanguageDTO';
import { NamedAPIResource } from './NamedAPIResourceDTO';

export interface NameDTO {
  name: string;
  language: NamedAPIResource<LanguageDTO>;
}
