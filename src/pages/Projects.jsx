import { useEffect, useRef } from "react";
import Slider from "react-slick";

const Projects = () => {
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
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
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
      desription:
        "사용자가 원하는 사진, 문구를 이용하여 티셔츠 디자인을 커스터마이징 할 수 있는 서비스를 제공하는 사이트입니다. 메인페이지, 네브바와 푸터, 리뷰페이지 기능을 맡았습니다. ",
      duration: "2022.11.16 ~ 2023.01.06",
      link: "https://project-moti.netlify.app/",
      skills: [
        { skill: "React", cotext: "" },
        { skill: "React-Slick", cotext: "" },
        { skill: "React-Router", cotext: "" },
        { skill: "Redux-Toolkit", cotext: "" },
        { skill: "Git", cotext: "" },
      ],
    },
    {
      id: 2,
      img: require("../img/MOTI.jpg"),
      name: "RESUME",
      title: "제가 궁금하신가요?",
      desription:
        "보고계시는 이 사이트입니다. 저를 소개하기 위해 제작하였습니다.",
      duration: "2023.03.20 ~ 2023.04.",
      link: "https://project-moti.netlify.app/",
      skills: [
        { skill: "React", cotext: "" },
        { skill: "React-Slick", cotext: "" },
        { skill: "React-Router", cotext: "" },
        { skill: "Styled-Component", cotext: "" },
        { skill: "", cotext: "" },
      ],
    },
    {
      id: 3,
      img: require("../img/bookggureomi.jpg"),
      name: "BOOK GGUREOMI",
      title: "내가 꾸리는 책꾸러미! 북꾸러미",
      desription:
        "독서 기록 어플리케이션 '북적북적'를 참고하여 제작중인 어플입니다. RestAPI를 활용하고 데이터 관리 공부를 위해 제작중입니다. 조금만 기다려 주세요!",
      duration: "2023.03 ~",
      link: "",
      skills: [],
    },
  ];

  return (
    <div>
      <Slider {...settings} ref={sliderRef}>
        {projectList.map((project, index) => (
          <div key={index}>
            <img
              src={project.img}
              alt="index"
              style={{ width: "480px", heigth: "270px" }}
            />
            <h3>{project.name}</h3>
            <p>{project.title}</p>
            <p>{project.desription}</p>
            <p>{project.duration}</p>
            <button>
              <a href={project.link} target="_blank">
                이동하기
              </a>
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
