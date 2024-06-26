import {
	DivWBorderWrapper,
	LinkWrapper,
	ListWrapper,
	SectionHeading,
	SectionWrapper,
	Tag
} from '@/components/common';
import Image from 'next/image';
import { colorMap } from '@/utils';

const projects = [
	{
		tags: ['hackathon winner', 'group project'],
		tagBgColors: [colorMap['hackathon winner'], colorMap['group project']],
		code: 'https://github.com/BlankCoders/awesome-todo-maintainer-extension',
		preview: 'https://devpost.com/software/awesome-todo-maintainer',
		title: 'Awesome Todo Maintainer',
		desc: (
			<ListWrapper>
				{[
					'Awesome Todo Maintainer Extension for Awesome Hackers; powered by NotionAPI.',
					'Manage your Notion TO-DOs Database right from VSCode.',
					'In this project, I worked on the extension UI and functionality part.',
					'Tech stacks involved are JavaScript, Node.js, Express.js, Visual Studio Code.'
				].map((item, index) => (
					<li key={`p0list-${index}`}>{item}</li>
				))}
			</ListWrapper>
		),
		thumbnail: 'atm-thumbnail.jpg'
	},
	{
		tags: ['hackathon winner', 'group project'],
		tagBgColors: [colorMap['hackathon winner'], colorMap['group project']],
		code: 'https://github.com/OctoplusNinja/Pride-Campus',
		preview: 'https://devpost.com/software/pride-campus',
		title: 'Pride Campus',
		desc: (
			<ListWrapper>
				{[
					'Spreading awareness about the LGBTQ+ Community with our Discord Bot.',
					'I worked on the bot UI/UX logic & interaction part.',
					'Tech stacks involved are JavaScript, Discord.js.'
				].map((item, index) => (
					<li key={`p1list-${index}`}>{item}</li>
				))}
			</ListWrapper>
		),
		thumbnail: 'pc-thumbnail.jpg'
	},
	{
		tags: ['solo project'],
		tagBgColors: [colorMap['solo project']],
		code: 'https://github.com/lostgirljourney/social-sphere',
		preview: 'https://mysocialsphere.vercel.app/',
		title: 'Social Sphere',
		desc: (
			<ListWrapper>
				{[
					'This is my website which shows all my links in a single place.',
					' It is designed and developed by myself.',
					'Tech stacks involved are TypeScript, React.js, Vite.js, TailwindCSS.'
				].map((item, index) => (
					<li key={`p2list-${index}`}>{item}</li>
				))}
			</ListWrapper>
		),
		thumbnail: 'ss-thumbnail.png'
	}
];

const ProjectsList = () => (
	<SectionWrapper>
		<SectionHeading heading="worked on." fontColor="#F6FA70" />
		<div className="space-y-4">
			{projects.map(
				(
					{ desc, tagBgColors, tags, title, code, preview, thumbnail },
					index
				) => {
					return (
						<DivWBorderWrapper key={`pro-${index}`}>
							<div className="space-y-2">
								<p className="text-sm font-medium" aria-label={title}>
									{title}
								</p>
								<div aria-label="links" className="space-x-4 text-[0.8125rem]">
									<LinkWrapper href={code} linkIcon>
										Code
									</LinkWrapper>
									<LinkWrapper href={preview} linkIcon>
										Preview
									</LinkWrapper>
								</div>
								<div aria-label="tags" className="space-x-2 flex">
									{tags.map((tag, i) => {
										return (
											<Tag
												label={tag}
												tagProps={{
													style: {
														backgroundColor: tagBgColors[i]
													}
												}}
												key={`proTag-${tag}`}
											/>
										);
									})}
								</div>
								<div className="py-2">{desc}</div>
								<Image
									src={`/assets/png/${thumbnail}`}
									alt={title}
									width="0"
									height="0"
									sizes="100vw"
									className="w-auto h-24 transition-opacity opacity-0 duration-1000"
									priority
									onLoadingComplete={(image) =>
										image.classList.remove('opacity-0')
									}
								/>
							</div>
						</DivWBorderWrapper>
					);
				}
			)}
		</div>
	</SectionWrapper>
);

export default ProjectsList;
