import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" href="/assets/png/zap.png" />
				<meta
					name="keywords"
					content="portfolio, falguni sarkar, falguni, falgunisarkar, lostgirljourney, isshefalguni, hackathons, Falguni Sarkar"
				/>
				<meta name="robots" content="index, follow" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="English" />
				<meta name="revisit-after" content="30 days" />
				<meta name="author" content="Falguni Sarkar" />

				<meta name="title" content="Hey 👋🏻, I'm Falguni Sarkar." />
				<meta property="og:title" content="Hey 👋🏻, I'm Falguni Sarkar." />
				<meta property="twitter:title" content="Hey 👋🏻, I'm Falguni Sarkar." />

				<meta
					name="description"
					content="A Passionate Engineer from India. Welcome to my Space. 👋"
				/>
				<meta
					property="og:description"
					content="A Passionate Engineer from India. Welcome to my Space. 👋"
				/>
				<meta
					property="twitter:description"
					content="A Passionate Engineer from India. Welcome to my Space. 👋"
				/>

				<meta property="og:type" content="website" />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:site" content="@isshefalguni" />

				<meta property="og:url" content="https://falgunisarkar.vercel.app/" />
				<meta
					property="twitter:url"
					content="https://falgunisarkar.vercel.app/"
				/>

				<meta
					property="og:image"
					content="https://raw.githubusercontent.com/lostgirljourney/falgunisarkar/main/public/assets/png/meta.png"
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
