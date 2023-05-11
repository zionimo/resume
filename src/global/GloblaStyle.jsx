import { createGlobalStyle } from "styled-components";
import theme from "../global/theme";
import media from "../global/media";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: black;
}

ul,li {
  list-style: none;
}

body {
  /* 폰트 전역적용 */
  font-family: "Kr";
  line-height: 30px;
  font-size: 1.1rem;
  color: black;
  word-break: keep-all; // 단어단위로 줄 바꿈

  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  min-width: 1154px;
  overflow-x: hidden;
  overflow-y: auto;
  
  ${media.tablet`
  padding: 60px 0 0 0;
  min-width: 100%;
  `}
  
}

#wrap {
  width: 100%;
}

#body-container {
  width: calc(100% - 5rem);
  
  ${media.tablet`
    width: 100%;
  `}
}


`;

export default GlobalStyle;
