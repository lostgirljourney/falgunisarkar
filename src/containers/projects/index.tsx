import { PageName } from '@/components/common';
import Layout from '@/components/Layout';
import ProjectsList from './ProjectsList';
import Skills from './Skills';

const Projects = () => (
	<Layout
		title="Projects 👩🏻‍💻"
		description="Hey 👋🏻, I am Falguni Sarkar. This is my project showcase page. ✨"
		headerImage="/assets/png/projects.png"
	>
		<div className="mt-5 mb-10">
			<PageName label="Projects 👩🏻‍💻" />
		</div>
		<ProjectsList />
		<Skills />
	</Layout>
);

export default Projects;
