import { FC, SVGProps } from 'react';
import {
  BugIcon,
  DarkIcon,
  DragonIcon,
  ElectricIcon,
  FairyIcon,
  FightingIcon,
  FireIcon,
  FlyingIcon,
  GhostIcon,
  GrassIcon,
  GroundIcon,
  IceIcon,
  NormalIcon,
  PoisonIcon,
  PsychicIcon,
  RockIcon,
  SteelIcon,
  WaterIcon,
} from '@/assets/icons/Loader';
import { PokemonType } from './types';

//Icon types

const iconMap: Record<PokemonType, FC<SVGProps<SVGSVGElement>>> = {
  bug: BugIcon as FC<SVGProps<SVGSVGElement>>,
  dark: DarkIcon as FC<SVGProps<SVGSVGElement>>,
  dragon: DragonIcon as FC<SVGProps<SVGSVGElement>>,
  electric: ElectricIcon as FC<SVGProps<SVGSVGElement>>,
  fairy: FairyIcon as FC<SVGProps<SVGSVGElement>>,
  fighting: FightingIcon as FC<SVGProps<SVGSVGElement>>,
  fire: FireIcon as FC<SVGProps<SVGSVGElement>>,
  flying: FlyingIcon as FC<SVGProps<SVGSVGElement>>,
  ghost: GhostIcon as FC<SVGProps<SVGSVGElement>>,
  grass: GrassIcon as FC<SVGProps<SVGSVGElement>>,
  ground: GroundIcon as FC<SVGProps<SVGSVGElement>>,
  ice: IceIcon as FC<SVGProps<SVGSVGElement>>,
  normal: NormalIcon as FC<SVGProps<SVGSVGElement>>,
  poison: PoisonIcon as FC<SVGProps<SVGSVGElement>>,
  psychic: PsychicIcon as FC<SVGProps<SVGSVGElement>>,
  rock: RockIcon as FC<SVGProps<SVGSVGElement>>,
  steel: SteelIcon as FC<SVGProps<SVGSVGElement>>,
  water: WaterIcon as FC<SVGProps<SVGSVGElement>>,
};

function getIconFromType(type: PokemonType): FC<SVGProps<SVGSVGElement>> {
  return iconMap[type];
}

export { getIconFromType };
