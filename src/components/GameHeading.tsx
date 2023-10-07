import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';

interface Props {
	gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
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
