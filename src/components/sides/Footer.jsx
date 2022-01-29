import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import heart from "./../../assets/emotes/heart.png";
import star from "./../../assets/svgs/star.svg";
import fork from "./../../assets/svgs/fork.svg";

const AddnInfo = styled.footer`
	height: auto;
	width: 100%;
	padding: 1.5rem 0 1.125rem;
	font-family: "Inter", sans-serif;
	font-weight: 500;
	font-size: 0.875rem;
	line-height: 1.0625rem;
	color: #d1d5ee;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		a {
			color: #d1d5ee;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		a:hover {
			color: #8795de;
		}
	}
	p {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		height: 2rem;
		width: 100%;
		a:hover {
			text-decoration: underline;
		}
	}
`;

const baseURL = "https://api.github.com/repos/lostgirljourney/falgunisarkar";

const Footer = () => {
	const [countStar, setCountStar] = useState(0);
	const [countFork, setCountFork] = useState(0);

	useEffect(() => {
		axios
			.get(`${baseURL}/forks`)
			.then((response) => setCountFork(response.data.length));
		axios
			.get(`${baseURL}/stargazers`)
			.then((response) => setCountStar(response.data.length));
	}, []);

	return (
		<AddnInfo>
			<div>
				<a
					href="https://github.com/lostgirljourney/falgunisarkar/stargazers"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={star} alt="star" width="17px" />
					&nbsp;{countStar}
				</a>
				<p>&nbsp;&nbsp;•&nbsp;&nbsp;</p>
				<a
					href="https://github.com/lostgirljourney/falgunisarkar/network/members"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={fork} alt="fork" width="17px" />
					&nbsp;{countFork}
				</a>
			</div>
			<p>
				Made with&nbsp;
				<img src={heart} alt="heart" width="14px" />
				&nbsp;&#38;&nbsp;
				<a
					href="https://reactjs.org/"
					target="_blank"
					rel="noopener noreferrer"
					style={{ color: "#61DAFB" }}
				>
					ReactJS
				</a>
				&nbsp;• View source on&nbsp;
				<a
					href="https://github.com/lostgirljourney/falgunisarkar"
					target="_blank"
					rel="noopener noreferrer"
					style={{ color: "#8795DE" }}
				>
					Github
				</a>
				&nbsp;• Find me on&nbsp;
				<a
					href="https://twitter.com/isshefalguni"
					target="_blank"
					rel="noopener noreferrer"
					style={{ color: "#1D9BF0" }}
				>
					Twitter
				</a>
				&nbsp;• Jam with me on&nbsp;
				<a
					href="https://open.spotify.com/user/31glrpxgbfoi6qprbrezs4cwwaiu"
					target="_blank"
					rel="noopener noreferrer"
					style={{ color: "#1ED760" }}
				>
					Spotify
				</a>
			</p>
		</AddnInfo>
	);
};

export default Footer;
