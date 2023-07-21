import { PageName } from '@/components/common';
import Layout from '@/components/Layout';
import ProjectsList from './ProjectsList';
import Skills from './Skills';

const Projects = () => (
	<Layout title="Projects 👩🏻‍💻">
		<div className="mt-5 mb-10">
			<PageName label="Projects 👩🏻‍💻" />
		</div>
		<ProjectsList />
		<Skills />
	</Layout>
);

export default Projects;
