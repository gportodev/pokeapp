import { getAllPokemons } from '@/services/api';
import { useQuery } from '@tanstack/react-query';

type Props = {
  count: number;
};

export function useGetAllPokemons({ count }: Props) {
  const { data } = useQuery({
    queryKey: ['get-pokemons', count],
    queryFn: () => getAllPokemons(count),
    enabled: !!count && count > 0,
  });

  return {
    data,
  };
}
