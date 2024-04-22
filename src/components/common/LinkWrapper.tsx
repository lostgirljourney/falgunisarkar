import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import { cn } from '@/utils';

interface LinkWrapperProps extends LinkProps {
	href: string;
	children: React.ReactNode;
	linkIcon?: boolean;
	className?: string;
}

export const LinkWrapper: React.FC<LinkWrapperProps> = ({
	href,
	children,
	linkIcon,
	className
}) => {
	return (
		<Link
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={cn(
				'inline-flex items-center',
				className,
				linkIcon
					? 'gap-1 hover:gap-2 transition-all ease-out'
					: 'underline underline-offset-4 hover:decoration-wavy'
			)}
			role="link"
		>
			<div>{children}</div>
			{linkIcon && (
				<Image
					src="/assets/svg/link.svg"
					alt="link"
					width={14}
					height={14}
					className="inline-block h-full"
				/>
			)}
		</Link>
	);
};
