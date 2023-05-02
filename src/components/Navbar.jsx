import theme from "../global/theme";
import media from "../global/media";

import { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { BiMenuAltRight } from "react-icons/bi";
import { RiSeedlingFill, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navArr = [
    { id: 1, content: "HOME", component: "/" },
    { id: 2, content: "INTRO", component: "introduction" },
    { id: 3, content: "ABOUT", component: "about" },
    { id: 4, content: "PROJECTS", component: "projects" },
  ];

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <Logo>
          <RiSeedlingFill />
        </Logo>
        <Toggle>
          {open ? (
            <RiCloseFill onClick={handleClose} />
          ) : (
            <BiMenuAltRight onClick={handleOpen} />
          )}
        </Toggle>
      </HeaderWrapper>

      <NavWrapper open={open}>
        {navArr.map((arr) => (
          <Menu key={arr.id} to={arr.component}>
            {arr.content}
          </Menu>
        ))}
      </NavWrapper>

      <IconWrapper open={open}>
        <HiMail />
        <a
          href="https://github.com/zionimo/resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </IconWrapper>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  box-sizing: border-box;
  width: 5rem;
  height: 100vh;
  background-color: ${theme.Navbar};
  margin: 0;
  padding: 0;

  display: flex;
  writing-mode: vertical-lr;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${media.tablet`
    left:0;
    width:100vw;
    height:auto;

    flex-direction: column;
    writing-mode: unset;
  `}
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: none;

  ${media.tablet`
    display: block;
    position: relative;

    font-size: 2.4rem;
    `}
`;

const Logo = styled.div`
  position: absolute;
  left: 47vw;
  top: 15%;

  color: #85dd62;
  filter: drop-shadow(1px 1px 1px #485734bb);
`;

const Toggle = styled.div`
  position: absolute;
  right: 20px;
  top: 15%;

  color: ${theme.Title};
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;

  ${media.tablet`
    flex-direction: column;
    margin: 0px 0 20px 0;
    display: ${(props) => (props.open ? "flex" : "none")};
  `}
`;

const Menu = styled(NavLink)`
  font-family: "sub En";
  font-weight: bold;
  font-size: 1.3rem;
  text-decoration: none;
  padding: 10px;
  margin-top: 20px;

  color: ${theme.Title};
  transition: color 0.3s ease;
  &:hover {
    color: ${theme.Point};
  }
  &.active {
    color: ${theme.Point};
  }

  ${media.tablet`
  padding: 10px 0;
  margin-top: 0px;
  width: 100%;
  display: inline-block;
  text-align: center;
  font-size: 1.2rem;
  
  &:hover {
    color: ${theme.White};
    background-color: #a5c0b3;
  }
  
  &.active {
    color: ${theme.White};
    background-color: #a5c0b3;
  }

  `}
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.8rem;
  margin-bottom: 20px;

  a {
    color: ${theme.Title};
  }

  svg {
    color: ${theme.Title};
    transform: rotate(90deg);
    margin-bottom: 10px;

    transition: color 0.3s ease;
    &:hover {
      color: ${theme.Point};
    }
    &.active {
      color: ${theme.Point};
    }
  }

  ${media.tablet`
    margin: 0px;
    font-size: 1.4rem;
    display: ${(props) => (props.open ? "flex" : "none")};
    
    * {
      margin: 0 2px;
    }
    
    svg { 
      transform: rotate(0);
      &:hover {
      color: ${theme.White};
      filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.7));
      } 
    }  
  `}
`;
