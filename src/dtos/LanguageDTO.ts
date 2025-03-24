import { NameDTO } from './NameDTO';

export interface LanguageDTO {
  id: number;
  name: string;
  official: boolean;
  iso639: string;
  iso3166: string;
  names: NameDTO[];
}
