import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Loader from '@/components/Loader';

const Uses = dynamic(() => import('@/containers/uses'), {
	ssr: false,
	loading: () => <Loader />
});

const UsesPage: NextPage = () => <Uses />;

export default UsesPage;
