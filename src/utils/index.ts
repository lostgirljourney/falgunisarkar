import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export interface SpotifyData {
	isPlaying: boolean;
	title?: string;
	songUrl?: string;
}

export const colorMap = {
	'full-time': '#F6D860',
	internship: '#FFE6BC',
	'hackathon winner': '#FF78C4',
	'group project': '#E1AEFF',
	'solo project': '#99DBF5'
};
