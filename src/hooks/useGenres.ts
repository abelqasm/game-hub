import genres from "../data/genres";
import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Genre {
    id: number;
    name: string;
		background_image: string;
}

const apiClient = new APIClient<Genre>('/genres');
const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
  staleTime: 24 * 60 * 60 * 1000,// 24h
  initialData: genres
})

export default useGenres