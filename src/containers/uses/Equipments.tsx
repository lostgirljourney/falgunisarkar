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
		href="https://www.oneplus.in/oneplus-bullets-wireless-z2"
		key="OnePlus Bullets Wireless Z2 Bluetooth Headset"
	>
		OnePlus Bullets Wireless Z2 Bluetooth Headset
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
