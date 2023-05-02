import React from "react";
import styled from "styled-components";
import { Header, Wrapper } from "../global/MyStyles";
import theme from "../global/theme";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGit } from "react-icons/fa";

const About = () => {
  const skillArr = [
    {
      id: 1,
      skill: "React",
      context:
        "컴포넌트를 사용하여 재사용할 수 있습니다. Redux를 사용한 상태관리를 한 경험이 있으며, React Router를 이용하여 깜빡임 없는 페이지 이동을 구현할 수 있습니다. Axios를 이용한 도서검색 API를 호출한 경험이 있습니다. 빠른 개발 진행을 위한 Material-UI 컴포넌트 라이브러리를 활용할 수 있습니다.",
      icon: <FaReact />,
      color: "#0BD3F6",
    },
    {
      id: 2,
      skill: "JavaScript",
      context: "ES6 문법에 맞춰 코드를 작성할 수 있습니다.",
      icon: <FaJs />,
      color: "#FAB12C",
    },
    {
      id: 3,
      skill: "HTML/CSS",
      context:
        "HTML5 웹표준을 지키려 노력합니다. 스타일 충돌을 방지와 파일관리의 편리를 위해 CSS-in-JS 방식의 style-components를 사용한 경험이 있습니다. props를 활용하여 컴포넌트 상태에 따라 스타일을 다르게 적용할 수 있습니다. Media Query를 사용하여 반응형 웹 디자인을 구현할 수 있습니다.",
      icon: <FaHtml5 />,
      icon2: <FaCss3Alt />,
      color: "#E55125",
      color2: "#0A73B8",
    },
    {
      id: 4,
      skill: "Git",
      context:
        " 프로젝트 코드 관리, add, commit, pull, push, branch 기능을 사용할 수 있습니다.",
      icon: <FaGit />,
      color: "#2C2C2C",
    },
  ];

  return (
    <Wrapper>
      <Header>SKILLS</Header>
      <SkillWrapper>
        {skillArr.map((arr) => (
          <SkillBox key={arr.id}>
            <Skill>
              <span>{arr.skill}</span>
              <span style={{ color: arr.color }}>{arr.icon}</span>
              <span style={{ color: arr.color2 }}>{arr.icon2}</span>
            </Skill>
            <p>{arr.context}</p>
          </SkillBox>
        ))}
      </SkillWrapper>
    </Wrapper>
  );
};

export default About;

const SkillWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  gap: 80px 0px;
`;

const SkillBox = styled.div`
  border-top: 2px solid ${theme.SubTitle};
  width: 80%;
`;

const Skill = styled.p`
  font-family: "title En";
  font-size: ${theme.fontSize.subTitle};
  margin: 15px 0;

  > span:first-child {
    margin-right: 10px;
  }
`;
