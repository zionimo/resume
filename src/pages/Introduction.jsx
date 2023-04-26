import styled from "styled-components";
import { Header, Wrapper, Button } from "../global/MyStyles";
import theme from "../global/theme";

const Introduction = () => {
  const downloadResume = () => {};
  return (
    <Wrapper>
      <div>
        <Header>INTRO</Header>
      </div>

      <Container>
        <ProfileWrapper>
          <section>
            <Profile src="" alt="" />
          </section>

          <section>
            <Button>
              <a>zionimobu@gmail.com</a>
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
        </ProfileWrapper>

        <article>
          <h2>반갑습니다!</h2>
          <p>
            프론트엔드 개발자 지망생 전승연입니다. 뭔가를 스스로 만드는 것과 잘
            정돈되어 꾸며진 것을 좋아합니다. 이 모든 경험과 사용자와의 밀접한
            관계를 가질 수 있는 프론트엔드 직무에 매력을 느껴 개발자를 꿈꾸게
            되었습니다. 제가 배운 기술로 직접 실용가능한 기능을 구현하는 과정이
            재미있습니다. 가까운 목표는 1인분 하는 개발자가 되는 것이며 계속해서
            배움과 새로운 시도를 즐기는 성장형 프론트엔드 개발자가 되고
            싶습니다.
          </p>
        </article>
      </Container>
    </Wrapper>
  );
};

export default Introduction;

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 2fr;
  justify-items: start;
`;

const Profile = styled.img`
  width: 300px;
  height: 400px;
  margin-bottom: 30px;
`;

const ProfileWrapper = styled.article`
  > section:last-child {
    display: flex;
    flex-direction: column;
  }
`;
