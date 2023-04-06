import styled from "styled-components";
import theme from "../global/theme";

const Introduction = () => {
  const downloadResume = () => {};
  return (
    <Container>
      <article>
        <section>
          <img src="" alt="" style={{ width: "180px", height: "240px" }} />
        </section>

        <section>
          <Button>
            <span>zionimobu@gmail.com</span>
          </Button>
          <Button>
            {/* target속성으로 새 창에서 열리게함 */}
            <a
              href="https://github.com/zionimo/resume.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
          <Button onClick={downloadResume}>
            <a href="">Resume</a>
          </Button>
        </section>
      </article>

      <article>
        <h3>반갑습니다!</h3>
        <p>
          저는 프론트엔드 개발자를 희망하는 전승연입니다. 제가 배운 기술로
          실용가능한 기능을 구현하는 과정이 재미있습니다. 배움과 새로운 시도를
          즐기며 성장하는 프론트엔드 개발자가 되겠습니다.
        </p>
      </article>
    </Container>
  );
};

export default Introduction;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;
const Button = styled.div`
  background-color: ${theme.InactiveBtn};
  width: 13rem;
  height: 35px;

  * {
    text-decoration: none;
    color: ${theme.Title};
  }

  &:hover {
    background-color: ${theme.ActiveBtn};

    * {
      color: ${theme.White};
    }
  }
`;
