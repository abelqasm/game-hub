import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const FetchGames = () => {
	const { games, error, isLoading } = useGames();
	const skeletons = [1, 2, 3, 4, 5];

	console.log(isLoading);
	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid columns={{ sm: 1, md: 3, lg: 5 }} padding={10} spacing={10}>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardContainer>
							<GameCardSkeleton key={skeleton} />
						</GameCardContainer>
					))}
				{games.map((game) => (
					<GameCardContainer>
						<GameCard key={game.id} game={game}></GameCard>
					</GameCardContainer>
				))}
			</SimpleGrid>
		</>
	);
};

export default FetchGames;
