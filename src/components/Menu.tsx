import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MenuItem: React.FC<{
	src: string;
	name: string;
	color: string;
	href?: string;
	menuProps?: any;
}> = ({ src, name, color, href, menuProps }) => {
	const commonClasses =
		'flex justify-center items-center rounded-full w-11 h-11';

	return (
		<>
			{href ? (
				<Link
					href={href}
					title={name}
					aria-label={name}
					className={commonClasses}
					style={{ backgroundColor: color }}
				>
					<Image src={src} alt={name} width={22} height={22} />
				</Link>
			) : (
				<p
					title={name}
					aria-label={name}
					className={`cursor-pointer ${commonClasses}`}
					style={{ backgroundColor: color }}
					{...menuProps}
				>
					<Image src={src} alt={name} width={22} height={22} />
				</p>
			)}
		</>
	);
};

const menuItems = [
	{
		href: '/',
		src: '/home.svg',
		name: 'home',
		color: '#FFFAE7'
	},
	{
		href: '/projects',
		src: '/projects.svg',
		name: 'projects',
		color: '#F2C0FF'
	},
	{
		href: '/uses',
		src: '/uses.svg',
		name: 'uses',
		color: '#F5F0BB'
	},
	{
		href: '/credits',
		src: '/credits.svg',
		name: 'credits',
		color: '#C4DFAA'
	},
	{
		menuProps: {
			onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' })
		},
		src: '/top.svg',
		name: 'go to top',
		color: '#FCC5C0'
	}
];

const Menus = () => (
	<div
		className="fixed bottom-5 right-5 flex justify-center items-center flex-col gap-2"
		aria-label="menu"
	>
		{menuItems.map(({ color, href, name, src, menuProps }) =>
			href ? (
				<MenuItem
					href={href}
					src={`/assets/svg${src}`}
					name={name}
					color={color}
					key={name}
				/>
			) : (
				<MenuItem
					menuProps={menuProps}
					src={`/assets/svg${src}`}
					name={name}
					color={color}
					key={name}
				/>
			)
		)}
	</div>
);

export default Menus;
