import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/rawg-logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchBar from './SearchBar';

const NavBar = () => {
	return (
		<HStack padding="10px">
			<Image src={logo} boxSize="40px" borderRadius={8} />
			<SearchBar />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
