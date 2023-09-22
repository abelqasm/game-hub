import { Image, ImageProps } from '@chakra-ui/react';
import meh from '../assets/meh.webp';
import recommended from '../assets/recommended.webp';
import bullseye from '../assets/bullseye.webp';

interface Props {
	rating: number;
}

const Emojis = ({ rating }: Props) => {
	const emojis: { [key: number]: ImageProps } = {
		3: { src: meh, alt: 'meh' },
		4: { src: recommended, alt: 'recommended' },
		5: { src: bullseye, alt: 'bullseye' },
	};
	return rating > 2 && <Image {...emojis[rating]} boxSize="30px" />;
};

export default Emojis;
