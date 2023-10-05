import {
	SectionWrapper,
	SectionHeading,
	DivWBorderWrapper,
	LinkWrapper,
	ParagraphWrapper
} from '@/components/common';

const extensions = [
	{
		name: 'Console Ninja',
		desc: 'JavaScript console.log output and runtime errors right next to your code.',
		link: 'https://marketplace.visualstudio.com/items?itemName=WallabyJs.console-ninja'
	},
	{
		name: 'ES7+ React/Redux/React-Native snippets',
		desc: 'Extensions for React, React-Native and Redux in JS/TS with ES7+ syntax. Customizable. Built-in integration with prettier.',
		link: 'https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets'
	},
	{
		name: 'Figma for VS Code',
		desc: 'Bring Figma into the text editor. Inspect designs, receive notifications, and get code suggestions.',
		link: 'https://marketplace.visualstudio.com/items?itemName=figma.figma-vscode-extension'
	},
	{
		name: 'GitHub Copilot',
		desc: 'Your AI pair programmer',
		link: 'https://marketplace.visualstudio.com/items?itemName=GitHub.copilot'
	},
	{
		name: 'GitLens — Git supercharged',
		desc: 'Supercharge Git and unlock untapped knowledge within your repository to better understand, write, and review code. Focus, collaborate, accelerate.',
		link: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens'
	},
	{
		name: 'JavaScript and TypeScript Nightly',
		desc: "Enables typescript@next to power VS Code's built-in JavaScript and TypeScript support",
		link: 'https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next'
	},
	{
		name: 'Tailwind CSS IntelliSense',
		desc: 'Intelligent Tailwind CSS tooling for VS Code',
		link: 'https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss'
	},
	{
		name: 'vscode-pets',
		desc: 'Pets for your VS Code',
		link: 'https://marketplace.visualstudio.com/items?itemName=tonybaloney.vscode-pets'
	}
];

const Extensions = () => (
	<SectionWrapper>
		<SectionHeading
			heading="visual studio code extensions."
			fontColor="#B6E388"
		/>
		{extensions.map(({ name, desc, link }, index) => (
			<DivWBorderWrapper key={`ex-${index}`}>
				<div className="space-y-4">
					<div className="space-y-1">
						<p className="text-sm font-medium" aria-label="Aniruddha Das">
							{name}
						</p>
						<div aria-label="links" className="text-xs">
							<LinkWrapper href={link} linkIcon>
								website
							</LinkWrapper>
						</div>
					</div>
					<ParagraphWrapper>
						<p>{desc}</p>
					</ParagraphWrapper>
				</div>
			</DivWBorderWrapper>
		))}
	</SectionWrapper>
);

export default Extensions;
