import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
	selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
	const { data, error, isLoading } = useGames(selectedGenre);
	const skeletons = [1, 2, 3, 4, 5];

	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid columns={{ sm: 1, md: 3, lg: 5 }} padding={10} spacing={3}>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardContainer key={skeleton}>
							<GameCardSkeleton key={skeleton} />
						</GameCardContainer>
					))}
				{data.map((game) => (
					<GameCardContainer key={game.id}>
						<GameCard key={game.id} game={game}></GameCard>
					</GameCardContainer>
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;