import {
	LinkWrapper,
	ListWrapper,
	SectionHeading,
	SectionWrapper
} from '@/components/common';

const socials = [
	<>
		shitposting at{' '}
		<LinkWrapper href="https://twitter.com/isshefalguni">
			twitter.com/isshefalguni
		</LinkWrapper>
		.
	</>,
	<>
		Mail me at{' '}
		<LinkWrapper href="mailto:falgunisarkar526@gmail.com">
			falgunisarkar526@gmail.com
		</LinkWrapper>
		.
	</>,
	<>
		check my codes at{' '}
		<LinkWrapper href="https://github.com/lostgirljourney">
			github.com/lostgirljourney
		</LinkWrapper>
		.
	</>,
	<>
		prefer networking at{' '}
		<LinkWrapper href="https://www.linkedin.com/in/falgunisarkar">
			linkedin.com/in/falgunisarkar
		</LinkWrapper>
		.
	</>,
	<>
		not so active (but oke) at{' '}
		<LinkWrapper href="https://www.instagram.com/lostgirljourney_">
			instagram.com/lostgirljourney_
		</LinkWrapper>
		.
	</>
];

const Social = () => (
	<SectionWrapper>
		<SectionHeading heading="accounts." fontColor="#FFDCB4" />
		<ListWrapper>
			{socials.map((social, index) => (
				<li key={`social-${index}`} className="lowercase">
					{social}
				</li>
			))}
		</ListWrapper>
	</SectionWrapper>
);

export default Social;
