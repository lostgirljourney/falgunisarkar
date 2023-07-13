import { createContext, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { SpotifyData } from '@/utils';

interface SpotifyContextProps {
	data: SpotifyData | undefined;
	isError: boolean;
	isLoading: boolean;
}

const SpotifyContext = createContext<SpotifyContextProps | undefined>(
	undefined
);

export const SpotifyProvider = ({
	children
}: {
	children: React.ReactNode;
}) => {
	const { data, isError, isLoading } = useQuery<SpotifyData>(
		['now-playing'],
		() => fetch('/api/spotify').then((r) => r.json()),
		{
			refetchInterval: 1000 * 60 * 3,
			refetchOnWindowFocus: true
		}
	);

	return (
		<SpotifyContext.Provider value={{ data, isError, isLoading }}>
			{children}
		</SpotifyContext.Provider>
	);
};

export const useSpotify = (): SpotifyContextProps => {
	const context = useContext(SpotifyContext);
	if (context === undefined) {
		throw new Error('useSpotify must be used within a SpotifyProvider');
	}
	return context;
};
