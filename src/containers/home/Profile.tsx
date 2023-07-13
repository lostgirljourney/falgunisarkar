import Image from 'next/image';
import { PageName } from '../../components/common';

const Profile: React.FC<{
	src: string;
	isPlaying: boolean;
}> = ({ src, isPlaying }) => (
	<div className="flex items-center gap-4 mb-5">
		<div className="relative group" role="group">
			<Image
				src={src}
				alt="display picture"
				width="100"
				height="100"
				priority
				className="object-cover rounded-full border-solid border-white hue-rotate-15 group-hover:hue-rotate-0"
			/>
			{isPlaying && (
				<>
					<div className="flex items-center justify-center text-[10px] bg-[#CDE990] w-5 h-5 rounded-full absolute bottom-1 right-0">
						<Image
							src="/assets/png/stats.png"
							alt="status"
							width="0"
							height="0"
							sizes="100vw"
							className="w-full h-auto z-20"
						/>
					</div>
					<p className="rounded-[20px] text-[10px] font-medium items-center h-5 pl-6 pr-2 bg-[#CDE990] absolute bottom-1 left-20 z-0 w-fit text-black whitespace-nowrap hidden group-hover:flex">
						this mode is always on! 🎶
					</p>
				</>
			)}
		</div>
		<div className="flex flex-col justify-center gap-0">
			<PageName label="Falguni Sarkar" />
			<p
				className="text-[#F6F7D4] text-base lowercase font-medium"
				style={{
					lineHeight: 'revert'
				}}
			>
				Frontend developer in India
			</p>
		</div>
	</div>
);

export default Profile;
