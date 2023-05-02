import { css } from "styled-components";

const sizes = {
  tablet: 768,
  desktop: 102,
};

// Object.keys(sizes)를 사용해서 sizes의 속성이름(mobile,tablet,laptop,desktop)을 배열로 가져옴
// reduce() 메소드로 속성 이름에 대한 반응형 디자인 함수를 생성함 (sizes의 각 속성이름을 키로 가지며 각 속성은 함수)
// ...args는 styled-components 패키지에서 제공하는 css 함수의 매개변수이며, 문자열로 작성된 스타일을 객체 형태로 변환함
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media screen and (max-width: ${sizes[label]}px) {
      ${css(...args)}// 문자열로 작성된 스타일을 객체형태로 변환한 후 반환
    }
  `;
  return acc;
}, {});
