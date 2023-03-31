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
  background-color: ${theme.Nav_light};
  margin: 0;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  width: 5rem;
  height: 100vh;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;

    writing-mode: vertical-lr;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  padding: 10px 10px 10px 10px;
  margin-top: 10px;

  color: ${theme.Black};
  &:hover {
    color: ${theme.myYellow};
  }
  &.active {
    color: ${theme.myYellow};
  }
`;
