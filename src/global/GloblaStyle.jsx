import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
  width: 100%;
  
}

*, *::before, *::after {
  box-sizing: inherit;
}

body {
  /* 네브바 fixed 포지션으로 인해 body값 겹치는 현상 해결 */
  padding: 0 5rem 0 0 ;
  margin: 0;
  
  /* 한글폰트 전역적용 */
  font-family: "Kr";
  line-height: 30px;
  font-size: 16px;
}

#wrap {
  height: 100%;
  width: 100%;
  min-width: 770px;
  box-sizing: border-box;
  
  .body-container > div {
  padding: 40px 100px 0 100px;
  margin: 0;
}
}


`;

export default GlobalStyle;
