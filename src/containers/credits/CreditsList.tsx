import {
	DivWBorderWrapper,
	LinkWrapper,
	ParagraphWrapper,
	SectionHeading,
	SectionWrapper,
	Tag
} from '@/components/common';

const credits = [
	{
		site: 'https://cretu.dev/',
		title: 'cretu.dev',
		desc: (
			<ParagraphWrapper>
				This site inspired me to create something minimal. Especially keeping it
				to the point. I came across the site from the famous{' '}
				<LinkWrapper href="https://light.cretu.dev/">light bulb</LinkWrapper>. I
				really loved the menu style and took a reference from it.
			</ParagraphWrapper>
		)
	},
	{
		site: 'https://www.yashsehgal.com/',
		title: 'yashsehgal.com',
		desc: (
			<ParagraphWrapper>
				I took the major design inspiration from this site only. Since, it was
				in light 🌕 mode, I thought of having my site in dark 🌑 mode.
			</ParagraphWrapper>
		)
	},
	{
		site: 'https://sreetamdas.com/',
		title: 'sreetamdas.com',
		desc: (
			<ParagraphWrapper>
				The first portfolio I came across, my site is heavily inspired by this
				site. This credits page is also inspired by this site&apos;s{' '}
				<LinkWrapper href="https://sreetamdas.com/credits/">
					/credits
				</LinkWrapper>
				. Also, other pages, such as <span className="font-medium">/uses</span>.
			</ParagraphWrapper>
		)
	},
	{
		site: 'https://read.cv/',
		title: 'read.cv',
		desc: (
			<div className="text-sm font-normal">
				I really loved the ui of{' '}
				<LinkWrapper href="https://read.cv/">read.cv</LinkWrapper>. Another
				major design inspiration I took for here only. This site is also helpful
				to publish your own cv. Check here{' '}
				<LinkWrapper href="https://read.cv/join/falgunisarkar">
					mine
				</LinkWrapper>
				.
			</div>
		)
	},
	{
		site: 'https://notion.so/',
		title: 'notion.so',
		desc: (
			<ParagraphWrapper>
				I am a big fan of notion&apos;s ui. The cover photo for each page is
				inspired from notion pages only.
			</ParagraphWrapper>
		)
	}
];

const CreditsList = () => (
	<>
		{' '}
		<SectionWrapper>
			<SectionHeading heading="inspired by." fontColor="#F2B354" />
			<div className="space-y-4">
				{credits.map(({ desc, title, site }, index) => {
					return (
						<DivWBorderWrapper key={`exp-${index}`}>
							<div className="space-y-4">
								<div className="space-y-1">
									<p className="text-sm font-medium" aria-label={title}>
										{title}
									</p>
									<div aria-label="links" className="space-x-4 text-xs">
										<LinkWrapper href={site} linkIcon>
											website
										</LinkWrapper>
									</div>
								</div>
								{desc}
							</div>
						</DivWBorderWrapper>
					);
				})}
			</div>
		</SectionWrapper>
		<SectionWrapper>
			<SectionHeading heading="special thanks to." fontColor="#1185EA" />
			<DivWBorderWrapper>
				<div className="space-y-4">
					<div className="space-y-1">
						<p className="text-sm font-medium" aria-label="Aniruddha Das">
							Aniruddha Das
						</p>
						<div aria-label="links" className="space-x-4 text-xs">
							<LinkWrapper href="https://twitter.com/isthatAniruddha" linkIcon>
								twitter
							</LinkWrapper>
							<LinkWrapper href="https://github.com/OctoplusNinja/" linkIcon>
								github
							</LinkWrapper>
						</div>
					</div>
					<ParagraphWrapper>
						<p>
							For helping me to keep designing this site better and better.
							<br />
							PS. This is v3 of my site, previous two were rejected by him.
							Sigh. 🙂
						</p>
					</ParagraphWrapper>
				</div>
			</DivWBorderWrapper>
		</SectionWrapper>
	</>
);

export default CreditsList;
