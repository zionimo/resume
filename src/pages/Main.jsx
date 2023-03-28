import styled from "styled-components";
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.div`
  font-size: 8rem;
  color: ${(props) => props.theme.myYellow};
  text-shadow: 2px 3px ${(props) => props.theme.Black},
    -3px 3px ${(props) => props.theme.Black},
    8px 8px ${(props) => props.theme.myOrange},
    13px 13px ${(props) => props.theme.myNavy};
`;

const Job = styled.span`
  color: ${(props) => props.theme.myYellow};
  font-size: 4rem;
  text-shadow: 4px 5px ${(props) => props.theme.myNavy};
  margin: 0 15px;
`;
