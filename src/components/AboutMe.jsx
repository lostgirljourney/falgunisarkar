import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./sides/Navbar";
import zap from "./../assets/emotes/zap.png";
import coffee from "./../assets/emotes/coffee.png";
import grin from "./../assets/emotes/grin.png";
import nerd from "./../assets/emotes/nerd.png";
import thoughts from "./../assets/emotes/thoughts.png";
import Left from "./sides/Left";
import Right from "./sides/Right";

const helmetContext = {};

const About = styled.div`
	max-width: 100%;
	height: 100%;
	padding-top: 5.5rem;
	padding-bottom: 1.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	z-index: 1;
	@media only screen and (max-width: 700px) {
		padding-right: 1.5rem;
		padding-left: 1.5rem;
	}
`;

const Tag = styled.div`
	font-family: "Playfair Display", serif;
	font-style: italic;
	font-weight: 600;
	font-size: 2.81rem;
	line-height: 2rem;
	letter-spacing: 0.02em;
	color: #fff9f9;
	margin-bottom: 2.5rem;
	text-align: center;
`;

const Content = styled.div`
	font-family: "Inter", sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 27px;
	letter-spacing: 0.02em;
	max-width: 650px;
	color: #ffffff;
	p {
		margin-bottom: 1rem;
		:nth-child(3) {
			margin-bottom: 0;
		}
	}
	li {
		margin-bottom: 0.2rem;
		margin-left: 30px;
	}
	a:hover {
		text-decoration: underline;
	}
`;

const SpanStyle = styled.span`
	background: linear-gradient(90.55deg, #4568dc 21.79%, #b06ab3 71.65%);
	background-clip: text;
	-webkit-background-clip: text;
	-moz-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
`;

function AboutMe() {
	const [sideLeft, setsideLeft] = useState(<Left about />);
	const [sideRight, setsideRight] = useState(<Right about />);
	useLayoutEffect(() => {
		window.addEventListener("resize", function () {
			if (window.innerWidth <= 950) {
				setsideLeft(null);
				setsideRight(null);
			} else {
				setsideLeft(<Left about />);
				setsideRight(<Right about />);
			}
		});
		if (window.innerWidth <= 950) {
			setsideLeft(null);
			setsideRight(null);
		}
	}, []);

	return (
		<>
			<HelmetProvider context={helmetContext}>
				<Helmet>
					<meta charSet="utf-8" />
					<title>About Me | Falguni Sarkar</title>
				</Helmet>
			</HelmetProvider>

			<Navbar about />
			{sideLeft}
			{sideRight}

			<About>
				<Tag>
					Heya, <SpanStyle>Falguni Sarkar</SpanStyle> here!{" "}
					<img src={zap} alt="zap" height="45px" />
				</Tag>
				<Content>
					<p>
						I'm a developer from{" "}
						<span style={{ color: "#1ED760" }}>India</span>, a
						budding{" "}
						<span style={{ color: "#A6CF98" }}>
							Full-Stack Web Developer
						</span>{" "}
						and a{" "}
						<span style={{ color: "#A6CF98" }}>
							Problem Solving Enthusiast
						</span>
						, who is obsessed with the idea of improving herself and
						wants a platform to grow and excel. I'm currently
						working on
						<span style={{ color: "#61DAFB" }}> React</span>,
						<span style={{ color: "#8267BE" }}> React Redux</span>,
						<span style={{ color: "#57A818" }}> GSAP</span> and
						<span style={{ color: "#FFBD35" }}> JavaScript </span>
						related frameworks and libraries and also learning{" "}
						<span style={{ color: "#DB6B97" }}>
							Data Structure & Algorithm
						</span>
						. I've also worked with different languages like Python
						and CPP.
					</p>
					<p>
						I am currently a junior studying at{" "}
						<a
							style={{ color: "#F9C5D5" }}
							href="https://sittechno.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Siliguri Institute of Technology, India{" "}
						</a>
						pursuing a bachelors degree in{" "}
						<span style={{ color: "#F9C5D5" }}>
							Computer Science & Engineering
						</span>
						.
					</p>
					<p>Extras ~</p>
					<ul>
						<li>
							<a
								href="https://pronoun.is/she"
								style={{ color: "#DB6B97" }}
								target="_blank"
								rel="noopener noreferrer"
							>
								Pronouns:
							</a>{" "}
							She/Her/Hers{" "}
							<img src={grin} alt="grin" height="18px" />
						</li>
						<li>
							<span style={{ color: "#DB6B97" }}>Fun fact:</span>{" "}
							I like{" "}
							<span style={{ color: "#F9C5D5" }}>
								<a
									href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
									target="_blank"
									rel="noopener noreferrer"
									style={{ color: "#F9C5D5" }}
								>
									Shinchan
								</a>
								, sleeping, coding, listening to music, eating
								and blah blah blah
							</span>
							. I dislike everything except my likes!{" "}
							<img src={zap} alt="zap" height="18px" />
						</li>
						<li>
							<span style={{ color: "#DB6B97" }}>Coffee</span>{" "}
							Lover!{" "}
							<img src={coffee} alt="coffee" height="18px" />
						</li>
						<li>
							<a
								href="https://code.visualstudio.com/"
								style={{
									color: "#DB6B97",
								}}
								target="_blank"
								rel="noopener noreferrer"
							>
								VSCode:
							</a>{" "}
							My favourite code editor with loads of extensions
							and default theme.{" "}
							<img src={nerd} alt="nerd" height="18px" />
						</li>
						<li>
							AMA{" "}
							<a
								href="mailto:falgunisarkar526@gmail.com"
								style={{
									color: "#DB6B97",
									textDecoration: "underline",
								}}
							>
								here
							</a>
							, I am happy to help!{" "}
							<img src={thoughts} alt="thoughts" height="18px" />
						</li>
					</ul>
				</Content>
			</About>
		</>
	);
}

export default AboutMe;
