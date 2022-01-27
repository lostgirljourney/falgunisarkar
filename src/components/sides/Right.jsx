import styled from "styled-components";
import about from "./../../assets/scrolls/aboutright.png";
import project from "./../../assets/scrolls/projectright.png";

let src = null;

const RightDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	flex-direction: column;
	top: 0;
	bottom: 0;
	right: 5px;
	img {
		margin-top: 3rem;
	}
	animation: rightA 10s linear 0.5s infinite;
	@keyframes rightA {
		0% {
			margin-top: 0%;
			opacity: 0%;
		}
		10% {
			opacity: 100%;
		}
		90% {
			opacity: 100%;
		}
		100% {
			margin-top: -100%;
			opacity: 0%;
		}
	}
`;

const Right = (props) => {
	if (props.about) {
		src = about;
	} else if (props.project) {
		src = project;
	}
	return (
		<RightDiv>
			<img src={src} alt={src} />
			<img src={src} alt={src} />
			<img src={src} alt={src} />
		</RightDiv>
	);
};

export default Right;
