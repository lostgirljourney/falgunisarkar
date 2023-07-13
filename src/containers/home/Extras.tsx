import { useQuery } from '@tanstack/react-query';
import { SpotifyData } from '@/utils';
import {
	SectionWrapper,
	SectionHeading,
	ListWrapper,
	LinkWrapper
} from '@/components/common';

const Extras = () => {
	const { data, isLoading } = useQuery<SpotifyData>(
		['now-playing'],
		() => fetch('/api/spotify').then((r) => r.json()),
		{
			refetchInterval: 1000 * 60 * 3,
			refetchOnWindowFocus: true
		}
	);
	let spotifyLabel = <></>;

	if (isLoading) {
		spotifyLabel = <>loading spotify data..</>;
	} else if (data?.isPlaying) {
		spotifyLabel = (
			<>
				currently listening to{' '}
				{
					<LinkWrapper href={data.songUrl || '#'}>
						{data.title?.toLowerCase()}
					</LinkWrapper>
				}{' '}
				on spotify
			</>
		);
	} else {
		spotifyLabel = <>not listening to anything on spotify</>;
	}

	const extras = [
		spotifyLabel,
		<>
			<LinkWrapper href="https://drive.google.com/file/d/1BQgJio8KdAfpxMUXta0UM6RtabkwqV6j/view">
				resume
			</LinkWrapper>
		</>
	];

	return (
		<SectionWrapper>
			<SectionHeading heading="extras." fontColor="#E5E5E5" />
			<ListWrapper>
				{extras.map((extra, index) => (
					<li key={`extra-${index}`} className="lowercase">
						{extra}.
					</li>
				))}
			</ListWrapper>
		</SectionWrapper>
	);
};
export default Extras;
