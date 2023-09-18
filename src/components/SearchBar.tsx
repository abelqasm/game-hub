import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
	onSearch: (serachText: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
	const ref = useRef<HTMLInputElement>(null);
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (ref.current) {
					console.log(ref.current.value);
					onSearch(ref.current.value);
				}
			}}
		>
			<InputGroup>
				<InputLeftElement children={<BsSearch />} />
				<Input
					ref={ref}
					borderRadius={20}
					placeholder="Search games..."
					variant="filled"
				/>
				;
			</InputGroup>
		</form>
	);
};

export default SearchBar;