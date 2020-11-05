import styled from "styled-components";
import { Collapse, Navbar, Nav, NavItem, Container } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
export const Wrapper = styled.div`
  border-bottom: 1px solid #ccc;
`;

export const StyledContainer = styled(Container)`
  height: 87px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  line-height: 1;
`;

// Style Ngôn ngữ///
export const Language = styled.div`
  display: flex;
  line-height: 0.6;
  height: 24px;
  padding-top: 68.85px;
  p {
    margin-bottom: 0;
    font-size: 10px;
    text-transform: uppercase;
    margin-left: 3px;
  }
  img {
    height: 7px;
    width: 15px;
  }
`;

export const StyledButton = styled.button`
  :focus {
    outline: none;
  }
  background-color: #fff;
  color: #000;
  font-size: 12px;
  border: none;
  margin-bottom: 30px;
  text-transform: uppercase;
`;
export const UseFontAweSome = styled.div`
  height:24px;
  display: flex;
  margin-top: 72px;
  }
`;
export const CustomeIcon = styled(Link)`
  margin-left: 10px;
  position: relative;
  :hover {
    text-decoration: none;
  }
  color: #000;
  img {
    width: 13px;
    height: 15px;
  }
  > span {
    position: absolute;
    top: 8px;
    right: 0;
    font-size: 8px;
    background-color: #bc9051;
  }
`;
///////////////////////////

// Style Navbar////

export const StyledCollapse = styled(Collapse)`
  justify-content: center;
`;
export const StyledNavbar = styled(Navbar)`
  font-size: 12px;
  line-height: 10px;
`;
export const StyledNav = styled(Nav)`
  margin-left: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  &:hover {
    color: #000;
    text-decoration: none;
  }
  color: #000;
  font-size: 12px;
  text-transform: uppercase;
`;
export const StyledNavItem = styled(NavItem)`
  display: flex;
  line-height: 1;
  align-items: center;
  margin-right: 31.92px;
  img {
    height: 5px;
    margin-left: 3px;
  }
`;
