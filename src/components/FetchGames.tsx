import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const FetchGames = () => {
	const { games, error, isLoading } = useGames();
	const skeletons = [1, 2, 3, 4, 5, 6];

	console.log(isLoading);
	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid columns={{ sm: 1, md: 3, lg: 5 }} padding={10} spacing={10}>
				{isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton} />)}
				{games.map((game) => (
					<GameCard key={game.id} game={game}></GameCard>
				))}
			</SimpleGrid>
		</>
	);
};

export default FetchGames;
