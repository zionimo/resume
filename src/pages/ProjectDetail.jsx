import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

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
  console.log(taskList);

  // 항목의 개별적 열림/닫힘 상태 관리
  // handleClick 함수가 호출될 때, id값을 비교하여 같으면 null로 설정, 다르면 id값을 설정
  const handleClick = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div>
      <div>
        <p>{type}</p>
        <Name>{name}</Name>
        <Title>{title}</Title>
        <p>{description}</p>
      </div>

      <Article>
        <dt>개발 기간</dt>
        <dd>{durationDetail}</dd>

        <dt>링크</dt>
        <dd>
          <a href={link} target="_blank" rel="noopener noreferrer">
            사이트로 이동!
          </a>
        </dd>

        <dt>개발 언어</dt>
        <dd>{language}</dd>

        <dt>담당 업무</dt>
        <dd>
          {/* mui의 Nasted List 활용 */}
          {taskList.map((task) => (
            <List
              key={task.id}
              sx={{ width: "100%", bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton onClick={() => handleClick(task.id)}>
                <ListItemText primary={task.skill} />
                {openId === task.id ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openId === task.id} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 2 }}>
                    <ListItemText primary={task.context} />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          ))}
        </dd>
      </Article>
    </div>
  );
};

export default ProjectDetail;

const Name = styled.p`
  font-family: "sub En";
  font-size: 2.1rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;
const Title = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;
const Article = styled.dl`
  display: grid;
`;
