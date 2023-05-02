import { createGlobalStyle } from "styled-components";
import theme from "../global/theme";
import media from "../global/media";

const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
  width: 100%;
  
}

*, *::before, *::after {
  box-sizing: inherit;
}

body {
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0 5rem 0 0 ;
  /* 네브바 fixed 포지션으로 인해 body값 겹치는 현상 해결 */
  margin: 0;
  word-break: keep-all; // 단어 단위로 줄바꿈
  /* word-break: break-all; // 문자 단위로 줄바꿈 */
  
  /* 한글폰트 전역적용 */
  font-family: "Kr";
  line-height: 30px;
  font-size: 1.1rem;
  color: ${theme.Black};
  

  ${media.tablet`
  /* 네브바 fixed 포지션으로 인해 body값 겹치는 현상 해결 */
    padding: 60px 0 0 0;
  `}
}

#wrap {
  height: 100%;
  width: 100%;
  min-width: 768px;
  box-sizing: border-box;


  .body-container > div {
  margin: 0;
}
}


`;

export default GlobalStyle;
