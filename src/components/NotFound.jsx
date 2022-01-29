import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./sides/Navbar";
import Left from "./sides/Left";
import Right from "./sides/Right";

const helmetContext = {};

const NotFound404 = styled.main`
	color: #fff9f9;
	max-width: 100%;
	min-height: 100vh;
	padding: 6rem 3rem 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1;
	font-family: "Playfair Display", serif;
	div {
		max-width: 676px;
		display: flex;
		justify-content: center;
		flex-direction: column;
		@media only screen and (max-width: 700px) {
			padding: 0;
		}
	}
`;

const Span1 = styled.span`
	font-weight: 600;
	font-size: 25px;
	line-height: 2rem;
`;

const Span2 = styled.a`
	font-weight: 600;
	font-size: 25px;
	line-height: 2rem;
	color: #f67280;
	width: 50%;
	:hover {
		text-decoration: underline;
		text-decoration-thickness: 0.5px;
	}
`;

const P1 = styled.p`
	font-weight: 600;
	font-size: 3.125rem;
	line-height: 3.5rem;
	@media only screen and (max-width: 700px) {
		font-size: 40px;
	}
	@media only screen and (max-width: 550px) {
		font-size: 25px;
		line-height: 1;
	}
`;

const P2 = styled.a`
	font-weight: 700;
	font-size: 3.125rem;
	line-height: 2.75;
	color: #90caf9;
	font-style: italic;
	text-decoration: underline;
	text-decoration-thickness: 0.5px;
	@media only screen and (max-width: 700px) {
		font-size: 40px;
		font-weight: 600;
	}
	@media only screen and (max-width: 550px) {
		font-size: 25px;
	}
`;

const NotFound = () => {
	const [sideLeft, setsideLeft] = useState(<Left />);
	const [sideRight, setsideRight] = useState(<Right />);
	useLayoutEffect(() => {
		window.addEventListener("resize", function () {
			if (window.innerWidth <= 950) {
				setsideLeft(null);
				setsideRight(null);
			} else {
				setsideLeft(<Left />);
				setsideRight(<Right />);
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
					<title>404 | Falguni Sarkar</title>
				</Helmet>
			</HelmetProvider>
			<Navbar />
			{sideLeft}
			{sideRight}
			<NotFound404>
				<div>
					<Span1>CONTACT ME.</Span1>
					<br />
					<br />
					<P1>
						You have a new{" "}
						<span style={{ color: "#FFD15B" }}>project</span>?
					</P1>
					<P1>
						or want to say{" "}
						<span style={{ color: "#48BB9E" }}>hello</span>...
					</P1>
					<P2 href="mailto:falgunisarkar526@gmail.com">
						falgunisarkar526@gmail.com
					</P2>
					<Span2 href="/">Go to Home</Span2>
				</div>
			</NotFound404>
		</>
	);
};

export default NotFound;
