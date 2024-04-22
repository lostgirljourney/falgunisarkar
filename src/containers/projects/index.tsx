import { PageName } from '@/components/common';
import Layout from '@/components/Layout';
import ProjectsList from './ProjectsList';

const Projects = () => (
	<Layout title="Projects 👩🏻‍💻">
		<div className="mt-5 mb-10">
			<PageName label="Projects 👩🏻‍💻" />
		</div>
		<ProjectsList />
	</Layout>
);

export default Projects;
