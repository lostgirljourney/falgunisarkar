import {
	LinkWrapper,
	ListWrapper,
	SectionHeading,
	SectionWrapper
} from '@/components/common';

const equipments = [
	<>
		<LinkWrapper href="https://support.hp.com/in-en/document/c06103100">
			HP Notebook - 15-da0295tu
		</LinkWrapper>{' '}
		[upgraded w/ 8GB RAM & 128GB SSD]
	</>,
	<LinkWrapper
		href="https://zebronics.com/products/zeb-transformer-m"
		key="ZEBRONICS ZEB-TRANSFORMER-M Wired Optical Gaming Mouse"
	>
		ZEBRONICS ZEB-TRANSFORMER-M Wired Optical Gaming Mouse
	</LinkWrapper>,
	<LinkWrapper
		href="https://www.portronics.com/products/toad-24"
		key="Portronics Toad 24"
	>
		Portronics Toad 24
	</LinkWrapper>,
	<LinkWrapper
		href="https://zebronics.com/products/zeb-war"
		key="Zebronics War Gaming Keyboard"
	>
		Zebronics War Gaming Keyboard
	</LinkWrapper>,
	<LinkWrapper
		href="https://www.samsung.com/levant/microsite/galaxy-m/m30s/"
		key="Galaxy M30s"
	>
		Galaxy M30s
	</LinkWrapper>,
	<LinkWrapper
		href="https://www.boat-lifestyle.com/products/watch-wave-pro"
		key="boAt Wave pro"
	>
		boAt Wave pro
	</LinkWrapper>,
	<LinkWrapper
		href="https://in.nothing.tech/products/ear-2?variant=42144850215085"
		key="Nothing Ear (2)"
	>
		Nothing Ear (2)
	</LinkWrapper>
];

const Equipments = () => {
	return (
		<SectionWrapper>
			<SectionHeading heading="equipments." fontColor="#B1D7B4" />
			<ListWrapper>
				{equipments.map((application, index) => (
					<li className="text-sm font-normal" key={`app-${index}`}>
						{application}
					</li>
				))}
			</ListWrapper>
		</SectionWrapper>
	);
};

export default Equipments;
