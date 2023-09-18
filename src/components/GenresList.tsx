import {
	Button,
	HStack,
	Heading,
	Image,
	List,
	ListItem,
	Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCropedUrl from "../services/crop-image-url";

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenresList = ({ onSelectGenre, selectedGenre }: Props) => {
	const { data, isLoading, error } = useGenres();
	if (isLoading === true) return <Spinner />;
	if (error) return null;
	return (
		<>
			<Heading fontSize="2xl" marginBottom={2}>
				Genres
			</Heading>
			<List>
				{data.map((genre) => (
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
								onClick={() => onSelectGenre(genre)}
								fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
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
