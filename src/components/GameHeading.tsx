import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
	gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
	const heading = `${gameQuery.genre?.name || ""} ${
		gameQuery.platform?.name || ""
	} Games`;
	return (
		<Heading margin={5} paddingLeft={5} as="h1">
			{heading}
		</Heading>
	);
};

export default GameHeading;
