import styled from "styled-components";
import about from "./../../assets/scrolls/aboutleft.png";
import project from "./../../assets/scrolls/projectleft.png";

let src = null;

const LeftDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	flex-direction: column;
	top: 0;
	bottom: 0;
	left: 5px;
	img {
		margin-top: 3rem;
	}
	animation: leftA 10s linear 0.5s infinite;
	@keyframes leftA {
		0% {
			margin-top: -100%;
			opacity: 0%;
		}
		10% {
			opacity: 100%;
		}
		90% {
			opacity: 100%;
		}
		100% {
			margin-top: 0%;
			opacity: 0%;
		}
	}
`;

const Left = (props) => {
	if (props.about) {
		src = about;
	} else if (props.project) {
		src = project;
	}
	return (
		<LeftDiv>
			<img src={src} alt={src} />
			<img src={src} alt={src} />
			<img src={src} alt={src} />
		</LeftDiv>
	);
};

export default Left;
