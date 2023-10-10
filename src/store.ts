import { create } from 'zustand';

export interface GameQuery {
	genreId?: number;
	platformId?: number;
	orderSelector?: string;
	searchText?: string;
}

interface GameQueryStore {
	gameQuery: GameQuery;
	setSearchText: (searchText: string) => void;
	setGenreId: (genreId: number) => void;
	setPlatFormId: (platformId: number) => void;
	setOrderSelector: (orderSelector: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
	gameQuery: {},
	setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
	setGenreId: (genreId) =>
		set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
	setPlatFormId: (platformId) =>
		set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
	setOrderSelector: (orderSelector) =>
		set((store) => ({ gameQuery: { ...store.gameQuery, orderSelector } })),
}));

export default useGameQueryStore;
