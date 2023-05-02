import styled from "styled-components";
import { Header, Wrapper, Button } from "../global/MyStyles";
import theme from "../global/theme";
import media from "../global/media";

const Introduction = () => {
  return (
    <Wrapper>
      <div>
        <Header>INTRO</Header>
      </div>

      <Container>
        <ProfileWrapper>
          <section>
            <Profile src={require("../img/profile.jpg")} alt="profile" />
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
          </section>
        </ProfileWrapper>

        <ProfileWrapper>
          <Greeting>반갑습니다! ☺️</Greeting>
          <p>
            프론트엔드 개발자 지망생 <b>전승연</b>입니다.
            <br />
            뭔가를 스스로 만드는 것과 잘 정돈되어 꾸며진 것을 좋아하는 제가
            사용자와의 밀접한 관계를 가질 수 있는 프론트엔드 직무에 매력을 느껴
            개발자를 꿈꾸게 되었습니다.
            <br /> 제가 배운 기술로 직접 실용가능한 기능을 구현하는 과정이
            재미있습니다. 가까운 목표는 1인분 하는 개발자가 되는 것이며 계속해서
            배움과 새로운 시도를 즐기는 성장형 프론트엔드 개발자가 되고
            싶습니다.
          </p>
        </ProfileWrapper>
      </Container>
    </Wrapper>
  );
};

export default Introduction;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1.8fr;
  justify-items: end;
  gap: 50px;
  
  ${media.tablet`
    display: flex;
    flex-direction: column;
  `}
`;

const Profile = styled.img`
  margin-bottom: 20px;
  width: 270px;
  height: 360px;

  ${media.tablet`
    width: 100%;
    height: auto;

  `}
`;

const ProfileWrapper = styled.article`
  display: flex;
  flex-direction: column;

  > section:last-child {
    display: flex;
    flex-direction: column;
  }
`;

const Greeting = styled.p`
  padding: 0;
  margin: 0 0 20px 0;
  font-size: ${theme.fontSize.subTitle};
  font-weight: bold;
`;
