import styled, { keyframes } from "styled-components";
import theme from "../global/theme";

const Main = () => {
  return (
    <Background>
      <Video
        title="vimeo-player"
        // muted=1로 무음처리하지 않으면 자동재생 안되니 반드시 넣을 것
        src="https://player.vimeo.com/video/813632035?h=91351e06a3&autoplay=1&loop=1&muted=1&itle=0&byline=0&portrait=0&controls=false"
        frameborder="0"
        allowfullscreen
      ></Video>
      <Context>
        <Intro>INTRODUCTION</Intro>
        <Name>SEUNG YEON</Name>
        <Job>FRONT-END</Job>
      </Context>
    </Background>
  );
};

export default Main;

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  margin: 0;
  padding: 53.25% 0  0 0;

  @media screen and (max-width: 768px) {
  }
`;

const Video = styled.iframe`
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  object-fit: cover;

  @media screen and (max-width: 768px) {
  }
`;

const Context = styled.div`
  position: absolute;
  width: 100%;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  font-family: "title En";

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
`;

const Name = styled.span`
  font-size: 6rem;
  color: ${theme.White};
  &:hover {
    color: ${theme.Point};
  }
`;

const Job = styled.span`
  font-size: 3rem;
`;
