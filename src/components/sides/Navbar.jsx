import styled from "styled-components";
import gh from "./../../assets/svgs/gh.svg";
import menu from "./../../assets/svgs/menu.svg";
import close from "./../../assets/svgs/close.svg";
import linktree from "./../../assets/svgs/linktree.png";
import { Link } from "react-router-dom";
import { useLayoutEffect, useState } from "react";

const Nav = styled.header`
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
		flex-direction: column;
		width: 100%;
		align-items: flex-start;
		justify-content: space-evenly;
		position: fixed;
		top: 3.75rem;
		bottom: 0;
		left: 0;
		right: 0;
		font-size: 1.5rem;
		background-color: #040506;
		padding: 5rem;
		z-index: 10;
		animation: fadeInLeft 0.5s linear 0s;
		@keyframes fadeInLeft {
			0% {
				left: -100%;
			}
			100% {
				left: 0;
			}
		}
	}
`;

const ImgStyle = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	@media only screen and (max-width: 800px) {
		width: 2rem;
	}
`;

const Socials = styled.div`
	display: flex;
	align-items: center;
	width: 6.1875rem;
	@media only screen and (max-width: 700px) {
		display: none;
		animation: come 0.5s ease-out 0s;
		@keyframes come {
			0% {
				opacity: 0;
			}
			50% {
				opacity: 0.5;
			}
			100% {
				left: 1;
			}
		}
	}
`;

const Menu = styled.div`
	display: none;
	@media only screen and (max-width: 700px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

const reload = () => {
	window.location.href = "/";
};

const Navbar = ({ project, about }) => {
	const [showMenu, setShowMenu] = useState({ display: "none" });
	const [closeMenu, setCloseMenu] = useState({ display: "flex" });
	const [isCheck, setIsCheck] = useState(false);

	const isChecked = (e) => {
		if (e.target.checked) {
			setShowMenu({ display: "flex" });
			setCloseMenu({ display: "none" });
			document.body.style.overflow = "hidden";
			setIsCheck(true);
		} else {
			setShowMenu({ display: "none" });
			setCloseMenu({ display: "flex" });
			document.body.style.overflow = "";
			setIsCheck(false);
		}
	};

	useLayoutEffect(() => {
		window.addEventListener("resize", function () {
			if (window.innerWidth < 700) {
				setShowMenu({ display: "none" });
				setCloseMenu({ display: "flex" });
				document.body.style.overflow = "";
				setIsCheck(false);
			}
			if (window.innerWidth > 700) {
				setShowMenu({ display: "flex" });
				setCloseMenu({ display: "none" });
				document.body.style.overflow = "";
				setIsCheck(true);
			}
		});
		if (window.innerWidth < 700) {
			setShowMenu({ display: "none" });
			setCloseMenu({ display: "flex" });
			document.body.style.overflow = "";
			setIsCheck(false);
		}
		if (window.innerWidth > 700) {
			setShowMenu({ display: "flex" });
			setCloseMenu({ display: "none" });
			document.body.style.overflow = "";
			setIsCheck(true);
		}
	}, []);

	return (
		<Nav>
			<Name onClick={reload} id="trial">
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
			<NavSection style={showMenu}>
				<Link to="/projects" style={project && { color: "#fff" }}>
					Projects
				</Link>
				<Link to="/" style={about && { color: "#fff" }}>
					About Me
				</Link>
				<a
					href="https://drive.google.com/file/d/11JfoLVwz5Nb3OuCY3W4G2b--qhOzLkuM/view"
					target="_blank"
					rel="noopener noreferrer"
				>
					Resume
				</a>
			</NavSection>
			<Socials style={showMenu}>
				<ImgStyle
					href="https://github.com/lostgirljourney"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={gh} alt="github" width="33px" />
				</ImgStyle>
				<ImgStyle
					href="https://linktr.ee/lostgirljourney"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={linktree} alt="linktree" width="35px" />
				</ImgStyle>
			</Socials>
			<Menu>
				<input
					type="checkbox"
					id="menubar"
					onChange={isChecked}
					checked={isCheck}
					hidden
				/>
				<label htmlFor="menubar" id="open" style={closeMenu}>
					<img src={menu} alt="menu" width="33px" />
				</label>
				<label htmlFor="menubar" id="close" style={showMenu}>
					<img src={close} alt="close" width="33px" />
				</label>
			</Menu>
		</Nav>
	);
};

export default Navbar;
