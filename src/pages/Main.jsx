import theme from "../global/theme";
import styled from "styled-components";

import Home from "./Home";
import Introduction from "./Introduction";
import About from "./About";
import Projects from "./Projects";

const Main = () => {
  return (
    <MainWrapper>
      <Box>
        <Home />
      </Box>

      <Box>
        <Introduction />
      </Box>

      <Box>
        <About />
      </Box>

      <Box>
        <Projects />
      </Box>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  width: 100vw;
  /* overflow-y: visible; */
  /* height: 100vh; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  `;

const Box = styled.div`
  margin-bottom: 10px;
  border-bottom: 1px solid ${theme.SubTitle};


  /* height: 100%; */
`;
