import {
	Button,
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCropedUrl from "../services/crop-image-url";

interface Props {
	onSelectGenre: (genre: Genre) => void;
}

const GenresList = ({ onSelectGenre }: Props) => {
	const { data, isLoading, error } = useGenres();
	if (isLoading === true) return <Spinner />;
	if (error) return null;
	return (
		<List>
			{data.map((genre) => (
				<ListItem key={genre.id} paddingY="4px">
					<HStack>
						<Image
							boxSize="32px"
							borderRadius={8}
							src={getCropedUrl(genre.image_background)}
						/>
						<Button
							onClick={() => onSelectGenre(genre)}
							variant="link"
							fontSize="lg"
						>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenresList;
