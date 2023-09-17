import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCropedUrl from "../services/crop-image-url";

const GenresList = () => {
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
						<Text fontSize="lg">{genre.name}</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenresList;
