import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Loader from '@/components/Loader';

const Credits = dynamic(() => import('@/containers/credits'), {
	ssr: false,
	loading: () => <Loader />
});

const CreditsPage: NextPage = () => <Credits />;

export default CreditsPage;
