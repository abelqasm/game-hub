import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
	count: number;
	next?: string | null;
	results: T[];
}

const axiosInstance = axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: 'ff17499e86d64220a1c1843753944daf',
	},
});

class APIClient<T> {
	endpoint: string;
	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = (config: AxiosRequestConfig) =>
		axiosInstance
			.get<FetchResponse<T>>(this.endpoint, config)
			.then((res) => res.data);

	get = (id: number | string) => {
		return axiosInstance
			.get<T>(this.endpoint + '/' + id)
			.then((res) => res.data);
	};
}

export default APIClient;
