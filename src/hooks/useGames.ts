import { useEffect, useState } from "react";
import { AxiosError, CanceledError} from 'axios';
import apiClient from "../services/api-client";

export interface Platform{
	id: number;
	name: string;
	slug: string;
}

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: {platform: Platform}[];
	metacritic: number;
}

interface RawgGamesResponse {
	count: number;
	results: Game[];
}

const useGames = () => {
		const [games, setGames] = useState<Game[]>([]);
		const [error, setError] = useState("");
		const [isLoading, setLoading] = useState(false);

		useEffect(() => {
			const controler = new AbortController();
			setLoading(true);
			apiClient.get<RawgGamesResponse>("/games", {signal: controler.signal}).then(response =>{
				setGames(response.data.results);
				setLoading(false);
			}).catch (err => {
				if (err instanceof CanceledError) return ;
				setError((err as AxiosError).message);
				setLoading(false);
			})
			return () => controler.abort();
		}, []);
		return { games, error, isLoading };
	}


export default useGames