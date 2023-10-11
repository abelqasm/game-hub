import { SimpleGrid, Text } from '@chakra-ui/react';
import { Game } from '../entities/Game';
import ItemDefinition from './ItemDefinition';
import CriticScore from './CriticScore';

interface Props {
	game: Game;
}

const GameAtributes = ({ game }: Props) => {
	return (
		<SimpleGrid as="dl" columns={2}>
			<ItemDefinition term="Paltforms">
				{game.parent_platforms?.map(({ platform }) => (
					<Text key={platform.id}>{platform.name}</Text>
				))}
			</ItemDefinition>
			<ItemDefinition term="MetaScore">
				<CriticScore score={game.metacritic} />
			</ItemDefinition>
			<ItemDefinition term="Genres">
				{game.genres?.map((genre) => (
					<Text key={genre.id}>{genre.name}</Text>
				))}
			</ItemDefinition>
			<ItemDefinition term="Publishers">
				{game.publishers?.map((publisher) => (
					<Text key={publisher.id}>{publisher.name}</Text>
				))}
			</ItemDefinition>
		</SimpleGrid>
	);
};

export default GameAtributes;
