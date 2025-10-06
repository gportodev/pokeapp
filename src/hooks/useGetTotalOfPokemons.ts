import { getTotalOfPokemons } from '@/services/api';
import { useQuery } from '@tanstack/react-query';

export function useGetTotalOfPokemons() {
  const { data } = useQuery({
    queryKey: ['get-pokemons'],
    queryFn: () => getTotalOfPokemons(),
  });

  return {
    data,
  };
}
