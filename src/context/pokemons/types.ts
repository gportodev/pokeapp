import { PokemonDTO } from '@/dtos/PokemonDTO';
import { ReactNode } from 'react';

type PokemonProps = {
  children: ReactNode;
};

type PokemonListContext = {
  pokemonList: PokemonDTO[];
  setPokemonList: React.Dispatch<React.SetStateAction<PokemonDTO[]>>;
  loading: boolean;
  pokemonLength: number;
  wantedPokemon: string;
  setWantedPokemon: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  monitorProgress: number;
  total: number;
};

export { PokemonProps, PokemonListContext };
