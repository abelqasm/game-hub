import { Heading } from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';
import useGameQueryStore from '../store';

const GameHeading = () => {
	const gameQuery = useGameQueryStore((s) => s.gameQuery);
	const platform = usePlatform(gameQuery.platformId);
	const genre = useGenre(gameQuery.genreId);
	const heading = `${genre?.name || ''} ${platform?.name || ''} Games`;
	return (
		<Heading marginY={5} fontSize="5xl" as="h1">
			{heading}
		</Heading>
	);
};

export default GameHeading;
