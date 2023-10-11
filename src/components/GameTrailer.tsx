import useTrailers from '../hooks/useTrailers';

interface Props {
	gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
	const { data, isLoading, error } = useTrailers(gameId);

	if (isLoading) return null;
	if (error) throw error;

	const result = data?.results[0];
	return result ? (
		<video src={result.data[480]} poster={result.preview} controls/>
	) : null;
};

export default GameTrailer;
