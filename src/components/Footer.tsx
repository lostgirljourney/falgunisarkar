import { useQuery } from '@tanstack/react-query';
import { LinkWrapper } from './common';
import { useSpotify } from '@/contexts/Spotify';

const Footer: React.FC<{
	isHome?: boolean;
}> = ({ isHome }) => {
	const { data: spotifyData, isLoading } = useSpotify();
	let spotifyLabel = <></>;

	if (!isHome) {
		if (isLoading) {
			spotifyLabel = <> | loading spotify data..</>;
		} else if (spotifyData?.isPlaying) {
			spotifyLabel = (
				<>
					{' '}
					| now playing{' '}
					{
						<LinkWrapper href={spotifyData?.songUrl || '#'}>
							{spotifyData.title?.toLowerCase()}
						</LinkWrapper>
					}{' '}
					on spotify
				</>
			);
		}
	}

	const { data: ghData } = useQuery(
		['github'],
		() =>
			fetch('https://api.github.com/repos/lostgirljourney/falgunisarkar')
				.then((res) => res.json())
				.then((data) => data),
		{
			refetchInterval: 1000 * 60 * 60
		}
	);

	return (
		<footer className="w-full text-center text-sm relative bottom-5 lowercase font-normal">
			Artfully designed with{' '}
			<LinkWrapper href="https://www.figma.com/">Figma</LinkWrapper>, coded with{' '}
			<LinkWrapper href="https://nextjs.org/">Next.js</LinkWrapper>, and{' '}
			<LinkWrapper href="https://tailwindcss.com/">TailwindCSS</LinkWrapper> |{' '}
			{ghData?.stargazers_count || 0} stars • {ghData?.forks_count || 0} forks
			on <LinkWrapper href={ghData?.html_url || '#'}>github</LinkWrapper>
			{spotifyLabel}
		</footer>
	);
};

export default Footer;
