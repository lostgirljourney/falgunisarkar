import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Footer from './Footer';
import Menus from './Menu';
import Loader from './Loader';

const Layout: React.FC<{
	headerImage: string;
	children: React.ReactNode;
	title: string;
	description: string;
	sectionProps?: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLElement>,
		HTMLElement
	>;
	isHome?: boolean;
}> = ({ headerImage, children, title, description, sectionProps, isHome }) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1500);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<Head>
				<title>{`${title} | Falguni Sarkar`}</title>
				<meta name="description" content={description} />
			</Head>
			{loading ? (
				<Loader animate />
			) : (
				<>
					<main className="h-fit">
						<Image
							src={headerImage}
							alt="header"
							width="0"
							height="0"
							sizes="100vw"
							priority
							className="w-full h-50 object-cover absolute top-0 z-[-1] transition-opacity opacity-0 duration-1000"
							onLoadingComplete={(image) => image.classList.remove('opacity-0')}
						/>
						<main
							className="container mx-auto my-40 max-w-[585px] w-full min-h-fit flex flex-col gap-10 px-4 md:px-0"
							{...sectionProps}
						>
							{children}
						</main>
					</main>
					<Footer isHome={isHome} />
					<Menus />
				</>
			)}
		</>
	);
};

export default Layout;
