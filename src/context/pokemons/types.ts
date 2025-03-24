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
};

export { PokemonProps, PokemonListContext };
