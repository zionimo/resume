import styled, { keyframes } from "styled-components";
import { CgChevronDoubleDown } from "react-icons/cg";
import theme from "../global/theme";
import media from "../global/media";

const Home = () => {
  return (
    <Background>
      <Video
        title="vimeo-player"
        // muted=1로 무음처리하지 않으면 자동재생 안되니 반드시 넣을 것
        src="https://player.vimeo.com/video/813632035?h=91351e06a3&autoplay=1&loop=1&muted=1&itle=0&byline=0&portrait=0&controls=false"
        frameborder="0"
        allowfullscreen
      />

      <Context>
        <Intro>INTRODUCTION</Intro>
        <Name>SEUNG YEON</Name>
        <Job>FRONT-END</Job>
      </Context>

      <Arrow>
        <CgChevronDoubleDown />
      </Arrow>
    </Background>
  );
};

export default Home;

const Background = styled.div`
  width: 100%;
  height: 0; // 높이를 0으로 지정해야 비디오 높이가 재계산되지 않고 꽉참
  position: relative;
  padding: 0 0 52.7% 0;
  z-index: 50;
`;

const Video = styled.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
  border: none;
  top: 0;
  left: 0;
  margin: 0;
  z-index: -10;
  filter: brightness(70%);
`;

const Context = styled.div`
  position: absolute;
  width: 100%;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  font-family: "title En";
  color: ${theme.White};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${media.tablet`
  left: 50%;
  `}
`;

// Introducing 튀어오르는 효과
const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-15px);
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

  ${media.tablet`
  font-size: 2rem;
  `}
`;

const Name = styled.span`
  font-size: 6rem;
  margin: 70px 0;
  text-align: center;

  ${media.tablet`
  font-size: 3rem;
  margin: 30px 0;
  `}

  ${media.mobile`
  font-size: 3rem;
  margin: 20px 0;
  `}

  &:hover {
    color: ${theme.Point};
  }
`;

const Job = styled.span`
  font-size: 3rem;

  ${media.tablet`
  font-size: 2rem;
  `}
`;

const scroll = keyframes`
    0% {
      transform: scale(1);
      opacity: 1;
    }
    25% {
      transform: scale(1.1);
      opacity: 0.7;
    }
    75% {
      transform: scale(1.3);
      opacity: 0.3;
    }
    100% {
      transform: scale(1.4);
      opacity: 0;
    }
    `;

const Arrow = styled.div`
  svg {
    font-size: 4rem;
    z-index: 10;
    position: absolute;
    top: 80%;
    left: 2%;
    animation: ${scroll} 2.5s infinite;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;

    color: white;
    filter: brightness(60%);
  }

  ${media.tablet`
  svg {
    top: 85%;
    font-size: 2rem;

  }
  `}
`;
