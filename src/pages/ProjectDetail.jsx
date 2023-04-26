import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import theme from "../global/theme";
import styled from "styled-components";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Wrapper } from "../global/MyStyles";

const ProjectDetail = () => {
  const location = useLocation();
  const projectList = location.state; // Projects
  const { id } = useParams(); // url에서 name 추출
  const project = projectList.find((p) => p.id == id); // ProjectList와 url의 name 값을 find()로 대조해 찾기

  const [openId, setOpenId] = useState(false);

  const {
    type,
    name,
    title,
    description,
    durationDetail,
    link,
    language,
    taskList,
  } = project; // 구조 분해 할당

  // 항목의 개별적 열림/닫힘 상태 관리
  // handleClick 함수가 호출될 때, id값을 비교하여 같으면 null로 설정, 다르면 id값을 설정
  const handleClick = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Wrapper>
      <InfoWrapper>
        <Name>{name}</Name>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </InfoWrapper>

      <Article>
        <Term>유형</Term>
        <dd>{type}</dd>

        <Term>링크</Term>
        <dd>
          <SiteLink href={link} target="_blank" rel="noopener noreferrer">
            사이트로 이동!
          </SiteLink>
        </dd>

        <Term>개발 기간</Term>
        <dd>{durationDetail}</dd>

        <Term>개발 언어</Term>
        <dd>{language}</dd>

        <Term>담당 업무</Term>
        <dd>
          {/* mui의 Nasted List 활용 */}
          {taskList.map((task) => (
            <List
              key={task.id}
              sx={{
                width: "100%",
                maxWidth: 600,
                bgcolor: "background.paper",
                boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.3)",
                padding: "0px 0px 0px 0px",
                margin: "4px 0px",
              }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton onClick={() => handleClick(task.id)}>
                <ListItemText primary={task.skill} />
                {openId === task.id ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openId === task.id} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemText sx={{ pl: 2, margin: "20px 0px" }}>
                    <ListItemText primary={task.context} />
                  </ListItemText>
                </List>
              </Collapse>
            </List>
          ))}
        </dd>
      </Article>
    </Wrapper>
  );
};

export default ProjectDetail;

// const Wrapper = styled.div`
//   overflow-y: auto;
//   width: 100vw;
//   height: 100vh;
//   padding: 0px;
//   margin: 0px;
//   box-sizing: border-box;
// `;

const InfoWrapper = styled.div`
  width: 100%;
  padding: 50px 0 50px 0;
  margin: 0 0 60px 0;
  border-top: 2px solid ${theme.SubTitle};
  border-bottom: 2px solid ${theme.SubTitle};
`;

const Name = styled.p`
  font-family: "sub En";
  font-size: 3rem;
  font-weight: bold;
  margin: 0 0 20px 0;
`;

const Title = styled.p`
  font-size: 1.3rem;
  margin: 0 0 50px 0;
  font-weight: bold;
`;

const Description = styled.p`
  margin: 0;
`;

const Article = styled.dl`
  display: grid;
  grid-template-columns: 0.3fr 2fr;

  > * {
    margin: 0 0 20px 0;
  }
`;

const Term = styled.dt`
  color: ${theme.SubTitle};
`;

const SiteLink = styled.a`
  font-weight: bold;
  color: ${theme.Title};

  :hover {
    color: ${theme.Point};
  }
`;
