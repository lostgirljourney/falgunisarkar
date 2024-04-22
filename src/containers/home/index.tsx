import { useQuery } from '@tanstack/react-query';
import { SpotifyData } from '@/utils';
import Layout from '@/components/Layout';
import Profile from './Profile';
import AboutMe from './AboutMe';
import Social from './Social';
import Extras from './Extras';
import Experience from './Experience';
import Skills from './Skills';

const Home = () => {
	const { data, isError } = useQuery<SpotifyData>({
		queryKey: ['now-playing'],
		queryFn: () => fetch('/api/spotify').then((r) => r.json()),
		refetchInterval: 1000 * 60 * 3,
		refetchOnWindowFocus: true
	});

	return (
		<Layout title="Hey 👋🏻" isHome>
			<Profile
				src="/assets/png/display picture.png"
				isPlaying={data?.isPlaying && !isError ? true : false}
			/>
			<AboutMe />
			<Skills />
			<Experience />
			<Social />
			<Extras />
		</Layout>
	);
};

export default Home;
