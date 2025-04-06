const pokemonStats: Record<string, string> = {
  hp: 'detail.stats.list.hp',
  attack: 'detail.stats.list.attack',
  defense: 'detail.stats.list.defense',
  'Sp. Atk': 'detail.stats.list.special-attack',
  'Sp. Def': 'detail.stats.list.special-defense',
  speed: 'detail.stats.list.speed',
  total: 'detail.stats.list.total',
};

function getStatTranslation(stat: string): string {
  return pokemonStats[stat];
}

export { getStatTranslation };
