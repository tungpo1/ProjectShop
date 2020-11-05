import styled from "styled-components";
import { Collapse, Navbar, Nav, NavItem, Container } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
export const Wrapper = styled.div``;

export const StyledContainer = styled(Container)`
  height: 105px;
  display: flex;
  justify-content: space-between;
`;

export const StyledDiv = styled.div`
  border-bottom: 1px solid #ccc;
  height: 105px;
`;

// Style Ngôn ngữ
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
export const Language = styled.div`
  display: flex;
  line-height: 0.6;
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

export const UseFontAweSome = styled.div`
  display: flex;
  margin-top: 72px;
  > div{
    :nth-child(2) {
      position: relative;
      span {
        font-size: 5px;
        border-radius: 50%;
        position: absolute;
        right: 0;
        bottom: 10px;
        background-color: #BC9051;
      }
  }
  
`;
export const CustomeIcon = styled.div`
  margin-left: 10px;
  img {
    width: 13px;
    height: 15px;
  }
`;
///////////////////////////////////////////////////

// Style List Menu //////////

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
////////////////////////////////////////////
