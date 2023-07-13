import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { SpotifyProvider } from '@/contexts/Spotify';

const App = ({ Component, pageProps }: AppProps) => {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<SpotifyProvider>
				<Component {...pageProps} />
				<ReactQueryDevtools initialIsOpen={false} />
			</SpotifyProvider>
		</QueryClientProvider>
	);
};

export default App;
