import Image from 'next/image';
import Link from 'next/link';

export const LinkWrapper: React.FC<{
	href: string;
	children: React.ReactNode;
	linkIcon?: boolean;
}> = ({ href, children, linkIcon }) => {
	let cls = '';

	if (!linkIcon) {
		cls = 'underline underline-offset-4 hover:decoration-wavy';
	}

	return (
		<div
			className="inline-flex items-center space-x-1 hover:space-x-2"
			role="link"
		>
			<Link
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={cls || undefined}
			>
				{children}
			</Link>
			{linkIcon && (
				<Image
					src="/assets/svg/link.svg"
					alt="link"
					width={14}
					height={14}
					className="inline-block h-full"
				/>
			)}
		</div>
	);
};
