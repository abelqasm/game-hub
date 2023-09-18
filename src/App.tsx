import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	orderSelector: string;
	searchText: string;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{
				base: "1fr",
				lg: "240px 1fr",
			}}
		>
			<GridItem area={`nav`}>
				<NavBar
					onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
				/>
			</GridItem>
			<Show above="lg">
				<GridItem area={`aside`} paddingX={5}>
					<GenresList
						selectedGenre={gameQuery.genre}
						onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
					/>
				</GridItem>
			</Show>
			<GridItem area={`main`}>
				<HStack paddingLeft={10} spacing={5}>
					<PlatformSelector
						onSelectPlatform={(platform) =>
							setGameQuery({ ...gameQuery, platform })
						}
						selectedPlatform={gameQuery.platform}
					/>
					<SortSelector
						onSelectOrder={(orderSelector) =>
							setGameQuery({ ...gameQuery, orderSelector })
						}
						orderSelector={gameQuery.orderSelector}
					/>
				</HStack>
				<GameGrid gamQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
}

export default App;
