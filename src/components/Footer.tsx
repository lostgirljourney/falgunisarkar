import { useQuery } from '@tanstack/react-query';
import { SpotifyData } from '@/utils';
import { LinkWrapper } from './common';

const Footer: React.FC<{
	isHome?: boolean;
}> = ({ isHome }) => {
	const { data: spotifyData, isLoading } = useQuery<SpotifyData>(
		['now-playing'],
		() => fetch('/api/spotify').then((r) => r.json()),
		{
			refetchInterval: 1000 * 60 * 3,
			refetchOnWindowFocus: true
		}
	);
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
		<footer className="w-full max-w-[550px] lg:max-w-fit text-center text-sm xl:text-base relative bottom-0 pb-5 lowercase font-normal mx-auto px-4 md:px-0">
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
