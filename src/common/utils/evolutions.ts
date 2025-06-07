import { PokemonDTO } from '@/dtos/PokemonDTO';
import _ from 'lodash';

const normalList: Record<string, string[]> = {
  meowth: ['persian'],
  persian: ['meowth'],
  farfetchd: [''],
  perrserker: [''],
  'mr-mime': ['mime-jr'],
  'mr-rime': [''],
  quagsire: ['wooper'],
  wooper: ['quagsire'],
  sneasel: ['weavile'],
  yamask: ['cofagrigus'],
  sirfetchd: [''],
  sneasler: [''],
  'basculegion-male': [''],
  overqwil: [''],
};

const galarList: Record<string, string[]> = {
  'meowth-galar': ['perrserker'],
  perrserker: ['meowth-galar'],
  'ponyta-galar': ['rapidash-galar'],
  'rapidash-galar': ['ponyta-galar'],
  'slowpoke-galar': ['slowbro-galar', 'slowking-galar'],
  'slowbro-galar': ['slowpoke-galar', 'slowking-galar'],
  'slowking-galar': ['slowpoke-galar', 'slowbro-galar'],
  'farfetchd-galar': ['sirfetchd'],
  sirfetchd: ['farfetchd-galar'],
  'mr-mime-galar': ['mime-jr', 'mr-rime'],
  'mr-rime': ['mr-mime-galar', 'mime-jr'],
  'mime-jr': ['mr-mime-galar'],
  'corsola-galar': ['cursola'],
  // cursola: ['corsola'],
  'zigzagoon-galar': ['linoone-galar', 'obstagoon'],
  'linoone-galar': ['zigzagoon-galar', 'obstagoon'],
  obstagoon: ['zigzagoon-galar', 'linoone-galar'],
  'darumaka-galar': ['darmanitan-galar'],
  'darmanitan-galar': ['darumaka-galar'],
  'yamask-galar': ['runerigus'],
  // runerigus: ['yamask-galar'],
  koffing: ['weezing-galar'],
  'weezing-galar': ['koffing'],
};

const alolaList: Record<string, string[]> = {
  'rattata-alola': ['raticate-alola'],
  'raticate-alola': ['rattata-alola'],
  'sandslash-alola': ['sandshrew-alola'],
  'sandshrew-alola': ['sandslash-alola'],
  'ninetales-alola': ['vulpix-alola'],
  'vulpix-alola': ['ninetales-alola'],
  'diglett-alola': ['dugtrio-alola'],
  'dugtrio-alola': ['diglett-alola'],
  'meowth-alola': ['persian-alola'],
  'persian-alola': ['meowth-alola'],
  'geodude-alola': ['graveler-alola', 'golem-alola'],
  'graveler-alola': ['geodude-alola', 'golem-alola'],
  'golem-alola': ['geodude-alola', 'graveler-alola'],
  'grimer-alola': ['muk-alola'],
  'muk-alola': ['grimer-alola'],
  cubone: ['marowak-alola'],
  'marowak-alola': ['cubone'],
  exeggcute: ['exeggutor-alola'],
  'exeggutor-alola': ['exeggcute'],
  'raichu-alola': ['pikachu', 'pichu'],
};

const hisuiList: Record<string, string[]> = {
  'growlithe-hisui': ['arcanine-hisui'],
  'arcanine-hisui': ['growlithe-hisui'],
  'voltorb-hisui': ['electrode-hisui'],
  'electrode-hisui': ['voltorb-hisui'],
  'qwilfish-hisui': ['overqwil'],
  overqwil: ['qwilfish-hisui'],
  'sneasel-hisui': ['sneasler'],
  sneasler: ['sneasel-hisui'],
  'zorua-hisui': ['zoroark-hisui'],
  'zoroark-hisui': ['zorua-hisui'],
  'basculin-white': ['basculegion-male', 'basculegion-female'],
  'basculegion-male': ['basculin'],
  'basculegion-female': ['basculin'],
  'lilligant-hisui': ['petilil'],
  'avalugg-hisui': ['bergmite'],
  'braviary-hisui': ['rufflet'],
  'samurott-hisui': ['dewott'],
  'typhlosion-hisui': ['quilava'],
  'decidueye-hisui': ['dartrix'],
};

//List to return the evolution chain names
const nameFromChainList: Record<string, string> = {
  'deoxys-normal': 'deoxys',
  'wormadam-plant': 'wormadam',
  'giratina-altered': 'giratina',
  'shaymin-land': 'shaymin',
  'basculin-red-striped': 'basculin',
  'darmanitan-standard': 'darmanitan',
  'meowstic-male': 'meowstic',
  'aegislash-shield': 'aegislash',
  'pumpkaboo-average': 'pumpkaboo',
  'gourgeist-average': 'gourgeist',
  'zygarde-50': 'zygarde',
  'wishiwashi-solo': 'wishiwashi',
  'lycanroc-midday': 'lycanroc',
  'oricorio-baile': 'oricorio',
  'mimikyu-disguised': 'mimikyu',
  'minior-red-meteor': 'minior',
  'toxtricity-amped': 'toxtricity',
  'indeedee-male': 'indeedee',
  'eiscue-ice': 'eiscue',
  'morpeko-full-belly': 'morpeko',
  'urshifu-single-strike': 'urshifu',
  'basculegion-male': 'basculegion',
  'enamorus-incarnate': 'enamorus',
  'maushold-family-of-four': 'maushold',
  'oinkologne-male': 'oinkologne',
  'squawkabilly-green-plumage': 'squawkabilly',
  'palafin-zero': 'palafin',
  'tatsugiri-curly': 'tatsugiri',
  'dudunsparce-two-segment': 'dudunsparce',
};

const correctGalarPokemonsTree: Record<string, string[]> = {
  obstagoon: [],
};

const listForApiMisleadingEvolution: Record<string, string[]> = {
  phione: [],
  manaphy: [],
  'tornadus-incarnate': [],
  'thundurus-incarnate': [],
  'landorus-incarnate': [],
  'keldeo-ordinary': [],
  'meloetta-aria': [],
};

const checkAlolaEvolution = (name: string) => {
  const hasAlolaEvolution = alolaList[name];

  if (!hasAlolaEvolution) return [];

  return hasAlolaEvolution;
};

const checkGalarEvolution = (name: string) => {
  const hasGalarEvolution = galarList[name];

  if (!hasGalarEvolution) {
    return [];
  }

  return hasGalarEvolution;
};

const checkNormalEvolution = (name: string) => {
  const hasNormalEvolution = normalList[name];

  if (!hasNormalEvolution) {
    return [];
  }

  return hasNormalEvolution;
};

const checkHisuiEvolution = (name: string) => {
  const hasHisuilEvolution = hisuiList[name];

  if (!hasHisuilEvolution) {
    return [];
  }

  return hasHisuilEvolution;
};

const countUniqueSpecies = (pokemonList: PokemonDTO[]) => {
  const total = _.uniqBy(pokemonList, pokemon => pokemon.species.name).length;

  return total;
};

export {
  alolaList,
  galarList,
  hisuiList,
  normalList,
  nameFromChainList,
  correctGalarPokemonsTree,
  listForApiMisleadingEvolution,
  checkAlolaEvolution,
  checkGalarEvolution,
  checkNormalEvolution,
  checkHisuiEvolution,
  countUniqueSpecies,
};
