export const SectionWrapper: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => <div className="flex flex-col gap-5">{children}</div>;
