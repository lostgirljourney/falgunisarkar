export const ParagraphWrapper: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => (
	<div
		className="space-y-1 text-sm xl:text-base font-normal xl:text-base"
		style={{ lineHeight: 'normal' }}
	>
		{children}
	</div>
);
