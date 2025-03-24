import * as SQLite from 'expo-sqlite';

export async function initializeDatabase(database: SQLite.SQLiteDatabase) {
  await database.execAsync(`
    CREATE TABLE IF NOT EXISTS pokemons (
      id INTEGER PRIMARY KEY NOT NULL,
      name TEXT,
      displayName TEXT,
      height INTEGER,
      weight INTEGER,
      types TEXT,
      sprites TEXT,
      stats TEXT,
      abilities TEXT,
      moves TEXT,
      avatar TEXT,
      species TEXT,
      past_types TEXT,
      pokemon_order INTEGER,
      location_area_encounters TEXT,
      is_default INTEGER,
      held_items TEXT,
      game_indices TEXT,
      forms TEXT,
      cries TEXT,
      base_experience INTEGER,
      weaknesses TEXT,
      evolutions TEXT
    );
  `);
}

export async function clearDatabase() {
  await SQLite.deleteDatabaseAsync('pokemon.db');
}
