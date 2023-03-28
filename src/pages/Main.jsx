import styled, { keyframes } from "styled-components";
import Game from "../components/Game";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointLeft,
  faHandPointRight,
} from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <Background>
      <Context>
        <Intro>INTRODUCTION</Intro>
        <Name>SEUNG YEON</Name>
        <div>
          <FontAwesomeIcon
            icon={faHandPointRight}
            beat
            style={{
              color: "#ffffff",
              fontSize: "2.5rem",
              paddingBottom: "6px",
            }}
          />
          <Job>FRONT-END</Job>
          <FontAwesomeIcon
            icon={faHandPointLeft}
            beat
            style={{
              color: "#ffffff",
              fontSize: "2.5rem",
              paddingBottom: "6px",
            }}
          />
        </div>
      </Context>
      <Game />
    </Background>
  );
};

export default Main;

const Background = styled.div`
  background-color: #202e91;
  width: 100vw;
  height: 100%;
  position: relative;
`;

const Context = styled.div`
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  font-family: "title En";
  color: ${(props) => props.theme.myYellow};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Introducing 튀어오르는 효과
const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
`;
const Intro = styled.span`
  font-size: 3rem;
  animation: ${bounce} 1.5s infinite;
  text-shadow: 3px 3px ${(props) => props.theme.myNavy};
`;

const Name = styled.div`
  font-size: 8rem;
  text-shadow: 2px 3px ${(props) => props.theme.Black},
    -3px 3px ${(props) => props.theme.Black},
    8px 8px ${(props) => props.theme.myOrange},
    13px 13px ${(props) => props.theme.myNavy};
`;

const Job = styled.span`
  font-size: 4rem;
  text-shadow: 4px 5px ${(props) => props.theme.myNavy};
  margin: 0 15px;
`;
