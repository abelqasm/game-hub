import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import usePlatform from '../hooks/usePlatform';

interface Props {
	selectedPlatform?: number;
	onSelectPlatform: (platform: number) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
	const { data: platforms, error } = usePlatforms();
	const platform = usePlatform(selectedPlatform);
	if (error) return null;
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{platform?.name || 'Platforms'}
			</MenuButton>
			<MenuList>
				{platforms?.results.map((platform) => (
					<MenuItem
						key={platform.id}
						onClick={() => onSelectPlatform(platform.id)}
					>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
