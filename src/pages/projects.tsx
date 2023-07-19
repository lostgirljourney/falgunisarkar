import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Loader from '@/components/Loader';

const Projects = dynamic(() => import('@/containers/projects'), {
	ssr: false,
	loading: () => <Loader />
});

const ProjectsPage: NextPage = () => <Projects />;

export default ProjectsPage;
