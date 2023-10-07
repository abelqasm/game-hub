import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';

interface Props {
	gamQuery: GameQuery;
}

const GameGrid = ({ gamQuery }: Props) => {
	const { data, error, isLoading } = useGames(gamQuery);
	const skeletons = [1, 2, 3, 4, 5];

	if (error) return <Text>{error.message}</Text>;

	return (
		<SimpleGrid columns={{ sm: 1, md: 3, lg: 5 }} padding={10} spacing={5}>
			{isLoading
				? skeletons.map((skeleton) => (
						<GameCardContainer key={skeleton}>
							<GameCardSkeleton key={skeleton} />
						</GameCardContainer>
				  ))
				: data?.results.map((game) => (
						<GameCardContainer key={game.id}>
							<GameCard key={game.id} game={game}></GameCard>
						</GameCardContainer>
				  ))}
		</SimpleGrid>
	);
};

export default GameGrid;
