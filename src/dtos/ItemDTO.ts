import { FlingEffect } from './FlingEffectDTO';
import { ItemAttribute } from './ItemAttributeDTO';
import { ItemCategory } from './ItemCategoryDTO';
import { NamedAPIResource } from './NamedAPIResourceDTO';

export interface Item {
  id: number;
  name: string;
  effect: string;
  short_effect: string;
  category: NamedAPIResource<ItemCategory>;
  cost: number;
  fling_power: number | null;
  fling_effect: NamedAPIResource<FlingEffect> | null;
  attributes: NamedAPIResource<ItemAttribute>[];
}
