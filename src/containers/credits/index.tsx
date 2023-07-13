import Layout from '@/components/Layout';
import { PageName, PageSubheading } from '@/components/common';
import CreditsList from './CreditsList';

const Credits = () => {
	return (
		<Layout
			title="Credits ⚡"
			description="Hey 👋🏻, I am Falguni Sarkar. This is page is for the credits to those who inspired me to design this page."
			headerImage="/assets/png/credits.png"
		>
			<div className="mt-5 mb-10">
				<PageName label="credits ⚡" />
				<PageSubheading description="Inspired by beautiful minds, with heartfelt gratitude." />
			</div>
			<CreditsList />
		</Layout>
	);
};

export default Credits;
