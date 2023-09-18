import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/rawg-logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

const NavBar = () => {
	return (
		<HStack padding="10px">
			<Image src={logo} />
			<SearchBar />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
