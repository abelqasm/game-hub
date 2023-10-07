import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';

interface Props {
	gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
	const { data: genres } = useGenres();
	const { data: platforms } = usePlatforms();
	const genre = genres.results.find((g) => g.id === gameQuery.genreId);
	const platform = platforms.results.find((p) => p.id === gameQuery.platformId);
	const heading = `${genre?.name || ''} ${platform?.name || ''} Games`;
	return (
		<Heading marginY={5} fontSize="5xl" as="h1">
			{heading}
		</Heading>
	);
};

export default GameHeading;
