import { NamedAPIResource } from './NamedAPIResourceDTO';
import { NameDTO } from './NameDTO';
import { VersionGroupDTO } from './VersionGroup';

export interface VersionDTO {
  id: number;
  name: string;
  names: NameDTO[];
  version_group: NamedAPIResource<VersionGroupDTO>;
}
