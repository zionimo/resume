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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="introduction" element={<Introduction />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          {/* <Route path="" element={</>} /> */}
          {/* <Route path="" element={</>} /> */}
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
