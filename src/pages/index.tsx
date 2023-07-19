import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Loader from '@/components/Loader';

const Home = dynamic(() => import('@/containers/home'), {
	ssr: false,
	loading: () => <Loader />
});

const HomePage: NextPage = () => <Home />;

export default HomePage;
