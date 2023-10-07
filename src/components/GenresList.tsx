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

interface Props {
	onSelectGenre: (genre: number) => void;
	selectedGenre?: number;
}

const GenresList = ({ onSelectGenre, selectedGenre }: Props) => {
	const { data: genres, isLoading, error } = useGenres();
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
								src={getCropedUrl(genre.background_image)}
								objectFit="cover"
							/>
							<Button
								whiteSpace="normal"
								textAlign="left"
								onClick={() => onSelectGenre(genre.id)}
								fontWeight={genre.id === selectedGenre ? 'bold' : 'normal'}
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
