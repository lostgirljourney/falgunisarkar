import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import React, { useEffect, useState } from 'react';
import NextNProgress from 'nextjs-progressbar';
import type { AppProps } from 'next/app';
import Loader from '@/components/Loader';
import '@/styles/globals.css';

const Splash: React.FC<{ children: any }> = ({ children }) => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const timeout = setTimeout(() => {
			setLoading(false);
		}, 1700);
		return () => clearTimeout(timeout);
	}, []);

	return loading ? <Loader /> : children;
};

const App = ({ Component, pageProps }: AppProps) => {
	const queryClient = new QueryClient();
	const [randomColor, setRandomColor] = useState<string>('#fff');

	useEffect(() => {
		const colors = [
			'#1586EC',
			'#1EAEC9',
			'#FB3B08',
			'#A847B5',
			'#CE2B60',
			'#F73E03',
			'#F0EC03'
		];
		setRandomColor(colors[Math.floor(Math.random() * colors.length)]);
	}, []);

	return (
		<QueryClientProvider client={queryClient}>
			<NextNProgress color={randomColor} options={{ showSpinner: false }} />
			<Splash>
				<Component {...pageProps} />
			</Splash>
			<Analytics />
			<SpeedInsights />
			<ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
		</QueryClientProvider>
	);
};

export default App;
