import React from 'react';

export const DivWBorderWrapper: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	return (
		<div
			className="border-l-2 border-solid pl-4"
			style={{
				borderImageSlice: 1,
				borderImageSource:
					'linear-gradient(180deg, #9376E0 0%, #E893CF 34.90%, #F3BCC8 67.19%, #F6FFA6 100%)'
			}}
		>
			{children}
		</div>
	);
};
