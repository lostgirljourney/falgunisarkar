import styled from "styled-components";
import gh from "./../../assets/svgs/gh.svg";
import menu from "./../../assets/svgs/menu.svg";
import close from "./../../assets/svgs/close.svg";
// import { useLayoutEffect, useState } from "react";

const Nav = styled.div`
	width: 100%;
	height: 3.75rem;
	position: fixed;
	top: 0;
	background-color: #040506;
	color: #d1d5ee;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 3.56rem;
	z-index: 10;
	@media only screen and (max-width: 700px) {
		padding: 0 1.5rem;
	}
`;

const Name = styled.p`
	font-family: "Inter", sans-serif;
	font-weight: bold;
	font-size: 1.5rem;
	line-height: 1.8rem;
	color: #d1d5ee;
	cursor: pointer;
	text-align: center;
	width: 6.1875rem;
`;

const NavSection = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 16rem;
	font-family: Inter;
	font-style: normal;
	font-weight: 400;
	font-size: 1rem;
	line-height: 1.5rem;
	a {
		color: #a4a7bd;
	}
	a:hover {
		color: #d1d5ee;
	}
	@media only screen and (max-width: 700px) {
		display: none;
	}
`;

const ImgStyle = styled.a`
	width: 6.1875rem;
	text-align: center;
	img {
		:nth-child(2),
		:nth-child(3) {
			display: none;
		}
	}
	@media only screen and (max-width: 800px) {
		width: 2rem;
	}
	@media only screen and (max-width: 700px) {
		display: none;
	}
`;

const Menu = styled.div`
	/* width: 2rem; */
	display: none;
	@media only screen and (max-width: 700px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		#close {
			display: none;
		}
		input#menubar:checked ~ #close {
			display: inline-block;
		}

		input#menubar:checked ~ #open {
			display: none;
		}
	}
`;

const reload = () => {
	window.location.href = "/";
};

const isChecked = () => {
	let isCheck = document.getElementById("menubar");
	if (isCheck.checked) {
		document.body.style.overflow = "";
		// alert("checked");
	} else {
		// alert("You didn't check it! Let me check it for you.");
		document.body.style.overflow = "hidden";
	}
};

const Navbar = ({ project, about }) => {
	return (
		<Nav>
			<Name onClick={reload}>
				<span
					style={{
						color: "#48BB9E",
						fontFamily: "'Fira Code', monospace",
					}}
				>
					*
				</span>
				falguni
			</Name>
			<NavSection>
				<a href="/" style={project && { color: "#d1d5ee" }}>
					Projects
				</a>
				<a href="/" style={about && { color: "#d1d5ee" }}>
					About Me
				</a>
				<a
					href="https://drive.google.com/file/d/11JfoLVwz5Nb3OuCY3W4G2b--qhOzLkuM/view"
					target="_blank"
					rel="noopener noreferrer"
				>
					Resume
				</a>
			</NavSection>
			<ImgStyle
				href="https://github.com/lostgirljourney"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={gh} alt="github" width="33px" />
			</ImgStyle>
			<Menu>
				<input type="checkbox" name="menu" id="menubar" hidden />
				<label htmlFor="menubar" id="open">
					<img
						src={menu}
						alt="menu"
						width="33px"
						onClick={isChecked}
					/>
				</label>
				<label htmlFor="menubar" id="close">
					<img
						src={close}
						alt="close"
						width="33px"
						onClick={isChecked}
					/>
				</label>
			</Menu>
		</Nav>
	);
};

export default Navbar;
