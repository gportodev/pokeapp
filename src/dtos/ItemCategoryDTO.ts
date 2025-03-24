import { Item } from './ItemDTO';
import { NamedAPIResource } from './NamedAPIResourceDTO';

export interface ItemCategory {
  id: number;
  name: string;
  items: NamedAPIResource<Item>[];
}
