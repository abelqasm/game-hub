import { useEffect, useState } from "react";
import { AxiosError} from 'axios';
import apiClient from "../services/api-client";

interface Game {
	id: number;
	name: string;
}

interface RawgGamesResponse {
	count: number;
	results: Game[];
}

const useGames = () => {
		const [games, setGames] = useState<Game[]>([]);
		const [error, setError] = useState("");

		useEffect(() => {
				const controler = new AbortController();
				const fetchGames = async () => {
						try {
								const response= await apiClient.get<RawgGamesResponse>("/games", {signal: controler.signal})
								setError("");
								setGames(response.data.results);
						} catch (err) {
								setError((err as AxiosError).message);
						}
				}
				fetchGames();
				return () => controler.abort();
	}, []);

		return { games, error };
}

export default useGames