import React from 'react';

export const PageName: React.FC<{
	label: string;
}> = ({ label }) => (
	<p
		style={{ lineHeight: 'normal' }}
		className="text-[#F6F7D4] text-[32px] lowercase font-semibold"
	>
		{label}
	</p>
);
