import {
	ParagraphWrapper,
	SectionHeading,
	SectionWrapper
} from '@/components/common';

const AboutMe: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => (
	<SectionWrapper>
		<SectionHeading heading="about me." fontColor="#E5B8F4" />
		<ParagraphWrapper>{children}</ParagraphWrapper>
	</SectionWrapper>
);

export default AboutMe;
