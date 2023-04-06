import styled from "styled-components";
import { NavLink } from "react-router-dom";
import theme from "../global/theme";

const Navbar = () => {
  return (
    <Nav>
      <div>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="introduction">Intro</StyledNavLink>
        <StyledNavLink to="about">About</StyledNavLink>
        <StyledNavLink to="projects">Projects</StyledNavLink>
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  background-color: ${theme.Navbar};
  margin: 0;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  width: 5rem;
  height: 100vh;
  padding: 0;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;

    writing-mode: vertical-lr;
  }
`;

const StyledNavLink = styled(NavLink)`
  font-family: "sub En";
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 10px;
  margin-top: 10px;

  color: ${theme.Title};
  transition: color 0.3s ease;
  &:hover {
    color: ${theme.Point};
  }
  &.active {
    color: ${theme.Point};
  }
`;
