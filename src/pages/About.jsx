const About = () => {
  return (
    <>
      <h3>Skills</h3>
      <ul>
        <li>
          <h4>React</h4>
          <span>컴포넌트를 사용하여 재사용할 수 있습니다.</span>
        </li>

        <li>
          <h4>React-router-dom</h4>
          <span>
            SPA인 React에서 routing을 구현하기 위해서 사용했습니다. 라우팅을
            서버에서 관리하는 것이 아닌 클라이언트가 구현함으로써 SPA가 깜빡임
            없이 페이지 이동을 구현할 수 있게 합니다.
          </span>
        </li>

        <li>
          <h4>Styled-components</h4>
          <span>
            스타일 충돌을 방지하기 위해 CSS-in-JS 방식의 style-components를
            사용한 경험이 있습니다. props를 활용하여 컴포넌트 상태에 따라
            스타일을 다르게 적용할 수 있습니다.
          </span>
        </li>

        <li>
          <h4>Prettier</h4>
          <span>
            프로젝트 코드의 코드 포맷팅을 위해서 사용했습니다. 따옴표를 사용할
            것인지 쌍따옴표를 사용할 것인지, 한 줄에 최대 몇 줄까지 적을 수
            있는지, 세미콜론을 붙일 것인지 안 붙일 것인지와 같은 코드의 일관성을
            지킬 수 있습니다.
          </span>
        </li>
      </ul>
    </>
  );
};

export default About;
