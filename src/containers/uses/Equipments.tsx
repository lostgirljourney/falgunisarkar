import {
	LinkWrapper,
	ListWrapper,
	SectionHeading,
	SectionWrapper
} from '@/components/common';

const equipments = [
	<LinkWrapper href="https://www.apple.com/in/macbook-air/0">
		MacBook Air 13″ M2 chip
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
		href="https://www.samsung.com/in/smartphones/galaxy-a/galaxy-a34-5g-graphite-128gb-sm-a346ezkcins/"
		key="Galaxy A34 5G"
	>
		Galaxy A34 5G
	</LinkWrapper>,
	<LinkWrapper
		href="https://www.samsung.com/in/watches/galaxy-watch/galaxy-watch4-classic-black-bluetooth-sm-r890nzkainu/"
		key="Galaxy Watch4 Classic Bluetooth"
	>
		Galaxy Watch4 Classic Bluetooth
	</LinkWrapper>,
	<LinkWrapper
		href="https://in.nothing.tech/products/ear-2?variant=42273051672749"
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
