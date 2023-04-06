const About = () => {
  return (
    <div>
      <h3>Skills</h3>
      <ul>
        <li>
          <h4>React</h4>
          <span>
            컴포넌트를 사용하여 재사용할 수 있습니다. Redux를 사용한 상태관리를
            한 경험이 있으며, React Router를 이용하여 깜빡임 없는 페이지 이동을
            구현할 수 있습니다. Axios를 이용한 도서검색 API를 호출한 경험이
            있습니다. 빠른 개발 진행을 위한 Material-UI 컴포넌트 라이브러리를
            활용할 수 있습니다.
          </span>
        </li>

        <li>
          <h4>JavaScript</h4>
          <span>ES6 문법에 맞춰 코드를 작성할 수 있습니다.</span>
        </li>

        <li>
          <h4>HTML/CSS</h4>
          <span>
            HTML5 웹표준을 지키려 노력합니다. 스타일 충돌을 방지와 파일관리의
            편리를 위해 CSS-in-JS 방식의 style-components를 사용한 경험이
            있습니다. props를 활용하여 컴포넌트 상태에 따라 스타일을 다르게
            적용할 수 있습니다. Media Query를 사용하여 반응형 웹 디자인을 구현할
            수 있습니다.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default About;
