import styled from "styled-components";
import theme from "./theme";

export const Wrapper = styled.div`
  padding: 80px 10rem 80px 100px;

  overflow-y: auto;
  width: 100%;
  height: 100%;
  margin: 0px;
  box-sizing: border-box;
`;

export const Header = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 0 50px 0;
`;

export const Button = styled.button`
  height: 40px;
  border: none;
  text-align: center;
  background-color: ${theme.InactiveBtn};

  a {
    color: ${theme.Title};
    text-decoration: none;
    font-weight: bold;
    padding: 10px 45px;
  }

  :hover {
    background-color: ${theme.ActiveBtn};
    cursor: pointer;

    a {
      color: ${theme.White};
    }
  }
`;
