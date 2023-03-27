import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}

body {
min-height: 100vh;
overflow-y: hidden;


  /* 영어폰트 전역적용 */
  font-family: logo;
  src: url("./fonts/Prociono.otf");

 /* 네브바 fixed 포지션으로 인해 body값 겹치는 현상 해결 */
  padding-right: 5rem;
}`;

export default GlobalStyle;
