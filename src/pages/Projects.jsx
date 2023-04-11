import Slider from "react-slick";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const projectList = [
    {
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
      <Slider {...settings}>
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
