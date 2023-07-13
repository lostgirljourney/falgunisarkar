export const SectionHeading: React.FC<{
	heading: string;
	fontColor: string;
}> = ({ heading, fontColor }) => (
	<p className="text-lg font-medium lowercase" style={{ color: fontColor }}>
		{heading}
	</p>
);
