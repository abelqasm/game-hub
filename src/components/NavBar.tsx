import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<HStack padding="10px">
			<Link to="/">
				<Image src={logo} boxSize="40px" borderRadius={8} objectFit="cover" />
			</Link>
			<SearchBar />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
