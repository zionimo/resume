import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="introduction">Intro</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="projects">Projects</NavLink>
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  background-color: ${(props) => props.theme.Nav_light};
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

  div > * {
    text-decoration: none;
    color: ${(props) => props.theme.Black};
    font-size: 1.5rem;
    font-weight: bold;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    padding: 10px 10px 10px 10px;
    margin-top: 10px;
  }
`;
