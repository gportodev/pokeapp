import { PokemonDTO } from '@/dtos/PokemonDTO';
import _ from 'lodash';

//151 pokemons
// 1 - 151
export const firstGenEvolutionData: Record<string, string[]> = {
  bulbasaur: ['ivysaur', 'venusaur'],
  ivysaur: ['bulbasaur', 'venusaur'],
  venusaur: ['bulbasaur', 'ivysaur'],

  charmander: ['charmeleon', 'charizard'],
  charmeleon: ['charmander', 'charizard'],
  charizard: ['charmander', 'charmeleon'],

  squirtle: ['wartortle', 'blastoise'],
  wartortle: ['squirtle', 'blastoise'],
  blastoise: ['squirtle', 'wartortle'],

  caterpie: ['metapod', 'butterfree'],
  metapod: ['caterpie', 'butterfree'],
  butterfree: ['caterpie', 'metapod'],

  weedle: ['kakuna', 'beedrill'],
  kakuna: ['weedle', 'beedrill'],
  beedrill: ['weedle', 'kakuna'],

  pidgey: ['pidgeotto', 'pidgeot'],
  pidgeotto: ['pidgey', 'pidgeot'],
  pidgeot: ['pidgey', 'pidgeotto'],

  rattata: ['raticate'],
  raticate: ['rattata'],

  spearow: ['fearow'],
  fearow: ['spearow'],

  ekans: ['arbok'],
  arbok: ['ekans'],

  pikachu: ['pichu', 'raichu'],
  pichu: ['pikachu', 'raichu'],
  raichu: ['pichu', 'pikachu'],

  sandshrew: ['sandslash'],
  sandslash: ['sandshrew'],

  'nidoran-f': ['nidorina', 'nidoqueen'],
  nidorina: ['nidoran-f', 'nidoqueen'],
  nidoqueen: ['nidoran-f', 'nidorina'],

  'nidoran-m': ['nidorino', 'nidoking'],
  nidorino: ['nidoran-m', 'nidoking'],
  nidoking: ['nidoran-m', 'nidorino'],

  clefairy: ['cleffa', 'clefable'],
  cleffa: ['clefairy', 'clefable'],
  clefable: ['cleffa', 'clefairy'],

  vulpix: ['ninetales'],
  ninetales: ['vulpix'],

  jigglypuff: ['igglybuff', 'wigglytuff'],
  igglybuff: ['jigglypuff', 'wigglytuff'],
  wigglytuff: ['igglybuff', 'jigglypuff'],

  zubat: ['golbat', 'crobat'],
  golbat: ['zubat', 'crobat'],
  crobat: ['zubat', 'golbat'],

  oddish: ['gloom', 'vileplume', 'bellossom'],
  gloom: ['oddish', 'vileplume', 'bellossom'],
  vileplume: ['oddish', 'gloom'],
  bellossom: ['oddish', 'gloom'],

  paras: ['parasect'],
  parasect: ['paras'],

  venonat: ['venomoth'],
  venomoth: ['venonat'],

  diglett: ['dugtrio'],
  dugtrio: ['diglett'],

  meowth: ['persian'],
  persian: ['meowth'],

  psyduck: ['golduck'],
  golduck: ['psyduck'],

  mankey: ['primeape', 'annihilape'],
  primeape: ['mankey', 'annihilape'],
  annihilape: ['mankey', 'primeape'],

  growlithe: ['arcanine'],
  arcanine: ['growlithe'],

  poliwag: ['poliwhirl', 'poliwrath', 'politoed'],
  poliwhirl: ['poliwag', 'poliwrath', 'politoed'],
  poliwrath: ['poliwag', 'poliwhirl'],
  politoed: ['poliwag', 'poliwhirl'],

  abra: ['kadabra', 'alakazam'],
  kadabra: ['abra', 'alakazam'],
  alakazam: ['abra', 'kadabra'],

  machop: ['machoke', 'machamp'],
  machoke: ['machop', 'machamp'],
  machamp: ['machop', 'machoke'],

  bellsprout: ['weepinbell', 'victreebel'],
  weepinbell: ['bellsprout', 'victreebel'],
  victreebel: ['bellsprout', 'weepinbell'],

  tentacool: ['tentacruel'],
  tentacruel: ['tentacool'],

  geodude: ['graveler', 'golem'],
  graveler: ['geodude', 'golem'],
  golem: ['geodude', 'graveler'],

  ponyta: ['rapidash'],
  rapidash: ['ponyta'],

  slowpoke: ['slowbro', 'slowking'],
  slowbro: ['slowpoke'],
  slowking: ['slowpoke'],

  magnemite: ['magneton', 'magnezone'],
  magneton: ['magnemite', 'magnezone'],
  magnezone: ['magnemite', 'magneton'],

  farfetchd: [], // Farfetch'd does not evolve
  doduo: ['dodrio'],
  dodrio: ['doduo'],

  seel: ['dewgong'],
  dewgong: ['seel'],

  grimer: ['muk'],
  muk: ['grimer'],

  shellder: ['cloyster'],
  cloyster: ['shellder'],

  gastly: ['haunter', 'gengar'],
  haunter: ['gastly', 'gengar'],
  gengar: ['gastly', 'haunter'],

  onix: ['steelix'], // Onix evolves into Steelix (though Steelix is Gen 2)
  steelix: ['onix'], // Steelix can devolve back to Onix

  drowzee: ['hypno'],
  hypno: ['drowzee'],

  krabby: ['kingler'],
  kingler: ['krabby'],

  voltorb: ['electrode'],
  electrode: ['voltorb'],

  exeggcute: ['exeggutor-alola', 'exeggutor'],
  exeggutor: ['exeggcute'],

  cubone: ['marowak-alola', 'marowak'],
  marowak: ['cubone'],

  hitmonlee: ['tyrogue'], // Hitmonlee does not evolve
  hitmonchan: ['tyrogue'], // Hitmonchan does not evolve

  lickitung: ['lickilicky'], // Lickitung evolves into Lickilicky (Gen 4)
  lickilicky: ['lickitung'], // Lickilicky can devolve back to Lickitung

  koffing: ['weezing-galar', 'weezing'],
  weezing: ['koffing'],

  rhyhorn: ['rhydon', 'rhyperior'],
  rhydon: ['rhyhorn', 'rhyperior'],
  rhyperior: ['rhyhorn', 'rhydon'],

  chansey: ['happiny', 'blissey'], // Chansey evolves into Blissey (Gen 2)
  blissey: ['happiny', 'chansey'], // Blissey can devolve back to Chansey

  tangela: ['tangrowth'], // Tangela evolves into Tangrowth (Gen 4)
  tangrowth: ['tangela'], // Tangrowth can devolve back to Tangela

  kangaskhan: [], // Kangaskhan does not evolve

  horsea: ['seadra', 'kingdra'],
  seadra: ['horsea', 'kingdra'],
  kingdra: ['horsea', 'seadra'],

  goldeen: ['seaking'],
  seaking: ['goldeen'],

  staryu: ['starmie'],
  starmie: ['staryu'],

  'mr-mime': ['mime-jr'], // Mr. Mime evolves from Mime Jr. (Gen 4)
  'mime-jr': ['mr-mime'], // Mime Jr. evolves into Mr. Mime

  scyther: ['scizor', 'kleavor'], // Scyther evolves into Scizor (Gen 2)
  scizor: ['scyther'], // Scizor can devolve back to Scyther

  jynx: ['smoochum'], // Jynx does not evolve

  electabuzz: ['elekid', 'electivire'], // Electabuzz evolves into Electivire (Gen 4)
  electivire: ['elekid', 'electabuzz'], // Electivire can devolve back to Electabuzz

  magmar: ['magby', 'magmortar'], // Magmar evolves into Magmortar (Gen 4)
  magmortar: ['magby', 'magmar'], // Magmortar can devolve back to Magmar

  pinsir: [], // Pinsir does not evolve

  tauros: [], // Tauros does not evolve

  magikarp: ['gyarados'],
  gyarados: ['magikarp'],

  lapras: [], // Lapras does not evolve

  ditto: [], // Ditto does not evolve

  eevee: [
    'vaporeon',
    'jolteon',
    'flareon',
    'espeon',
    'umbreon',
    'leafeon',
    'glaceon',
    'sylveon',
  ],
  vaporeon: ['eevee'],
  jolteon: ['eevee'],
  flareon: ['eevee'],
  espeon: ['eevee'],
  umbreon: ['eevee'],
  leafeon: ['eevee'],
  glaceon: ['eevee'],
  sylveon: ['eevee'],

  porygon: ['porygon2', 'porygon-z'],
  porygon2: ['porygon', 'porygon-z'],
  'porygon-z': ['porygon', 'porygon2'],

  omanyte: ['omastar'],
  omastar: ['omanyte'],

  kabuto: ['kabutops'],
  kabutops: ['kabuto'],

  aerodactyl: [], // Aerodactyl does not evolve

  snorlax: ['munchlax'], // Snorlax does not evolve

  articuno: [], // Articuno does not evolve
  zapdos: [], // Zapdos does not evolve
  moltres: [], // Moltres does not evolve

  dratini: ['dragonair', 'dragonite'],
  dragonair: ['dratini', 'dragonite'],
  dragonite: ['dratini', 'dragonair'],

  mewtwo: [], // Mewtwo does not evolve
  mew: [], // Mew does not evolve
};

//100 pokemons
// 152 - 251
export const secondGenEvolutionData: Record<string, string[]> = {
  // Gen 2 Pokémon (National Dex #152–251)
  chikorita: ['bayleef', 'meganium'],
  bayleef: ['chikorita', 'meganium'],
  meganium: ['chikorita', 'bayleef'],

  cyndaquil: ['quilava', 'typhlosion'],
  quilava: ['cyndaquil', 'typhlosion'],
  typhlosion: ['cyndaquil', 'quilava'],

  totodile: ['croconaw', 'feraligatr'],
  croconaw: ['totodile', 'feraligatr'],
  feraligatr: ['totodile', 'croconaw'],

  sentret: ['furret'],
  furret: ['sentret'],

  hoothoot: ['noctowl'],
  noctowl: ['hoothoot'],

  ledyba: ['ledian'],
  ledian: ['ledyba'],

  spinarak: ['ariados'],
  ariados: ['spinarak'],

  crobat: ['zubat', 'golbat'],
  chinchou: ['lanturn'],
  lanturn: ['chinchou'],

  pichu: ['pikachu', 'raichu'],
  cleffa: ['clefairy', 'clefable'],
  igglybuff: ['jigglypuff', 'wigglytuff'],

  togepi: ['togetic', 'togekiss'],
  togetic: ['togepi', 'togekiss'],
  togekiss: ['togepi', 'togetic'],

  natu: ['xatu'],
  xatu: ['natu'],

  mareep: ['flaaffy', 'ampharos'],
  flaaffy: ['mareep', 'ampharos'],
  ampharos: ['mareep', 'flaaffy'],

  bellossom: ['oddish', 'gloom'],
  marill: ['azurill', 'azumarill'],
  azumarill: ['azurill', 'marill'],

  sudowoodo: ['bonsly'],
  politoed: ['poliwag', 'poliwhirl'],
  hoppip: ['skiploom', 'jumpluff'],
  skiploom: ['hoppip', 'jumpluff'],
  jumpluff: ['hoppip', 'skiploom'],

  aipom: ['ambipom'],
  sunkern: ['sunflora'],
  sunflora: ['sunkern'],

  yanma: ['yanmega'],
  wooper: ['quagsire'],
  quagsire: ['wooper'],

  espeon: ['eevee'],
  umbreon: ['eevee'],
  murkrow: ['honchkrow'],
  slowking: ['slowpoke'],
  misdreavus: ['mismagius'],

  unown: [], // Unown has no evolutions
  wobbuffet: ['wynaut'],
  girafarig: ['farigiraf'], // Girafarig has no evolutions
  pineco: ['forretress'],
  forretress: ['pineco'],

  dunsparce: ['dudunsparce'], // Dunsparce has no evolutions
  gligar: ['gliscor'],
  steelix: ['onix'],
  snubbull: ['granbull'],
  granbull: ['snubbull'],

  qwilfish: ['overqwil'], // Qwilfish has no evolutions
  scizor: ['scyther'],
  shuckle: [], // Shuckle has no evolutions
  heracross: [], // Heracross has no evolutions
  sneasel: ['weavile'],

  teddiursa: ['ursaring', 'ursaluna'],
  ursaring: ['teddiursa', 'ursaluna'],
  slugma: ['magcargo'],
  magcargo: ['slugma'],

  swinub: ['piloswine', 'mamoswine'],
  piloswine: ['swinub', 'mamoswine'],
  mamoswine: ['swinub', 'piloswine'],

  corsola: ['cursola'],
  remoraid: ['octillery'],
  octillery: ['remoraid'],

  delibird: [], // Delibird has no evolutions
  mantine: ['mantyke'], // Mantine has no evolutions
  skarmory: [], // Skarmory has no evolutions
  houndour: ['houndoom'],
  houndoom: ['houndour'],

  kingdra: ['horsea', 'seadra'],
  phanpy: ['donphan'],
  donphan: ['phanpy'],

  porygon2: ['porygon', 'porygon-z'],
  stantler: ['wyrdeer'],
  smeargle: [], // Smeargle has no evolutions
  tyrogue: ['hitmonlee', 'hitmonchan', 'hitmontop'],
  hitmontop: ['tyrogue'],

  smoochum: ['jynx'],
  elekid: ['electabuzz', 'electivire'],
  magby: ['magmar', 'magmortar'],
  miltank: [], // Miltank has no evolutions
  blissey: ['happiny', 'chansey'],

  raikou: [], // Raikou has no evolutions
  entei: [], // Entei has no evolutions
  suicune: [], // Suicune has no evolutions
  larvitar: ['pupitar', 'tyranitar'],
  pupitar: ['larvitar', 'tyranitar'],
  tyranitar: ['larvitar', 'pupitar'],

  lugia: [], // Lugia has no evolutions
  'ho-oh': [], // Ho-Oh has no evolutions
  celebi: [], // Celebi has no evolutions
};

//135 pokemons
//252 - 386
const thirdGenEvolutionData: Record<string, string[]> = {
  // Grass-Type Starters
  treecko: ['grovyle', 'sceptile'],
  grovyle: ['treecko', 'sceptile'],
  sceptile: ['treecko', 'grovyle'],

  // Fire-Type Starters
  torchic: ['combusken', 'blaziken'],
  combusken: ['torchic', 'blaziken'],
  blaziken: ['torchic', 'combusken'],

  // Water-Type Starters
  mudkip: ['marshtomp', 'swampert'],
  marshtomp: ['mudkip', 'swampert'],
  swampert: ['mudkip', 'marshtomp'],

  // Early Route Pokémon
  poochyena: ['mightyena'],
  mightyena: ['poochyena'],

  zigzagoon: ['linoone', 'obstagoon'],
  linoone: ['zigzagoon', 'obstagoon'],
  obstagoon: ['zigzagoon', 'linoone'],

  wurmple: ['silcoon', 'beautifly', 'cascoon', 'dustox'],
  silcoon: ['wurmple', 'beautifly'],
  beautifly: ['wurmple', 'silcoon'],
  cascoon: ['wurmple', 'dustox'],
  dustox: ['wurmple', 'cascoon'],

  lotad: ['lombre', 'ludicolo'],
  lombre: ['lotad', 'ludicolo'],
  ludicolo: ['lotad', 'lombre'],

  seedot: ['nuzleaf', 'shiftry'],
  nuzleaf: ['seedot', 'shiftry'],
  shiftry: ['seedot', 'nuzleaf'],

  taillow: ['swellow'],
  swellow: ['taillow'],

  wingull: ['pelipper'],
  pelipper: ['wingull'],

  ralts: ['kirlia', 'gardevoir', 'gallade'],
  kirlia: ['ralts', 'gardevoir', 'gallade'],
  gardevoir: ['ralts', 'kirlia'],
  gallade: ['ralts', 'kirlia'],

  surskit: ['masquerain'],
  masquerain: ['surskit'],

  shroomish: ['breloom'],
  breloom: ['shroomish'],

  slakoth: ['vigoroth', 'slaking'],
  vigoroth: ['slakoth', 'slaking'],
  slaking: ['slakoth', 'vigoroth'],

  nincada: ['ninjask', 'shedinja'],
  ninjask: ['nincada'],
  shedinja: ['nincada'],

  whismur: ['loudred', 'exploud'],
  loudred: ['whismur', 'exploud'],
  exploud: ['whismur', 'loudred'],

  makuhita: ['hariyama'],
  hariyama: ['makuhita'],
  azurill: ['marill', 'azumarill'],
  nosepass: ['probopass'],
  probopass: ['nosepass'],

  skitty: ['delcatty'],
  delcatty: ['skitty'],

  sableye: [], // Sableye has no evolutions
  mawile: [], // Mawile has no evolutions
  aron: ['lairon', 'aggron'],
  lairon: ['aron', 'aggron'],
  aggron: ['aron', 'lairon'],

  meditite: ['medicham'],
  medicham: ['meditite'],

  electrike: ['manectric'],
  manectric: ['electrike'],

  plusle: [], // Plusle has no evolutions
  minun: [], // Minun has no evolutions
  volbeat: [], // Volbeat has no evolutions
  illumise: [], // Illumise has no evolutions
  roselia: ['budew', 'roserade'],
  budew: ['roselia', 'roserade'],
  roserade: ['budew', 'roselia'],

  gulpin: ['swalot'],
  swalot: ['gulpin'],

  carvanha: ['sharpedo'],
  sharpedo: ['carvanha'],

  wailmer: ['wailord'],
  wailord: ['wailmer'],

  numel: ['camerupt'],
  camerupt: ['numel'],

  torkoal: [], // Torkoal has no evolutions
  spoink: ['grumpig'],
  grumpig: ['spoink'],

  spinda: [], // Spinda has no evolutions
  trapinch: ['vibrava', 'flygon'],
  vibrava: ['trapinch', 'flygon'],
  flygon: ['trapinch', 'vibrava'],

  cacnea: ['cacturne'],
  cacturne: ['cacnea'],

  swablu: ['altaria'],
  altaria: ['swablu'],

  zangoose: [], // Zangoose has no evolutions
  seviper: [], // Seviper has no evolutions
  lunatone: [], // Lunatone has no evolutions
  solrock: [], // Solrock has no evolutions
  barboach: ['whiscash'],
  whiscash: ['barboach'],

  corphish: ['crawdaunt'],
  crawdaunt: ['corphish'],

  baltoy: ['claydol'],
  claydol: ['baltoy'],

  lileep: ['cradily'],
  cradily: ['lileep'],

  anorith: ['armaldo'],
  armaldo: ['anorith'],

  feebas: ['milotic'],
  milotic: ['feebas'],

  castform: [], // Castform has no evolutions
  kecleon: [], // Kecleon has no evolutions
  shuppet: ['banette'],
  banette: ['shuppet'],

  duskull: ['dusclops', 'dusknoir'],
  dusclops: ['duskull', 'dusknoir'],
  dusknoir: ['duskull', 'dusclops'],

  tropius: [], // Tropius has no evolutions
  chimecho: ['chingling'], // Chimecho has no evolutions
  absol: [], // Absol has no evolutions
  wynaut: ['wobbuffet'],
  snorunt: ['glalie', 'froslass'],
  glalie: ['snorunt'],
  froslass: ['snorunt'],

  spheal: ['sealeo', 'walrein'],
  sealeo: ['spheal', 'walrein'],
  walrein: ['spheal', 'sealeo'],

  clamperl: ['huntail', 'gorebyss'],
  huntail: ['clamperl'],
  gorebyss: ['clamperl'],

  relicanth: [], // Relicanth has no evolutions
  luvdisc: [], // Luvdisc has no evolutions
  bagon: ['shelgon', 'salamence'],
  shelgon: ['bagon', 'salamence'],
  salamence: ['bagon', 'shelgon'],

  beldum: ['metang', 'metagross'],
  metang: ['beldum', 'metagross'],
  metagross: ['beldum', 'metang'],

  regirock: [], // Regirock has no evolutions
  regice: [], // Regice has no evolutions
  registeel: [], // Registeel has no evolutions
  latias: [], // Latias has no evolutions
  latios: [], // Latios has no evolutions
  kyogre: [], // Kyogre has no evolutions
  groudon: [], // Groudon has no evolutions
  rayquaza: [], // Rayquaza has no evolutions
  jirachi: [], // Jirachi has no evolutions
  'deoxys-normal': [], // Deoxys has no evolutions
};

//107 pokemons
// 387 - 493
const fourthGenEvolutionData: Record<string, string[]> = {
  turtwig: ['grotle', 'torterra'],
  grotle: ['turtwig', 'torterra'],
  torterra: ['turtwig', 'grotle'],
  chimchar: ['monferno', 'infernape'],
  monferno: ['chimchar', 'infernape'],
  infernape: ['chimchar', 'monferno'],
  piplup: ['prinplup', 'empoleon'],
  prinplup: ['piplup', 'empoleon'],
  empoleon: ['piplup', 'prinplup'],
  starly: ['staravia', 'staraptor'],
  staravia: ['starly', 'staraptor'],
  staraptor: ['starly', 'staravia'],
  bidoof: ['bibarel'],
  bibarel: ['bidoof'],
  kricketot: ['kricketune'],
  kricketune: ['kricketot'],
  shinx: ['luxio', 'luxray'],
  luxio: ['shinx', 'luxray'],
  luxray: ['shinx', 'luxio'],
  budew: ['roselia', 'roserade'],
  roselia: ['budew', 'roserade'],
  roserade: ['budew', 'roselia'],
  cranidos: ['rampardos'],
  rampardos: ['cranidos'],
  shieldon: ['bastiodon'],
  bastiodon: ['shieldon'],
  burmy: ['wormadam', 'mothim'],
  'wormadam-plant': ['burmy'],
  mothim: ['burmy'],
  combee: ['vespiquen'],
  vespiquen: ['combee'],
  pachirisu: [],
  buizel: ['floatzel'],
  floatzel: ['buizel'],
  cherubi: ['cherrim'],
  cherrim: ['cherubi'],
  shellos: ['gastrodon'],
  gastrodon: ['shellos'],
  ambipom: ['aipom'],
  drifloon: ['drifblim'],
  drifblim: ['drifloon'],
  buneary: ['lopunny'],
  lopunny: ['buneary'],
  mismagius: ['misdreavus'],
  honchkrow: ['murkrow'],
  glameow: ['purugly'],
  purugly: ['glameow'],
  chingling: ['chimecho'],
  stunky: ['skuntank'],
  skuntank: ['stunky'],
  bronzor: ['bronzong'],
  bronzong: ['bronzor'],
  bonsly: ['sudowoodo'],
  'mime-jr': ['mr-mime-galar', 'mr-mime', 'mr-rime'],
  happiny: ['chansey', 'blissey'],
  chatot: [],
  spiritomb: [],
  gible: ['gabite', 'garchomp'],
  gabite: ['gible', 'garchomp'],
  garchomp: ['gible', 'gabite'],
  munchlax: ['snorlax'],
  riolu: ['lucario'],
  lucario: ['riolu'],
  hippopotas: ['hippowdon'],
  hippowdon: ['hippopotas'],
  skorupi: ['drapion'],
  drapion: ['skorupi'],
  croagunk: ['toxicroak'],
  toxicroak: ['croagunk'],
  carnivine: [],
  finneon: ['lumineon'],
  lumineon: ['finneon'],
  mantyke: ['mantine'],
  snover: ['abomasnow'],
  abomasnow: ['snover'],
  weavile: ['sneasel'],
  magnezone: ['magnemite', 'magneton'],
  lickilicky: ['lickitung'],
  rhyperior: ['rhyhorn', 'rhydon'],
  tangrowth: ['tangela'],
  electivire: ['elekid', 'electabuzz'],
  magmortar: ['magby', 'magmar'],
  togekiss: ['togepi', 'togetic'],
  yanmega: ['yanma'],
  leafeon: ['eevee'],
  glaceon: ['eevee'],
  gliscor: ['gligar'],
  mamoswine: ['swinub', 'piloswine'],
  'porygon-z': ['porygon', 'porygon2'],
  gallade: ['ralts', 'kirlia'],
  probopass: ['nosepass'],
  dusknoir: ['duskull', 'dusclops'],
  froslass: ['snorunt'],
  rotom: [],
  uxie: [],
  mesprit: [],
  azelf: [],
  dialga: [],
  palkia: [],
  heatran: [],
  regigigas: [],
  'giratina-altered': [],
  cresselia: [],
  phione: [],
  manaphy: [],
  darkrai: [],
  'shaymin-land': [],
  arceus: [],
};

//156 pokemons
// 494 - 649
const fifthGenEvolutionData: Record<string, string[]> = {
  victini: [],
  snivy: ['servine', 'serperior'],
  servine: ['snivy', 'serperior'],
  serperior: ['snivy', 'servine'],
  tepig: ['pignite', 'emboar'],
  pignite: ['tepig', 'emboar'],
  emboar: ['tepig', 'pignite'],
  oshawott: ['dewott', 'samurott'],
  dewott: ['oshawott', 'samurott'],
  samurott: ['oshawott', 'dewott'],
  patrat: ['watchog'],
  watchog: ['patrat'],
  lillipup: ['herdier', 'stoutland'],
  herdier: ['lillipup', 'stoutland'],
  stoutland: ['lillipup', 'herdier'],
  purrloin: ['liepard'],
  liepard: ['purrloin'],
  pansage: ['simisage'],
  simisage: ['pansage'],
  pansear: ['simisear'],
  simisear: ['pansear'],
  panpour: ['simipour'],
  simipour: ['panpour'],
  munna: ['musharna'],
  musharna: ['munna'],
  pidove: ['tranquill', 'unfezant'],
  tranquill: ['pidove', 'unfezant'],
  unfezant: ['pidove', 'tranquill'],
  blitzle: ['zebstrika'],
  zebstrika: ['blitzle'],
  roggenrola: ['boldore', 'gigalith'],
  boldore: ['roggenrola', 'gigalith'],
  gigalith: ['roggenrola', 'boldore'],
  woobat: ['swoobat'],
  swoobat: ['woobat'],
  drilbur: ['excadrill'],
  excadrill: ['drilbur'],
  audino: [],
  timburr: ['gurdurr', 'conkeldurr'],
  gurdurr: ['timburr', 'conkeldurr'],
  conkeldurr: ['timburr', 'gurdurr'],
  tympole: ['palpitoad', 'seismitoad'],
  palpitoad: ['tympole', 'seismitoad'],
  seismitoad: ['tympole', 'palpitoad'],
  throh: [],
  sawk: [],
  sewaddle: ['swadloon', 'leavanny'],
  swadloon: ['sewaddle', 'leavanny'],
  leavanny: ['sewaddle', 'swadloon'],
  venipede: ['whirlipede', 'scolipede'],
  whirlipede: ['venipede', 'scolipede'],
  scolipede: ['venipede', 'whirlipede'],
  cottonee: ['whimsicott'],
  whimsicott: ['cottonee'],
  petilil: ['lilligant'],
  lilligant: ['petilil'],
  'basculin-red-striped': ['basculegion'],
  'basculin-blue-striped': [],
  sandile: ['krokorok', 'krookodile'],
  krokorok: ['sandile', 'krookodile'],
  krookodile: ['sandile', 'krokorok'],
  darumaka: ['darmanitan'],
  'darmanitan-standard': ['darumaka'],
  maractus: [],
  dwebble: ['crustle'],
  crustle: ['dwebble'],
  scraggy: ['scrafty'],
  scrafty: ['scraggy'],
  sigilyph: [],
  yamask: ['cofagrigus'],
  cofagrigus: ['yamask'],
  tirtouga: ['carracosta'],
  carracosta: ['tirtouga'],
  archen: ['archeops'],
  archeops: ['archen'],
  trubbish: ['garbodor'],
  garbodor: ['trubbish'],
  zorua: ['zoroark'],
  zoroark: ['zorua'],
  minccino: ['cinccino'],
  cinccino: ['minccino'],
  gothita: ['gothorita', 'gothitelle'],
  gothorita: ['gothita', 'gothitelle'],
  gothitelle: ['gothita', 'gothorita'],
  solosis: ['duosion', 'reuniclus'],
  duosion: ['solosis', 'reuniclus'],
  reuniclus: ['solosis', 'duosion'],
  ducklett: ['swanna'],
  swanna: ['ducklett'],
  vanillite: ['vanillish', 'vanilluxe'],
  vanillish: ['vanillite', 'vanilluxe'],
  vanilluxe: ['vanillite', 'vanillish'],
  deerling: ['sawsbuck'],
  sawsbuck: ['deerling'],
  emolga: [],
  karrablast: ['escavalier'],
  escavalier: ['karrablast'],
  foongus: ['amoonguss'],
  amoonguss: ['foongus'],
  frillish: ['jellicent'],
  jellicent: ['frillish'],
  alomomola: [],
  joltik: ['galvantula'],
  galvantula: ['joltik'],
  ferroseed: ['ferrothorn'],
  ferrothorn: ['ferroseed'],
  klink: ['klang', 'klinklang'],
  klang: ['klink', 'klinklang'],
  klinklang: ['klink', 'klang'],
  tynamo: ['eelektrik', 'eelektross'],
  eelektrik: ['tynamo', 'eelektross'],
  eelektross: ['tynamo', 'eelektrik'],
  elgyem: ['beheeyem'],
  beheeyem: ['elgyem'],
  litwick: ['lampent', 'chandelure'],
  lampent: ['litwick', 'chandelure'],
  chandelure: ['litwick', 'lampent'],
  axew: ['fraxure', 'haxorus'],
  fraxure: ['axew', 'haxorus'],
  haxorus: ['axew', 'fraxure'],
  cubchoo: ['beartic'],
  beartic: ['cubchoo'],
  cryogonal: [],
  shelmet: ['accelgor'],
  accelgor: ['shelmet'],
  stunfisk: [],
  mienfoo: ['mienshao'],
  mienshao: ['mienfoo'],
  druddigon: [],
  golett: ['golurk'],
  golurk: ['golett'],
  pawniard: ['bisharp', 'kingambit'],
  bisharp: ['pawniard', 'kingambit'],
  bouffalant: [],
  rufflet: ['braviary'],
  braviary: ['rufflet'],
  vullaby: ['mandibuzz'],
  mandibuzz: ['vullaby'],
  heatmor: [],
  durant: [],
  deino: ['zweilous', 'hydreigon'],
  zweilous: ['deino', 'hydreigon'],
  hydreigon: ['deino', 'zweilous'],
  larvesta: ['volcarona'],
  volcarona: ['larvesta'],
  cobalion: [],
  terrakion: [],
  virizion: [],
  'tornadus-incarnate': [],
  'thundurus-incarnate': [],
  reshiram: [],
  zekrom: [],
  'landorus-incarnate': [],
  kyurem: [],
  'keldeo-ordinary': [],
  'meloetta-aria': [],
  genesect: [],
};

// 72 pokemons
// 650 - 721
const sixthGenEvolutionData: Record<string, string[]> = {
  chespin: ['quilladin', 'chesnaught'],
  quilladin: ['chespin', 'chesnaught'],
  chesnaught: ['chespin', 'quilladin'],
  fennekin: ['braixen', 'delphox'],
  braixen: ['fennekin', 'delphox'],
  delphox: ['fennekin', 'braixen'],
  froakie: ['frogadier', 'greninja'],
  frogadier: ['froakie', 'greninja'],
  greninja: ['froakie', 'frogadier'],
  bunnelby: ['diggersby'],
  diggersby: ['bunnelby'],
  fletchling: ['fletchinder', 'talonflame'],
  fletchinder: ['fletchling', 'talonflame'],
  talonflame: ['fletchling', 'fletchinder'],
  scatterbug: ['spewpa', 'vivillon'],
  spewpa: ['scatterbug', 'vivillon'],
  vivillon: ['scatterbug', 'spewpa'],
  litleo: ['pyroar'],
  pyroar: ['litleo'],
  flabebe: ['floette', 'florges'],
  floette: ['flabebe', 'florges'],
  florges: ['flabebe', 'floette'],
  skiddo: ['gogoat'],
  gogoat: ['skiddo'],
  pancham: ['pangoro'],
  pangoro: ['pancham'],
  furfrou: [],
  espurr: ['meowstic'],
  'meowstic-male': ['espurr'],
  honedge: ['doublade', 'aegislash'],
  doublade: ['honedge', 'aegislash'],
  'aegislash-shield': ['honedge', 'doublade'],
  spritzee: ['aromatisse'],
  aromatisse: ['spritzee'],
  swirlix: ['slurpuff'],
  slurpuff: ['swirlix'],
  inkay: ['malamar'],
  malamar: ['inkay'],
  binacle: ['barbaracle'],
  barbaracle: ['binacle'],
  skrelp: ['dragalge'],
  dragalge: ['skrelp'],
  clauncher: ['clawitzer'],
  clawitzer: ['clauncher'],
  helioptile: ['heliolisk'],
  heliolisk: ['helioptile'],
  tyrunt: ['tyrantrum'],
  tyrantrum: ['tyrunt'],
  amaura: ['aurorus'],
  aurorus: ['amaura'],
  sylveon: ['eevee'],
  hawlucha: [],
  dedenne: [],
  carbink: [],
  goomy: ['sliggoo', 'goodra'],
  sliggoo: ['goomy', 'goodra'],
  goodra: ['goomy', 'sliggoo'],
  klefki: [],
  phantump: ['trevenant'],
  trevenant: ['phantump'],
  'pumpkaboo-average': ['gourgeist'],
  'gourgeist-average': ['pumpkaboo'],
  bergmite: ['avalugg'],
  avalugg: ['bergmite'],
  noibat: ['noivern'],
  noivern: ['noibat'],
  xerneas: [],
  yveltal: [],
  'zygarde-50': [],
  diancie: [],
  hoopa: [],
  volcanion: [],
};

// 88 pokemons
// 722 - 809
const seventhGenEvolutionData: Record<string, string[]> = {
  rowlet: ['dartrix', 'decidueye'],
  dartrix: ['rowlet', 'decidueye'],
  decidueye: ['rowlet', 'dartrix'],
  litten: ['torracat', 'incineroar'],
  torracat: ['litten', 'incineroar'],
  incineroar: ['litten', 'torracat'],
  popplio: ['brionne', 'primarina'],
  brionne: ['popplio', 'primarina'],
  primarina: ['popplio', 'brionne'],
  pikipek: ['trumbeak', 'toucannon'],
  trumbeak: ['pikipek', 'toucannon'],
  toucannon: ['pikipek', 'trumbeak'],
  yungoos: ['gumshoos'],
  gumshoos: ['yungoos'],
  grubbin: ['charjabug', 'vikavolt'],
  charjabug: ['grubbin', 'vikavolt'],
  vikavolt: ['grubbin', 'charjabug'],
  crabrawler: ['crabominable'],
  crabominable: ['crabrawler'],
  'oricorio-baile': [],
  cutiefly: ['ribombee'],
  ribombee: ['cutiefly'],
  rockruff: ['lycanroc'],
  'lycanroc-midday': ['rockruff'],
  'wishiwashi-solo': [],
  mareanie: ['toxapex'],
  toxapex: ['mareanie'],
  mudbray: ['mudsdale'],
  mudsdale: ['mudbray'],
  dewpider: ['araquanid'],
  araquanid: ['dewpider'],
  fomantis: ['lurantis'],
  lurantis: ['fomantis'],
  morelull: ['shiinotic'],
  shiinotic: ['morelull'],
  salandit: ['salazzle'],
  salazzle: ['salandit'],
  stufful: ['bewear'],
  bewear: ['stufful'],
  bounsweet: ['steenee', 'tsareena'],
  steenee: ['bounsweet', 'tsareena'],
  tsareena: ['bounsweet', 'steenee'],
  comfey: [],
  oranguru: [],
  passimian: [],
  wimpod: ['golisopod'],
  golisopod: ['wimpod'],
  sandygast: ['palossand'],
  palossand: ['sandygast'],
  pyukumuku: [],
  'type-null': ['silvally'],
  silvally: ['type-null'],
  'minior-red-meteor': [],
  komala: [],
  turtonator: [],
  togedemaru: [],
  'mimikyu-disguised': [],
  bruxish: [],
  drampa: [],
  dhelmise: [],
  'jangmo-o': ['hakamo-o', 'kommo-o'],
  'hakamo-o': ['jangmo-o', 'kommo-o'],
  'kommo-o': ['jangmo-o', 'hakamo-o'],
  'tapu-koko': [],
  'tapu-lele': [],
  'tapu-bulu': [],
  'tapu-fini': [],
  cosmog: ['cosmoem', 'solgaleo', 'lunala'],
  cosmoem: ['cosmog', 'solgaleo', 'lunala'],
  solgaleo: ['cosmog', 'cosmoem'],
  lunala: ['cosmog', 'cosmoem'],
  nihilego: [],
  buzzwole: [],
  pheromosa: [],
  xurkitree: [],
  celesteela: [],
  kartana: [],
  guzzlord: [],
  necrozma: [],
  magearna: [],
  marshadow: [],
  poipole: ['naganadel'],
  naganadel: ['poipole'],
  stakataka: [],
  blacephalon: [],
  zeraora: [],
  meltan: [],
  melmetal: [],
};

// 96 pokemons
// 810 - 905
const eighthGenEvolutionData: Record<string, string[]> = {
  grookey: ['thwackey', 'rillaboom'],
  thwackey: ['grookey', 'rillaboom'],
  rillaboom: ['grookey', 'thwackey'],
  scorbunny: ['raboot', 'cinderace'],
  raboot: ['scorbunny', 'cinderace'],
  cinderace: ['scorbunny', 'raboot'],
  sobble: ['drizzile', 'inteleon'],
  drizzile: ['sobble', 'inteleon'],
  inteleon: ['sobble', 'drizzile'],
  skwovet: ['greedent'],
  greedent: ['skwovet'],
  rookidee: ['corvisquire', 'corviknight'],
  corvisquire: ['rookidee', 'corviknight'],
  corviknight: ['rookidee', 'corvisquire'],
  blipbug: ['dottler', 'orbeetle'],
  dottler: ['blipbug', 'orbeetle'],
  orbeetle: ['blipbug', 'dottler'],
  nickit: ['thievul'],
  thievul: ['nickit'],
  gossifleur: ['eldegoss'],
  eldegoss: ['gossifleur'],
  wooloo: ['dubwool'],
  dubwool: ['wooloo'],
  chewtle: ['drednaw'],
  drednaw: ['chewtle'],
  yamper: ['boltund'],
  boltund: ['yamper'],
  rolycoly: ['carkol', 'coalossal'],
  carkol: ['rolycoly', 'coalossal'],
  coalossal: ['rolycoly', 'carkol'],
  applin: ['flapple', 'appletun', 'dipplin', 'hydrapple'],
  flapple: ['applin'],
  appletun: ['applin'],
  dipplin: ['applin'],
  silicobra: ['sandaconda'],
  sandaconda: ['silicobra'],
  cramorant: [],
  arrokuda: ['barraskewda'],
  barraskewda: ['arrokuda'],
  toxel: ['toxtricity'],
  'toxtricity-amped': ['toxel'],
  sizzlipede: ['centiskorch'],
  centiskorch: ['sizzlipede'],
  clobbopus: ['grapploct'],
  grapploct: ['clobbopus'],
  sinistea: ['polteageist'],
  polteageist: ['sinistea'],
  hatenna: ['hattrem', 'hatterene'],
  hattrem: ['hatenna', 'hatterene'],
  hatterene: ['hatenna', 'hattrem'],
  impidimp: ['morgrem', 'grimmsnarl'],
  morgrem: ['impidimp', 'grimmsnarl'],
  grimmsnarl: ['impidimp', 'morgrem'],
  obstagoon: ['zigzagoon-galar', 'linoone-galar'],
  perrserker: ['meowth-galar'],
  cursola: ['corsola'],
  sirfetchd: ['farfetchd-galar'],
  'mr-rime': ['mr-mime-galar', 'mime-jr'],
  runerigus: ['yamask'],
  milcery: ['alcremie'],
  alcremie: ['milcery'],
  falinks: [],
  pincurchin: [],
  snom: ['frosmoth'],
  frosmoth: ['snom'],
  stonjourner: [],
  'eiscue-ice': [],
  'indeedee-male': [],
  'morpeko-full-belly': [],
  cufant: ['copperajah'],
  copperajah: ['cufant'],
  dracozolt: [],
  arctozolt: [],
  dracovish: [],
  arctovish: [],
  duraludon: ['archaludon'],
  dreepy: ['drakloak', 'dragapult'],
  drakloak: ['dreepy', 'dragapult'],
  dragapult: ['dreepy', 'drakloak'],
  zacian: [],
  zamazenta: [],
  eternatus: [],
  kubfu: ['urshifu'],
  'urshifu-single-strike': ['kubfu'],
  zarude: [],
  regieleki: [],
  regidrago: [],
  glastrier: [],
  spectrier: [],
  calyrex: [],
  wyrdeer: ['stantler'],
  kleavor: ['scyther'],
  ursaluna: ['teddiursa', 'ursaring'],
  'basculegion-male': ['basculin'],
  sneasler: ['sneasel-hisui'],
  overqwil: ['qwilfish-hisui'],
  'enamorus-incarnate': [],
};

//120 pokemons
//906 - 1025
const ninthGenEvolutionData: Record<string, string[]> = {
  sprigatito: ['floragato', 'meowscarada'],
  floragato: ['sprigatito', 'meowscarada'],
  meowscarada: ['sprigatito', 'floragato'],
  fuecoco: ['crocalor', 'skeledirge'],
  crocalor: ['fuecoco', 'skeledirge'],
  skeledirge: ['fuecoco', 'crocalor'],
  quaxly: ['quaxwell', 'quaquaval'],
  quaxwell: ['quaxly', 'quaquaval'],
  quaquaval: ['quaxly', 'quaxwell'],
  lechonk: ['oinkologne'],
  'oinkologne-male': ['lechonk'],
  tarountula: ['spidops'],
  spidops: ['tarountula'],
  nymble: ['lokix'],
  lokix: ['nymble'],
  pawmi: ['pawmo', 'pawmot'],
  pawmo: ['pawmi', 'pawmot'],
  pawmot: ['pawmi', 'pawmo'],
  tandemaus: ['maushold'],
  'maushold-family-of-four': ['tandemaus'],
  fidough: ['dachsbun'],
  dachsbun: ['fidough'],
  smoliv: ['dolliv', 'arboliva'],
  dolliv: ['smoliv', 'arboliva'],
  arboliva: ['smoliv', 'dolliv'],
  'squawkabilly-green-plumage': [],
  nacli: ['naclstack', 'garganacl'],
  naclstack: ['nacli', 'garganacl'],
  garganacl: ['nacli', 'naclstack'],
  charcadet: ['armarouge', 'ceruledge'],
  armarouge: ['charcadet'],
  ceruledge: ['charcadet'],
  tadbulb: ['bellibolt'],
  bellibolt: ['tadbulb'],
  wattrel: ['kilowattrel'],
  kilowattrel: ['wattrel'],
  maschiff: ['mabosstiff'],
  mabosstiff: ['maschiff'],
  shroodle: ['grafaiai'],
  grafaiai: ['shroodle'],
  bramblin: ['brambleghast'],
  brambleghast: ['bramblin'],
  toedscool: ['toedscruel'],
  toedscruel: ['toedscool'],
  klawf: [],
  capsakid: ['scovillain'],
  scovillain: ['capsakid'],
  rellor: ['rabsca'],
  rabsca: ['rellor'],
  flittle: ['espathra'],
  espathra: ['flittle'],
  tinkatink: ['tinkatuff', 'tinkaton'],
  tinkatuff: ['tinkatink', 'tinkaton'],
  tinkaton: ['tinkatink', 'tinkatuff'],
  wiglett: ['wugtrio'],
  wugtrio: ['wiglett'],
  bombirdier: [],
  finizen: ['palafin'],
  'palafin-zero': ['finizen'],
  varoom: ['revavroom'],
  revavroom: ['varoom'],
  cyclizar: [],
  orthworm: [],
  glimmet: ['glimmora'],
  glimmora: ['glimmet'],
  greavard: ['houndstone'],
  houndstone: ['greavard'],
  flamigo: [],
  cetoddle: ['cetitan'],
  cetitan: ['cetoddle'],
  veluza: [],
  dondozo: [],
  'tatsugiri-curly': [],
  annihilape: ['mankey', 'primeape'],
  clodsire: ['wooper'],
  farigiraf: ['girafarig'],
  'dudunsparce-two-segment': ['dunsparce'],
  kingambit: ['pawniard', 'bisharp'],
  'great-tusk': [],
  'scream-tail': [],
  'brute-bonnet': [],
  'flutter-mane': [],
  'slither-wing': [],
  'sandy-shocks': [],
  'iron-treads': [],
  'iron-bundle': [],
  'iron-hands': [],
  'iron-jugulis': [],
  'iron-moth': [],
  'iron-thorns': [],
  frigibax: ['arctibax', 'baxcalibur'],
  arctibax: ['frigibax', 'baxcalibur'],
  baxcalibur: ['frigibax', 'arctibax'],
  gimmighoul: ['gholdengo'],
  gholdengo: ['gimmighoul'],
  'wo-chien': [],
  'chien-pao': [],
  'ting-lu': [],
  'chi-yu': [],
  'roaring-moon': [],
  'iron-valiant': [],
  koraidon: [],
  miraidon: [],
  'walking-wake': [],
  'iron-leaves': [],
  dipplin: ['applin', 'hydrapple'],
  poltchageist: ['sinistcha'],
  sinistcha: ['poltchageist'],
  okidogi: [],
  munkidori: [],
  fezandipiti: [],
  ogerpon: [],
  archaludon: ['duraludon'],
  hydrapple: ['applin', 'dipplin'],
  'gouging-fire': [],
  'raging-bolt': [],
  'iron-boulder': [],
  'iron-crown': [],
  terapagos: [],
  pecharunt: [],
};

const allGenerations = {
  ...firstGenEvolutionData,
  ...secondGenEvolutionData,
  ...thirdGenEvolutionData,
  ...fourthGenEvolutionData,
  ...fifthGenEvolutionData,
  ...sixthGenEvolutionData,
  ...seventhGenEvolutionData,
  ...eighthGenEvolutionData,
  ...ninthGenEvolutionData,
};

function validatePokemonEvolutions(pokemon: PokemonDTO) {
  let errors: string[] = [];

  const { id, name, evolutions } = pokemon;

  const verifyEvolutions = allGenerations[name];

  let total = [];

  // console.log(id + '- ' + 'Pokemon: ' + name);
  // console.log(JSON.stringify(evolutions, undefined, 2));
  // console.log(
  //   'verifyEvolutions: ' +
  //     JSON.stringify(fourthGenEvolutionData[name], undefined, 2),
  // );

  if (!_.isEqual(verifyEvolutions, evolutions)) {
    errors.push(
      `${id + ' - ' + name}
      \nExpected evolutions: ${verifyEvolutions}
      \nCurrent evolutions: ${evolutions}`,
    );
  }

  if (errors.length > 0) {
    errors.forEach(error => console.log(error + '❌'));

    return 0;
  } else {
    total.push(name);
    console.log(`${id + ' - ' + name.toUpperCase()} ✅`);

    return 1;
  }
}

export { validatePokemonEvolutions };
