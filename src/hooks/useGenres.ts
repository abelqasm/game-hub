import { useEffect, useState } from "react";
import { AxiosError, CanceledError} from 'axios';
import apiClient from "../services/api-client";

export interface Genre {
    id: number;
    name: string;
}

interface RawgGamesResponse {
	count: number;
	results: Genre[];
}

const useGenres = () => {
		const [genres, setGenres] = useState<Genre[]>([]);
		const [error, setError] = useState("");
		const [isLoading, setLoading] = useState(false);

		useEffect(() => {
			const controler = new AbortController();
			setLoading(true);
			apiClient.get<RawgGamesResponse>("/genres", {signal: controler.signal}).then(response =>{
				setGenres(response.data.results);
				setLoading(false);
			}).catch (err => {
				if (err instanceof CanceledError) return ;
				setError((err as AxiosError).message);
				setLoading(false);
			})
			return () => controler.abort();
		}, []);
		return { genres, error, isLoading };
	}


export default useGenres