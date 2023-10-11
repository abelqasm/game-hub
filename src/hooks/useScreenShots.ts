import { useQuery } from '@tanstack/react-query';
import ScreenShot from '../entities/ScreenShot';
import APIClient from '../services/api-client';

const useScreenShots = (gameId: number) => {
	const apiClinet = new APIClient<ScreenShot>(`/games/${gameId}/screenshots`);

	return useQuery({
		queryKey: ['screnshots', gameId],
		queryFn: apiClinet.getAll,
	});
};

export default useScreenShots;
