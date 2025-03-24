import { NamedAPIResource } from './NamedAPIResourceDTO';
import { Type } from './TypeDTO';

export interface MoveDTO {
  id: number;
  name: string;
  accuracy: number;
  power: number;
  pp: number;
  type: NamedAPIResource<Type>;
}
