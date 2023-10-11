import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import useGame from '../hooks/useGame';
import { Heading, Spinner } from '@chakra-ui/react';

const GameDetailPage = () => {
	const { slug } = useParams();
	const { data: game, isLoading, error } = useGame(slug!);

	if (isLoading) return <Spinner />;
	if (error || !game) return null;
	return (
		<>
			<Heading>{game.name}</Heading>
			<ExpandableText content={game.description_raw} />
		</>
	);
};

export default GameDetailPage;
