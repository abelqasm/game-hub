import { HStack, Image } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<HStack padding="10px">
			<Link to="/">
				<Image src='/game-hub-logo.svg' boxSize="50px" objectFit="contain" />
			</Link>
			<SearchBar />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
