import { Helmet, HelmetProvider } from "react-helmet-async";
import styled from "styled-components";
import Navbar from "./Navbar";
import zap from "./../assets/emotes/zap.png";
import coffee from "./../assets/emotes/coffee.png";
import grin from "./../assets/emotes/grin.png";
import nerd from "./../assets/emotes/nerd.png";
import thoughts from "./../assets/emotes/thoughts.png";
import Footer from "./Footer";

const helmetContext = {};

const About = styled.div`
	padding-top: 4.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const Tag = styled.div`
	font-family: Playfair Display;
	font-style: italic;
	font-weight: 600;
	font-size: 2.81rem;
	line-height: 3.75rem;
	letter-spacing: 0.02em;
	color: #fff9f9;
	margin-bottom: 27px;
`;

const Content = styled.div`
	font-family: Inter;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 27px;
	letter-spacing: 0.02em;
	width: 650px;
	height: 486px;
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
	return (
		<>
			<HelmetProvider context={helmetContext}>
				<Helmet>
					<meta charSet="utf-8" />
					<title>About Me | Falguni Sarkar</title>
				</Helmet>
				<Navbar about />
			</HelmetProvider>
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
						related frameworks and libraries and also learning Data
						Structure & Algorithm. I've also worked with different
						languages like Python and CPP.
					</p>
					<p>
						I am currently a junior studying at{" "}
						<span style={{ color: "#F9C5D5" }}>
							Siliguri Institute of Technology, India{" "}
						</span>
						pursuing a bachelors degree of in{" "}
						<span style={{ color: "#F9C5D5" }}>
							Computer Science & Engineering
						</span>
						.
					</p>
					<p>Extras ~</p>
					<ul>
						<li>
							<span style={{ color: "#DB6B97" }}>Pronouns:</span>{" "}
							She/Her/Hers{" "}
							<img src={grin} alt="grin" height="18px" />
						</li>
						<li>
							<span style={{ color: "#DB6B97" }}>Fun fact:</span>{" "}
							I like{" "}
							<span style={{ color: "#F9C5D5" }}>
								Shinchan, sleeping, coding, listening to music,
								eating and blah blah blah
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
							<span style={{ color: "#DB6B97" }}>VSCode:</span> My
							favourite code editor with loads of extensions and
							default theme.{" "}
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

			<Footer />
		</>
	);
}

export default AboutMe;
