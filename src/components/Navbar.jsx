import styled, { css } from "styled-components";
import gh from "./../assets/gh.svg";

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
`;

const Name = styled.p`
	font-family: "Inter", sans-serif;
	font-weight: bold;
	font-size: 1.5rem;
	line-height: 1.8rem;
	color: #d1d5ee;
	cursor: pointer;
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
`;

const ImgStyle = {
	width: "99px",
};

const visit = () => {
	window.location.href = "/";
};

function Navbar({ project, about }) {
	return (
		<Nav>
			<Name onClick={visit}>
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
			<a
				href="https://github.com/lostgirljourney"
				target="_blank"
				rel="noopener noreferrer"
				style={ImgStyle}
			>
				<img src={gh} alt="github" width="33px" />
			</a>
		</Nav>
	);
}

export default Navbar;
