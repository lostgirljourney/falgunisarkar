import {
	ParagraphWrapper,
	SectionHeading,
	SectionWrapper
} from '@/components/common';

const AboutMe = () => (
	<SectionWrapper>
		<SectionHeading heading="about me." fontColor="#E5B8F4" />
		<ParagraphWrapper>
			<p>
				Passionate about crafting exceptional user experiences, I strive to
				create pixel-perfect interfaces that seamlessly blend design and
				engineering principles.
			</p>
			<br />
			<p>
				A lifelong learner, always seeking to expand my horizons. Thus,
				continuously exploring my capabilities to build efficient and scalable
				web applications.
			</p>
		</ParagraphWrapper>
	</SectionWrapper>
);

export default AboutMe;
