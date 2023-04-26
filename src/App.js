import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global/GloblaStyle";
import theme from "./global/theme.js";
import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Main from "./pages/Main";
import Introduction from "./pages/Introduction";
import Projects from "./pages/Projects";
import About from "./pages/About";
import ProjectDetail from "./pages/ProjectDetail";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import Home from "./pages/Home";

// MUI 컴포넌트에도 글씨 전역설정 적용
const MUItheme = createTheme({
  typography: { fontFamily: "Kr", fontSize: 15 },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={MUItheme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route index element={<Home />} />
            <Route path="introduction" element={<Introduction />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<ProjectDetail />} />
            {/* <Route path="" element={</>} /> */}
          </Route>
        </Routes>
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;
