import { PageName } from '@/components/common';
import Layout from '@/components/Layout';
import Applications from './Applications';
import Equipments from './Equipments';
import Extensions from './Extensions';

const Uses = () => (
	<Layout title="Uses 🛠">
		<div className="mt-5 mb-10">
			<PageName label="Uses 🛠" />
		</div>
		<Applications />
		<Extensions />
		<Equipments />
	</Layout>
);

export default Uses;
