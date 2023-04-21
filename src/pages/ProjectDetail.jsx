import { useLocation, useParams } from "react-router-dom";

const ProjectDetail = () => {
  const location = useLocation();
  const projectList = location.state; // Projects

  const { id } = useParams(); // url에서 name 추출

  const project = projectList.find((p) => p.id == id); // ProjectList와 url의 name 값을 find()로 대조해 찾기
  const { name, title, description, durationDetail, link, language, task } =
    project; // 구조 분해 할당

  console.log(project);

  return (
    <div>
      <div>
        <h3>{name}</h3>
        <p>{title}</p>
        <p>{description}</p>
      </div>

      <dl>
        <dt>개발 기간</dt>
        <dd>{durationDetail}</dd>

        <dt>링크</dt>
        <dd>{link}</dd>

        <dt>개발 언어</dt>
        <dd>{language}</dd>
        
        <dt>담당 업무</dt>
        <dd>{task}</dd>
      </dl>
    </div>
  );
};

export default ProjectDetail;
