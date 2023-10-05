export const SectionHeading: React.FC<{
	heading: string;
	fontColor: string;
}> = ({ heading, fontColor }) => (
	<p
		className="text-lg xl:text-xl font-medium lowercase"
		style={{ color: fontColor }}
	>
		{heading}
	</p>
);
