import {
	Button,
	HStack,
	Heading,
	Image,
	List,
	ListItem,
	Spinner,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCropedUrl from '../services/crop-image-url';
import useGameQueryStore from '../store';

const GenresList = () => {
	const { data: genres, isLoading, error } = useGenres();
	const gameQuery = useGameQueryStore((s) => s.gameQuery);
	const setGenreId = useGameQueryStore((s) => s.setGenreId);
	if (isLoading) return <Spinner />;
	if (error) return null;
	return (
		<>
			<Heading fontSize="2xl" marginBottom={2}>
				Genres
			</Heading>
			<List>
				{genres?.results.map((genre) => (
					<ListItem key={genre.id} paddingY="4px">
						<HStack>
							<Image
								boxSize="32px"
								borderRadius={8}
								src={getCropedUrl(genre.image_background)}
								objectFit="cover"
							/>
							<Button
								whiteSpace="normal"
								textAlign="left"
								onClick={() => setGenreId(genre.id)}
								fontWeight={genre.id === gameQuery.genreId ? 'bold' : 'normal'}
								variant="link"
								fontSize="lg"
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenresList;
