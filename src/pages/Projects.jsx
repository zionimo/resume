import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";
import theme from "../global/theme";

const Projects = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleSlider = (e) => {
      // 휠 스크롤로 슬라이드 됨 && 슬라이더가 끝에 도달하면 슬라이드 되지 않음
      if (e.deltaY > 0 && sliderRef.current) {
        sliderRef.current.slickNext();
      } else if (e.deltaY < 0 && sliderRef.current) {
        sliderRef.current.slickPrev();
      }
    };

    // 휠 스크롤 이벤트 리스너 등록
    document.addEventListener("wheel", handleSlider);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      document.removeEventListener("wheel", handleSlider);
    };
  }, [sliderRef.current]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    vertical: false,
    verticalSwiping: false,
  };

  const projectList = [
    {
      id: 1,
      img: require("../img/MOTI.jpg"),
      name: "MOTI",
      title: "모두의 티셔츠, 모티!",
      description:
        "사용자가 원하는 사진, 문구를 이용하여 티셔츠 디자인을 커스터마이징 할 수 있는 서비스를 제공하는 사이트입니다.",
      duration: "2022.11.16 ~ 2023.01.06",
      durationDetail: "2022년 11월 16일 ~ 2023년 01월 06일",
      language: "",
      link: "https://project-moti.netlify.app/",
      task: "",
    },
    {
      id: 2,
      img: require("../img/resume.jpg"),
      name: "RESUME",
      title: "제가 궁금하신가요?",
      description:
        "보고계시는 이 사이트입니다. 저를 소개하기 위해 제작하였습니다.",
      duration: "2023.03.20 ~ 2023.04.25",
      durationDetail: "2023년 03월 20일 ~ 2023년 04월 25일",
      language: "",
      link: "https://zionimo.github.io/resume/",
      task: "",
    },
    {
      id: 3,
      img: require("../img/bookggureomi.jpg"),
      name: "BOOK GGUREOMI",
      title: "내가 꾸리는 책꾸러미! 북꾸러미",
      description:
        "독서 기록 어플리케이션 '북적북적'를 참고하여 제작중인 어플입니다. RestAPI를 활용하고 데이터 관리 공부를 위해 제작중입니다. 조금만 기다려 주세요!",
      duration: "2023.03 ~",
      durationDetail: "",
      language: "",
      link: "",
      task: "",
    },
  ];

  // const goToDetail = (id, name) => {
  //   navigate(`/projects/${name}`, { state: { id: id, name: name } });

  // console.log(projectList.id);
  // };

  return (
    <Wrapper>
      <Slider {...settings} ref={sliderRef}>
        {projectList.map((project, index) => (
          <div key={index}>
            <Image src={project.img} alt="index" />
            <Name>{project.name}</Name>
            <Title>{project.title}</Title>
            <Context>
              <span>{project.description}</span>
              <span>{project.duration}</span>
            </Context>

            {/* 제작중인 사이트는 버튼 노출되지 않음 */}
            {project.id !== 3 ? (
              <Detail>
                <Link to={"/projects/" + project.id} state={projectList}>
                  More View
                </Link>
              </Detail>
            ) : undefined}
          </div>
        ))}
      </Slider>
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.div`
  overflow-y: auto;
  width: 100vw;
  height: 100vh;
  padding: 0px;
  margin: 0px;

  .slick-slide {
    /* 아이템 간 간격 조절 */
    padding-right: 60px;
  }
`;

const Image = styled.img`
  max-width: 100%;
`;

const Name = styled.p`
  font-size: 2.1rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Title = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Context = styled.div`
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Detail = styled.button`
  width: 11rem;
  height: 40px;
  border: none;
  background-color: ${theme.InactiveBtn};

  color: ${theme.Title};
  text-decoration: none;
  font-weight: bold;
  padding: 10px 30px;

  :hover {
    background-color: ${theme.ActiveBtn};
    color: ${theme.White};
    cursor: pointer;
  }
`;
