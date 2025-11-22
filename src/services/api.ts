import { PokemonsDTO } from '@/dtos/PokemonsDTO';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

async function getTotalOfPokemons() {
  try {
    const response = await api.get<Pick<PokemonsDTO, 'count'>>('pokemon/');

    const { count } = response.data;

    return count;
  } catch (error) {
    console.log(error);

    return 0;
  }
}

async function getAllPokemons(count: number) {
  try {
    const response = await api.get<PokemonsDTO>(
      `pokemon?limit=${count}&offset=0`,
    );

    const { results } = response.data;

    return results;
  } catch (error) {
    console.log(error);

    return [];
  }
}

export { api, getTotalOfPokemons, getAllPokemons };
