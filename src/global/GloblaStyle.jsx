import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}

body {
min-height: 100vh;
overflow-y: hidden;
/* 네브바 fixed 포지션으로 인해 body값 겹치는 현상 해결 */
 padding-right: 5rem;

/* 한글폰트 전역적용 */
font-family: "Kr";
}`;

export default GlobalStyle;
