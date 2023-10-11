import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import Game from '../entities/Game';
import PlatformIcons from './PlatformIcons';
import CriticScore from './CriticScore';
import getCropedUrl from '../services/crop-image-url';
import Emojis from './Emojis';
import { Link } from 'react-router-dom';

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card>
			<Image src={getCropedUrl(game.background_image)} />
			<CardBody>
				<HStack justifyContent="space-between" marginBottom={2}>
					<PlatformIcons
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading fontSize="2xl">
					<Link to={'/games/' + game.slug}>{game.name}</Link>
					<Emojis rating={game.rating_top} />{' '}
				</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
