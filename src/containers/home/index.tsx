import Layout from '@/components/Layout';
import { useSpotify } from '@/contexts/Spotify';
import Profile from './Profile';
import AboutMe from './AboutMe';
import Social from './Social';
import Extras from './Extras';
import Experience from './Experience';

const Home = () => {
	const { data, isError } = useSpotify();

	return (
		<Layout
			title="Hey 👋🏻"
			description="Hey 👋🏻, I am Falguni Sarkar."
			headerImage="/assets/png/home.png"
			isHome
		>
			<Profile
				src="/assets/png/display picture.png"
				isPlaying={data?.isPlaying && !isError ? true : false}
			/>
			<AboutMe>
				<p>
					Passionate about crafting exceptional user experiences, I strive to
					create pixel-perfect interfaces that seamlessly blend design and
					engineering principles.
				</p>
				<p>
					A lifelong learner, always seeking to expand my horizons. Thus,
					continuously exploring my capabilities to build efficient and scalable
					web applications.
				</p>
			</AboutMe>
			<Experience />
			<Social />
			<Extras />
		</Layout>
	);
};

export default Home;
