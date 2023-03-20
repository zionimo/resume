import styled from "styled-components";

const Navbar = (props) => {
  return (
    <Nav>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
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
`;
