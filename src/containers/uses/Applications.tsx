import {
	LinkWrapper,
	ListWrapper,
	SectionHeading,
	SectionWrapper
} from '@/components/common';

const applications = [
	<>
		<LinkWrapper href="https://www.figma.com/">Figma</LinkWrapper> for designing
		my projects.
	</>,
	<>
		<LinkWrapper href="https://code.visualstudio.com/">
			Visual Studio Code
		</LinkWrapper>{' '}
		for development.
	</>,
	<>
		<LinkWrapper href="https://discord.com/">Discord</LinkWrapper> to hangout w/
		community friends.
	</>,
	<>
		<LinkWrapper href="https://www.spotify.com/">Spotify</LinkWrapper> for
		listening to music (I am a melophile).
	</>,
	<>
		<LinkWrapper href="https://brave.com/">Brave</LinkWrapper> (chromium
		browser) for browsing on internet.
	</>
];

const Applications = () => {
	return (
		<SectionWrapper>
			<SectionHeading heading="applications." fontColor="#82CD47" />
			<ListWrapper>
				{applications.map((application, index) => (
					<li className="text-sm font-normal" key={`app-${index}`}>
						{application}
					</li>
				))}
			</ListWrapper>
		</SectionWrapper>
	);
};

export default Applications;
