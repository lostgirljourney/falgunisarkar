import {
	DivWBorderWrapper,
	LinkWrapper,
	ListWrapper,
	SectionHeading,
	SectionWrapper,
	Tag
} from '@/components/common';
import { colorMap } from '@/utils';

const experiences = [
	{
		duration: "Aug '23 - Present",
		tags: ['full-time'],
		tagBgColors: [colorMap['full-time']],
		href: 'https://www.salesforce.com/in/?ir=1',
		get title() {
			return (
				<LinkWrapper href={this.href} linkIcon>
					Associate Technical Support Engineer{' '}
					<span className="font-normal">at</span> Salesforce
				</LinkWrapper>
			);
		},
		location: 'Hybrid',
		desc: (
			<ListWrapper
				liProps={{
					className: 'max-w-[385px]'
				}}
			>
				<li>I am a new hire at the training phase. ✨</li>
			</ListWrapper>
		)
	},
	{
		duration: "Dec '22 - Apr '23",
		tags: ['internship'],
		tagBgColors: [colorMap.internship],
		href: 'https://theinternetfolks.com/',
		get title() {
			return (
				<LinkWrapper href={this.href} linkIcon>
					SWE Intern <span className="font-normal">at</span> The Internet Folks
				</LinkWrapper>
			);
		},
		location: 'Remote',
		desc: (
			<ListWrapper
				liProps={{
					className: 'max-w-[385px]'
				}}
			>
				<li>
					I worked and created POCs for different projects and also solved many
					high-priority bugs related to the core functionality of the given
					projects.
				</li>
				<li>
					I&apos;ve mainly worked on Typescript, Next.js, React-Redux, React
					Query and Chakra UI for CSS.
				</li>
			</ListWrapper>
		)
	},
	{
		duration: "Aug '22 - Nov '22",
		tags: ['full-time'],
		tagBgColors: [colorMap['full-time']],
		href: 'https://fleapo.com/',
		get title() {
			return (
				<LinkWrapper href={this.href} linkIcon>
					Full Stack Developer <span className="font-normal">at</span> Fleapo
				</LinkWrapper>
			);
		},
		location: 'On-site',
		desc: (
			<ListWrapper
				liProps={{
					className: 'max-w-[385px]'
				}}
			>
				<li>
					I&apos;ve been here as a full stack developer, working for the first
					time in backend space with the tech stack MongoDB and Node.js.
				</li>
				<li>
					I&apos;ve built a project from scratch in the backend and also worked
					forward to integrate the frontend.
				</li>
			</ListWrapper>
		)
	},
	{
		duration: "Mar '22 - Aug '22",
		tags: ['internship'],
		tagBgColors: [colorMap.internship],
		href: 'https://procedure.tech/',
		get title() {
			return (
				<LinkWrapper href={this.href} linkIcon>
					SDE0 (Intern) <span className="font-normal">at</span> Procedure
				</LinkWrapper>
			);
		},
		location: 'Remote',
		desc: (
			<ListWrapper
				liProps={{
					className: 'max-w-[385px]'
				}}
			>
				<li>
					I&apos;ve worked as a Frontend Developer Intern on projects based on
					Next.js + Typescript.
				</li>
				<li>
					I&apos;ve fixed most of the high-priority UI fixes as well as
					developed complex UI components per the requirement.
				</li>
			</ListWrapper>
		)
	}
];

const Experience = () => (
	<SectionWrapper>
		<SectionHeading heading="experience of being." fontColor="#E893CF" />
		<div className="space-y-4">
			{experiences.map(
				({ desc, duration, location, tagBgColors, tags, title }, index) => {
					return (
						<DivWBorderWrapper key={`exp-${index}`}>
							<div className="space-y-2 md:space-y-0 md:flex md:space-x-11">
								<div className="flex justify-between md:block md:space-y-2">
									<p className="text-sm" aria-label="duration">
										{duration}
									</p>
									{tags.map((tag, i) => {
										return (
											<Tag
												label={tag}
												tagProps={{
													style: {
														backgroundColor: tagBgColors[i]
													}
												}}
												key={`exp-${index}`}
											/>
										);
									})}
								</div>
								<div className="flex flex-col gap-2">
									<div className="text-sm font-medium" aria-label="place">
										{title}
										<br />
										{location}
									</div>
									{desc}
								</div>
							</div>
						</DivWBorderWrapper>
					);
				}
			)}
		</div>
	</SectionWrapper>
);

export default Experience;
