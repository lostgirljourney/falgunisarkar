export const ListWrapper: React.FC<{
	children: React.ReactNode;
	liProps?: React.HTMLProps<HTMLUListElement>;
}> = ({ children, liProps }) => {
	let cls = 'space-y-1 list-disc w-full list-outside pl-6 text-sm font-normal';

	if (liProps) {
		cls = `${cls} ${liProps.className}`;
	}

	return (
		<ul className={cls} style={{ lineHeight: 'normal' }}>
			{children}
		</ul>
	);
};
