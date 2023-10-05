import {
	ParagraphWrapper,
	SectionHeading,
	SectionWrapper
} from '@/components/common';

const skills = [
	'javascript • typescript',
	'react.js • next.js',
	'react-query • react-redux',
	'tailwindcss • chakra-ui',
	'vite.js • node.js'
];

const Skills = () => {
	return (
		<SectionWrapper>
			<SectionHeading heading="skills (or tools)." fontColor="#EE6983" />
			<ParagraphWrapper>
				{skills.map((skill, index) => (
					<p
						className="text-sm xl:text-base font-normal"
						key={`skill-${index}`}
					>
						{skill}
					</p>
				))}
			</ParagraphWrapper>
		</SectionWrapper>
	);
};

export default Skills;
