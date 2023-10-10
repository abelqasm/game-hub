import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import usePlatform from '../hooks/usePlatform';
import useGameQueryStore from '../store';

const PlatformSelector = () => {
	const gameQuery = useGameQueryStore((s) => s.gameQuery);
	const setPlatFormId = useGameQueryStore((s) => s.setPlatFormId);
	const { data: platforms, error } = usePlatforms();
	const platform = usePlatform(gameQuery.platformId);
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
						onClick={() => setPlatFormId(platform.id)}
					>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
