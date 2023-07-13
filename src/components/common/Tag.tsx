export const Tag: React.FC<{
	label: string;
	tagProps?: any;
}> = ({ label, tagProps }) => (
	<p
		className="lowercase text-black text-[12px] rounded-[20px] w-fit px-3 font-medium"
		aria-label={`tag-${label}`}
		{...tagProps}
	>
		{label}
	</p>
);
