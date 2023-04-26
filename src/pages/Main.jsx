import theme from "../global/theme";
import styled from "styled-components";

import Home from "./Home";
import Introduction from "./Introduction";
import About from "./About";
import Projects from "./Projects";

const Main = () => {
  return (
    <MainWrapper>
      <div>
        <Home />
      </div>

      <div>
        <Introduction />
      </div>

      <div>
        <About />
      </div>

      <div>
        <Projects />
      </div>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  overflow-y: visible;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;

  > * {
    margin-bottom: 10px;
    border-bottom: 1px solid ${theme.SubTitle};
  }
`;
