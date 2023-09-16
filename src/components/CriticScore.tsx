import { Badge } from "@chakra-ui/react";

interface Props {
	score: number;
}
const CriticScore = ({ score }: Props) => {
	let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
	return (
		<Badge fontSize="20px" borderRadius="4px" paddingX={2} bg={color}>
			{score}
		</Badge>
	);
};

export default CriticScore;
