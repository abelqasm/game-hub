import { SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';
import useGameQueryStore from '../store';

const GameGrid = () => {
	const gameQuery = useGameQueryStore((s) => s.gameQuery);
	const { data, error, isLoading, fetchNextPage, hasNextPage } =
		useGames(gameQuery);
	const skeletons = [1, 2, 3, 4, 5, 6];

	if (error) return <Text>{error.message}</Text>;

	const fetchedGameCount =
		data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
	return (
		<>
			<InfiniteScroll
				dataLength={fetchedGameCount}
				next={() => fetchNextPage()}
				hasMore={hasNextPage ? true : false}
				loader={<h4>Loading...</h4>}
			>
				<SimpleGrid
					columns={{ sm: 1, md: 3, lg: 6 }}
					padding="10px"
					spacing={5}
				>
					{isLoading
						? skeletons.map((skeleton) => (
								<GameCardContainer key={skeleton}>
									<GameCardSkeleton key={skeleton} />
								</GameCardContainer>
						  ))
						: data?.pages.map((page, index) => (
								<React.Fragment key={index}>
									{page.results.map((game) => (
										<GameCardContainer key={game.id}>
											<GameCard key={game.id} game={game}></GameCard>
										</GameCardContainer>
									))}
								</React.Fragment>
						  ))}
				</SimpleGrid>
			</InfiniteScroll>
		</>
	);
};

export default GameGrid;
