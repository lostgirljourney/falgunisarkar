import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" href="/assets/png/zap.png" />
				<meta
					name="description"
					content="Hey 👋🏻, I am Falguni Sarkar. Welcome to my Portfolio Website. ✨"
				/>
				<meta
					name="keywords"
					content="portfolio, falguni sarkar, falguni, falgunisarkar, lostgirljourney, isshefalguni, hackathons, Falguni Sarkar"
				/>
				<meta name="robots" content="index, follow" />
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="English" />
				<meta name="revisit-after" content="30 days" />
				<meta name="author" content="Falguni Sarkar" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://falgunisarkar.vercel.app/" />
				<meta property="og:title" content="Hey 👋🏻, I am Falguni Sarkar." />
				<meta
					property="og:description"
					content="Hey 👋🏻, I am Falguni Sarkar. Welcome to my Portfolio Website. ✨"
				/>
				<meta
					property="og:image"
					content="https://raw.githubusercontent.com/lostgirljourney/falgunisarkar/main/public/assets/png/meta.png"
				/>
				<meta property="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:url"
					content="https://falgunisarkar.vercel.app/"
				/>
				<meta property="twitter:title" content="Hey 👋🏻, I am Falguni Sarkar." />
				<meta
					property="twitter:description"
					content="Hey 👋🏻, I am Falguni Sarkar. Welcome to my Portfolio Website. ✨"
				/>
				<meta
					property="twitter:image"
					content="https://raw.githubusercontent.com/lostgirljourney/falgunisarkar/main/public/assets/png/meta.png"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
