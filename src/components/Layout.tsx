import Head from 'next/head';
import Image from 'next/image';
import Footer from './Footer';
import Menus from './Menu';
import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'] });

const Layout: React.FC<{
	children: React.ReactNode;
	title: string;
	sectionProps?: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLElement>,
		HTMLElement
	>;
	isHome?: boolean;
}> = ({ children, title, sectionProps, isHome }) => (
	<>
		<Head>
			<title>{`${title} | Falguni Sarkar`}</title>
			<meta name="title" content={`${title} | Falguni Sarkar`} />
			<meta property="og:title" content={`${title} | Falguni Sarkar`} />
			<meta property="twitter:title" content={`${title} | Falguni Sarkar`} />
		</Head>
		<div
			className={`relative top-0 bg-black text-white ${outfit.className}`}
			aria-label="main-content"
		>
			<main className="h-fit">
				<Image
					src="/assets/png/header.jpg"
					alt="header"
					width="0"
					height="0"
					sizes="100vw"
					priority
					className="w-full h-50 object-cover absolute top-0 z-[0] transition-opacity opacity-0 duration-1000"
					onLoadingComplete={(image) => image.classList.remove('opacity-0')}
				/>
				<main
					className="container mx-auto py-40 max-w-[585px] w-full min-h-fit flex flex-col gap-10 px-4 md:px-0 relative"
					{...sectionProps}
				>
					{children}
				</main>
			</main>
			<Footer isHome={isHome} />
		</div>
		<Menus />
	</>
);

export default Layout;
