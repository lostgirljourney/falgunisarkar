import Layout from '@/components/Layout';
import { PageName, PageSubheading } from '@/components/common';
import CreditsList from './CreditsList';

const Credits = () => {
	return (
		<Layout title="Credits ⚡">
			<div className="mt-5 mb-10">
				<PageName label="credits ⚡" />
				<PageSubheading description="Inspired by beautiful minds, with heartfelt gratitude." />
			</div>
			<CreditsList />
		</Layout>
	);
};

export default Credits;
