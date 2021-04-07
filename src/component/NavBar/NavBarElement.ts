import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  height: 70px;
  align-items: center;
  background-color: black;
  font-size: 16px;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 100;
`;
export const Container = styled.div`
  max-width: 1500px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  padding: 0 30px;
`;

export const Links = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  list-style: none;
  text-decoration: none;
  align-items: center;
`;
export const Link = styled.li`
  height: 70px;
  padding-right: 30px;
`;
export const Nav = styled(NavLink)`
  align-items: center;
  display: flex;
  color: #fff;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  height: 100%;
  font-size: 18px;
  margin-right: 30px;

  &:hover {
    border-bottom: 1px solid blue;
  }
`;
export const LogoutWrapp = styled.ul``;
export const Logout = styled.li``;
