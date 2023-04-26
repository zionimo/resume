import styled from "styled-components";
import { NavLink } from "react-router-dom";
import theme from "../global/theme";

const Navbar = () => {
  const navArr = [
    { id: 1, content: "HOME", component: "/" },
    { id: 1, content: "INTRO", component: "introduction" },
    { id: 1, content: "ABOUT", component: "about" },
    { id: 1, content: "PROJECTS", component: "projects" },
  ];

  return (
    <Nav>
      <div>
        {navArr.map((arr, index) => (
          <StyledNavLink key={arr.id} to={arr.component}>
            {arr.content}
          </StyledNavLink>
        ))}
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
  font-size: 1.3rem;
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
`;
