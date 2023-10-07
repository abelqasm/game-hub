import platforms from "../data/platforms";
import apiClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./useGames";
import { useQuery } from "@tanstack/react-query";

const usePlatform = () => useQuery<FetchResponse<Platform>>({
  queryKey: ['platforms'],
  queryFn: () => 
    apiClient
      .get<FetchResponse<Platform>>('/platforms/lists/parents')
      .then(res => res.data),
  staleTime: 24 * 60 * 60 * 1000,// 24h
  initialData: {count: platforms.length, results: platforms} 
})

export default usePlatform