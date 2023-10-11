import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
	content: string;
}

const ExpandableText = ({ content }: Props) => {
	if (content.length <= 300) return <Text>{content}</Text>;
	const [expanded, setExpanded] = useState(false);
	const text = expanded ? content : content.substring(0, 300);
	return (
		<>
			<Text>
				{text}...
				<Button
					size="xs"
					fontWeight="bold"
					colorScheme="yellow"
					onClick={() => setExpanded(!expanded)}
				>
					{expanded ? 'Show less' : 'Read more'}
				</Button>
			</Text>
		</>
	);
};

export default ExpandableText;
