import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";
import theme from "../global/theme";
import media from "../global/media";
import { Wrapper, Header, Button } from "../global/MyStyles";

const Projects = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleSlider = (e) => {
      // 슬라이더 구간에 마우스가 있을 때만 슬라이드 넘김
      // closest 메소드: 가장 가까운 부모엘리먼트 중에서 slick-list 클래스를 가지고 있는 엘리먼트를 찾음
      if (
        e.target.closest(".slick-list") ===
          sliderRef.current.innerSlider.list &&
        sliderRef.current
      ) {
        // 휠 스크롤로 슬라이드 됨 && 슬라이더가 끝에 도달하면 슬라이드 되지 않음
        if (e.deltaY > 0) {
          sliderRef.current.slickNext();
        } else if (e.deltaY < 0) {
          sliderRef.current.slickPrev();
        }
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
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    vertical: false,
    verticalSwiping: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
      language: "React, JavaScript, HTML, CSS",
      link: "https://project-moti.netlify.app/",
      taskList: [
        {
          id: 1,
          skill: "React",
          context:
            "컴포넌트를 구성하고 재사용할 수 있으며, useState와 useEffect와 같은 React Hooks를 사용할 수 있습니다.",
        },
        {
          id: 2,
          skill: "Redux",
          context:
            "Redux를 사용하여 전역상태를 중앙집중적으로 관리하여 효과적인 상태관리를 하였습니다.",
        },
        {
          id: 3,
          skill: "React-persist",
          context:
            "local storage를 활용하여 새로고침, 페이지 이동 등의 상황에도 리뷰 데이터가 유지될 수 있도록 하였습니다.",
        },
        {
          id: 4,
          skill: "React-router",
          context:
            "네비게이션 SPA(Single Page Application)방식을 통해 페이지간의 빠른 전환을 할 수 있으며 <Outlet/>을 사용하여 중첩된 라우트를 구현할 수 있습니다.",
        },

        {
          id: 5,
          skill: "React-slick",
          context:
            "React-slick의 세팅값을 조절하여 메인페이지의 매끄러운 상하 스크롤 슬라이더를 구현하였습니다.",
        },
        {
          id: 6,
          skill: "React-icons",
          context:
            "시각적인 요소를 추가하여 사용자가 편하게 사용할 수 있도록 하였습니다.",
        },
        {
          id: 7,
          skill: "CSS",
          context:
            "flex/grid를 통해 레이아웃 조작과 반응형 웹 애플리케이션을 구현할 수 있으며 반응형 메뉴리스트를 구현하였습니다. 미디어쿼리를 활용하여 반응형 웹사이트를 개발할 수 있습니다.",
        },
      ],
    },
    {
      id: 2,
      type: "개인 프로젝트",
      img: require("../img/resume.jpg"),
      name: "RESUME",
      title: "제가 궁금하신가요?",
      description:
        "보고계시는 현재 사이트입니다. 반응형 사이트로, 저를 소개하기 위해 제작되었습니다.",
      duration: "2023.03.20 ~ 2023.04.25",
      durationDetail: "2023년 03월 20일 ~ 2023년 04월 25일",
      language: "React, JavaScript, HTML, CSS, styled-components ",

      taskList: [
        {
          id: 1,
          skill: "React",
          context:
            "컴포넌트를 구성하고 재사용할 수 있으며, useState와 useEffect와 같은 React Hooks를 사용할 수 있습니다.",
        },
        {
          id: 2,
          skill: "React-router",
          context:
            "네비게이션 SPA(Single Page Application)방식을 통해 페이지간의 빠른 전환을 할 수 있으며 <Outlet/>을 사용하여 중첩된 라우트를 구현할 수 있습니다.",
        },
        {
          id: 3,
          skill: "React-slick",
          context:
            "프로젝트 리스트 나열에 필요한 세팅값을 조절하고 map() 함수를 함꼐 사용하여 데이터 배열을 순회하는 좌우 스크롤 슬라이더를 구현하였습니다.",
        },
        {
          id: 4,
          skill: "MUI",
          context:
            "개발시간을 단축시킬 수 있고 세련되고 다양한 디자인을 제공하는 MUI 라이브러리를 커스터마이징하여 사용할 수 있습니다.",
        },
        {
          id: 65,
          skill: "React-icons",
          context:
            "시각적인 요소를 추가하여 사용자가 편하게 사용할 수 있도록 하였습니다.",
        },
        {
          id: 6,
          skill: "styled-componets",
          context:
            "컴포넌트 단위의 재사용 가능한 스타일링과 스타일 충돌방지에 이점을 느껴 사용하였습니다. CSS-in-JS 방식이므로 큰 규모의 프로젝트에서는 속도와 성능에 영향을 미칠 수 있음을 인지하고 프로젝트 스타일에 따라 적절히 사용할 예정입니다.",
        },
        {
          id: 7,
          skill: "CSS",
          context:
            "flex/grid를 통해 레이아웃 조작과 반응형 웹 애플리케이션을 구현할 수 있으며 반응형 메뉴리스트를 구현하였습니다. 미디어쿼리를 활용하여 반응형 웹사이트를 개발할 수 있습니다.",
        },
      ],
    },
    {
      id: 3,
      type: "개인 프로젝트",
      img: require("../img/concert.png"),
      name: "CONCERT FOR YOU",
      title: "좋아하는 가수의 콘서트를 예약하세요",
      description:
        "Next.js와 TypeScript, TailwindCSS를 익히기 위해 제작하였습니다. 반응형으로 제작되었습니다.",
      duration: "2023.06.13 ~",
      durationDetail: "2023년 06월 13일 ~",
      language: "Next.js, TypeScript, TailwindCSS, Framer Motion",
      link: "https://concert-for-you.vercel.app/",
      taskList: [
        {
          id: 1,
          skill: "Next.js",
          context:
            "내장된 라우팅 기능을 사용하여 페이지 간의 이동을 구현할 수 있습니다.",
        },
        {
          id: 2,
          skill: "TypeScript",
          context: "",
        },
        {
          id: 3,
          skill: "Framer Motion",
          context: "",
        },
        {
          id: 4,
          skill: "TailwindCSS",
          context: "",
        },
      ],
    },
    {
      id: 4,
      type: "개인 프로젝트",
      img: require("../img/bookggureomi.jpg"),
      name: "BOOK GGUREOMI",
      title: "내가 꾸리는 책꾸러미! 북꾸러미",
      description:
        "독서 기록 어플리케이션 '북적북적'를 참고하여 제작 중인 개인 프로젝트입니다. React를 사용하였으며, RestAPI 활용과 데이터 관리 공부를 위해 제작중입니다. 조금만 기다려 주세요!",
      duration: "2023.03 ~",
      durationDetail: "",
      language: "",
      link: "",
      taskList: [],
    },
  ];
  const lastProject = projectList.length;

  const goToDetail = (projectId) => {
    // 마지막 프로젝트는 준비중이므로 navigate연결 x
    if (projectId < lastProject) {
      navigate(`/projects/${projectId}`, { state: projectList });
    }
  };

  return (
    <Wrapper>
      <div>
        <Header>PROJECTS</Header>
      </div>

      <SliderWrapper>
        <Slider {...settings} ref={sliderRef}>
          {projectList.map((arr) => (
            <div key={arr.id}>
              <ImageWrapper
                onClick={() => goToDetail(arr.id)}
                style={{ cursor: arr.id < lastProject ? "pointer" : "default" }}
              >
                <Image src={arr.img} alt="index" />
                {arr.id < lastProject ? (
                  <ImageText>
                    <span>{arr.name}</span>
                    <span>{arr.duration}</span>
                  </ImageText>
                ) : (
                  <ImageText>
                    <span>{arr.name}</span>
                    <span>현재 준비 중입니다.👩🏻‍💻</span>
                  </ImageText>
                )}
              </ImageWrapper>

              <div>
                <Name>{arr.name}</Name>
                <Title>{arr.title}</Title>
              </div>

              <ContextWrapper>
                <span>{arr.description}</span>
                <span>{arr.duration}</span>
              </ContextWrapper>

              {/* 제작중인 사이트는 버튼 노출되지 않음 */}
              {arr.id < lastProject ? (
                <Button>
                  <Link to={"/projects/" + arr.id} state={projectList}>
                    More View
                  </Link>
                </Button>
              ) : undefined}
            </div>
          ))}
        </Slider>
      </SliderWrapper>
    </Wrapper>
  );
};

export default Projects;

const SliderWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 50px 1rem 100px 1rem;

  border-top: 2px solid ${theme.SubTitle};
  border-bottom: 2px solid ${theme.SubTitle};

  .slick-slide {
    box-sizing: border-box;
    /* 아이템 간 간격 조절 */
    padding: 0 25px 0 25px;
  }

  /* 단추위치 조절 */
  .slick-dots {
    bottom: -50px;
  }

  ${media.tablet`
  .slick-slide {
    padding: 0;
  }
  `}
`;

const ImageWrapper = styled.div`
  position: relative;
  max-width: 100%;
  height: auto;
`;

const Image = styled.img`
  max-width: 100%;
`;

const ImageText = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center; //수평 가운데 정렬
  align-items: center; // 수직 가운데 설정

  > * {
    color: white;
    opacity: 0;
    transform: translateY(-20px); // hover 전에는 20px 위로 이동
    transition: opacity 0.4s, transform 0.3s;
  }

  span:first-child {
    // 이미지에 호버시 뜨는 프로젝트명
    font-family: "title En";
    font-size: 2rem;
    margin-bottom: 8px;
  }

  :hover {
    background-color: #000000bb; // 호버시 어둡게 반투명해지는 효과
    > * {
      opacity: 1;
      transform: translateY(0); /* 호버시 10px 아래로 이동하여 나타나도록 함 */
    }
  }
`;

const Name = styled.p`
  font-family: "title En";
  font-size: ${theme.fontSize.subTitle};
  margin: 15px 0 15px 0;
`;

const Title = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0 0 15px 0;
`;

const ContextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  span:first-child {
    margin-bottom: 10px;
  }

  span:last-child {
    font-size: 1rem; // 제작기간 글씨크기 설정
    margin-bottom: 10px;
  }
`;
