import { useSQLiteContext } from 'expo-sqlite';

export type PokemonDatabase = {
  id: number;
  name: string;
  displayName: string;
  height: number;
  weight: number;
  types: string;
  sprites: string;
  stats: string;
  abilities: string;
  moves: string;
  avatar: string;
  species: string;
  past_types: string;
  pokemon_order: number;
  location_area_encounters: string;
  is_default: number;
  held_items: string;
  game_indices: string;
  forms: string;
  cries: string;
  base_experience: number;
  weaknesses: string;
  evolutions: string;
};

export function usePokemonDatabase() {
  const database = useSQLiteContext();

  async function create(data: PokemonDatabase) {
    const {
      id,
      name,
      displayName,
      height,
      weight,
      types,
      sprites,
      stats,
      abilities,
      moves,
      avatar,
      species,
      past_types,
      pokemon_order,
      location_area_encounters,
      is_default,
      held_items,
      game_indices,
      forms,
      cries,
      base_experience,
      weaknesses,
      evolutions,
    } = data;

    const statement = await database.prepareAsync(`
      INSERT INTO pokemons (
      id,
      name,
      displayName,
      height,
      weight,
      types,
      sprites,
      stats,
      abilities,
      moves,
      avatar,
      species,
      past_types,
      pokemon_order,
      location_area_encounters,
      is_default,
      held_items,
      game_indices,
      forms,
      cries,
      base_experience,
      weaknesses,
      evolutions)
      VALUES (
      $id,
      $name,
      $displayName,
      $height,
      $weight,
      $types,
      $sprites,
      $stats,
      $abilities,
      $moves,
      $avatar,
      $species,
      $past_types,
      $pokemon_order,
      $location_area_encounters,
      $is_default,
      $held_items,
      $game_indices,
      $forms,
      $cries,
      $base_experience,
      $weaknesses,
      $evolutions)
    `);

    try {
      await statement.executeAsync({
        $id: id,
        $name: name,
        $displayName: displayName,
        $height: height,
        $weight: weight,
        $types: types,
        $sprites: sprites,
        $stats: stats,
        $abilities: abilities,
        $moves: moves,
        $avatar: avatar,
        $species: species,
        $past_types: past_types,
        $pokemon_order: pokemon_order,
        $location_area_encounters: location_area_encounters,
        $is_default: is_default,
        $held_items: held_items,
        $game_indices: game_indices,
        $forms: forms,
        $cries: cries,
        $base_experience: base_experience,
        $weaknesses: weaknesses,
        $evolutions: evolutions,
      });
    } catch (error) {
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }

  async function searchAll() {
    try {
      const query = 'SELECT * FROM pokemons';

      const response = await database.getAllAsync<PokemonDatabase>(query);

      return response;
    } catch (error) {
      throw error;
    }
  }

  async function searchOne(name: string) {
    try {
      const query = 'SELECT * FROM pokemons WHERE displayName = ?';

      const response = await database.getFirstAsync<PokemonDatabase>(
        query,
        name,
      );

      return response;
    } catch (error) {
      throw error;
    }
  }

  async function updatePokemonEvolutions(name: string, evolutions: string) {
    try {
      const query = 'UPDATE pokemons SET evolutions = ? WHERE name = ?';

      const response = await database.runAsync(query, [evolutions, name]);

      console.log('RESPONSE');
      console.log(JSON.stringify(response, undefined, 2));

      return response;
    } catch (error) {
      throw error;
    }
  }

  return { create, searchAll, searchOne, updatePokemonEvolutions };
}
