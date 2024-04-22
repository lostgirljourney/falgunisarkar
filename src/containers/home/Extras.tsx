import { useQuery } from '@tanstack/react-query';
import { SpotifyData } from '@/utils';
import {
	SectionWrapper,
	SectionHeading,
	ListWrapper,
	LinkWrapper
} from '@/components/common';

const Extras = () => {
	const { data, isLoading } = useQuery<SpotifyData>({
		queryKey: ['now-playing'],
		queryFn: () => fetch('/api/spotify').then((r) => r.json()),
		refetchInterval: 1000 * 60 * 3,
		refetchOnWindowFocus: true
	});
	let spotifyLabel = <></>;

	if (isLoading) {
		spotifyLabel = <>loading spotify data..</>;
	} else if (data?.isPlaying) {
		spotifyLabel = (
			<>
				Currently listening to{' '}
				{<LinkWrapper href={data.songUrl || '#'}>{data.title}</LinkWrapper>} on
				Spotify
			</>
		);
	} else {
		spotifyLabel = <>not listening to anything on spotify</>;
	}

	const extras = [
		spotifyLabel,
		<>
			<LinkWrapper href="https://drive.google.com/file/d/1BQgJio8KdAfpxMUXta0UM6RtabkwqV6j/view">
				Resume
			</LinkWrapper>
		</>
	];

	return (
		<SectionWrapper>
			<SectionHeading heading="extras." fontColor="#E5E5E5" />
			<ListWrapper>
				{extras.map((extra, index) => (
					<li key={`extra-${index}`}>{extra}.</li>
				))}
			</ListWrapper>
		</SectionWrapper>
	);
};
export default Extras;
