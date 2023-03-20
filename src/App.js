import "./App.css";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global/GloblaStyle";
import theme from "./global/theme.js";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Main from "./pages/Main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          {/* <Route path="" element={</>} /> */}
          {/* <Route path="" element={</>} /> */}
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
