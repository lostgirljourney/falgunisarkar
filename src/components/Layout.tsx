import Head from 'next/head';
import Image from 'next/image';
import Footer from './Footer';
import Menus from './Menu';

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
}> = ({ headerImage, children, title, description, sectionProps, isHome }) => (
	<>
		<Head>
			<title>{`${title} | Falguni Sarkar`}</title>
			<meta name="description" content={description} />
		</Head>
		<main className="h-fit">
			<Image
				src={headerImage}
				alt="header"
				width="0"
				height="0"
				sizes="100vw"
				priority
				className="w-full h-50 object-cover absolute top-0 z-[-1]"
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
);

export default Layout;
