export const PageSubheading: React.FC<{
	description: string;
}> = ({ description }) => (
	<p
		className="text-[#F6F7D4] text-base lowercase font-medium"
		style={{
			lineHeight: 'revert'
		}}
	>
		{description}
	</p>
);
