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
      type: "팀 프로젝트",
      img: require("../img/MOTI.jpg"),
      name: "MOTI",
      title: "모두의 티셔츠, 모티!",
      description:
        "사용자가 원하는 사진, 문구를 이용하여 티셔츠 디자인을 커스터마이징 할 수 있는 서비스를 제공하는 사이트입니다.",
      duration: "2022.11.16 ~ 2023.01.06",
      durationDetail: "2022년 11월 16일 ~ 2023년 01월 06일",
      language: "React, JavaScript, HTML, CSS ",
      link: "https://project-moti.netlify.app/",
      taskList: [
        {
          id: 1,
          skill: "Redux",
          context:
            "Redux를 사용하여 전역상태를 중앙집중적으로 관리하여 효과적인 상태관리를 함 ",
        },
        {
          id: 2,
          skill: "React-persist",
          context:
            "local storage를 사용하여 새로고침, 페이지 이동 등의 상황에도 리뷰 데이터가 유지될 수 있게 함",
        },
        {
          id: 3,
          skill: "React-router",
          context:
            "SPA(Single Page Application)방식을 통해 페이지간의 빠른 전환을 위해 사용함",
        },

        {
          id: 4,
          skill: "React-slick",
          context:
            "메인페이지에 적용하여 매끄러운 상하 스크롤 슬라이더를 구현함.",
        },
        {
          id: 6,
          skill: "CSS",
          context:
            "flex / grid를 통해 레이아웃 조작과 반응형 웹 애플리케이션을 구현할 수 있음",
        },
      ],
      // "메인페이지, 리뷰작성 기능, navbar, footer 제작 담당 "
    },
    {
      id: 2,
      type: "개인 프로젝트",
      img: require("../img/resume.jpg"),
      name: "RESUME",
      title: "제가 궁금하신가요?",
      description:
        "보고계시는 이 사이트입니다. 저를 소개하기 위해 제작하였습니다.",
      duration: "2023.03.20 ~ 2023.04.25",
      durationDetail: "2023년 03월 20일 ~ 2023년 04월 25일",
      language: "React, JavaScript, HTML, CSS, styled-components ",
      link: "https://zionimo.github.io/resume/",
      taskList: [
        { id: 1, skill: "React-router", context: "사용 할 줄 암" },
        { id: 2, skill: "React-slick", context: "사용 할 줄 암2" },
        { id: 3, skill: "MUI", context: "사용 할 줄 암2" },
        { id: 4, skill: "styled-componets", context: "사용 할 줄 암2" },
      ],
    },
    {
      id: 3,
      type: "개인 프로젝트",
      img: require("../img/bookggureomi.jpg"),
      name: "BOOK GGUREOMI",
      title: "내가 꾸리는 책꾸러미! 북꾸러미",
      description:
        "독서 기록 어플리케이션 '북적북적'를 참고하여 제작중인 어플입니다. RestAPI를 활용하고 데이터 관리 공부를 위해 제작중입니다. 조금만 기다려 주세요!",
      duration: "2023.03 ~",
      durationDetail: "",
      language: "",
      link: "",
      taskList: [],
    },
  ];

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
                <Link
                  to={"/projects/" + project.id}
                  state={projectList}
                  className="link"
                >
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

  .link {
    color: ${theme.Title};
    text-decoration: none;
    font-weight: bold;
    padding: 10px 45px;
  }

  :hover {
    background-color: ${theme.ActiveBtn};
    cursor: pointer;

    .link {
      color: ${theme.White};
    }
  }
`;
