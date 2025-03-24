import { NamedAPIResource } from './NamedAPIResourceDTO';

export interface Type {
  id: number;
  name: string;
  damage_relations: DamageRelations;
}

export interface DamageRelations {
  no_damage_to: NamedAPIResource<Type>[];
  half_damage_to: NamedAPIResource<Type>[];
  double_damage_to: NamedAPIResource<Type>[];
}
