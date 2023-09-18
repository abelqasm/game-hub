import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/rawg-logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

interface Props {
	onSearch: (serachText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
	return (
		<HStack padding="10px">
			<Image src={logo} />
			<SearchBar onSearch={onSearch} />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
