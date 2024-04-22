import {
	ListWrapper,
	SectionHeading,
	SectionWrapper
} from '@/components/common';

const skills = [
	'JavaScript | TypeScript',
	'React.js | Next.js',
	'React-Redux | React Query',
	'TailwindCSS | Chakra-UI',
	'Vite.js | Node.js'
];

const Skills = () => {
	return (
		<SectionWrapper>
			<SectionHeading heading="skills (or tools)." fontColor="#EE6983" />
			<ListWrapper>
				{skills.map((skill, index) => (
					<li className="text-sm font-normal" key={`skill-${index}`}>
						{skill}
					</li>
				))}
			</ListWrapper>
		</SectionWrapper>
	);
};

export default Skills;
