import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { HiOutlineArrowSmallUp } from "react-icons/hi2";
import media from "../global/media";
import { useRef } from "react";

const Layout = () => {
  const scrollContainerRef = useRef(null);

  const goToTopHandle = () => {
    scrollContainerRef.current.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div id="wrap" ref={scrollContainerRef}>
        <div id="body-container">
          <Outlet />
        </div>

        <Navbar />
      </div>

      <TopButton onClick={goToTopHandle}>
        <HiOutlineArrowSmallUp />
      </TopButton>
    </>
  );
};

export default Layout;

const TopButton = styled.div`
  svg {
    box-sizing: border-box;
    width: 50px;
    height: 50px;
    padding: 8px;
    border-radius: 50%;
    background-color: #e0e0e075;
    color: #0000009a;

    position: fixed;
    bottom: 1.5rem;
    right: 6.5rem;
  }

  ${media.tablet`
  svg{
    right: 1.5rem;
  }
  `}
`;
