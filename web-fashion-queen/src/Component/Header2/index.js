import React, { useState } from "react";
import { Badge, NavbarToggler } from "reactstrap";
import Logo from "../Image/Logo/queen-to.png";
import Flag from "../Image/Icon/icon-flag2.png";
import User from "../Image/Icon/User.png";
import Angle from "../Image/Icon/angle-down.png";
import Shopping from "../Image/Icon/shopping.png";
import Search from "../Image/Icon/Search.png";
import {connect} from "react-redux";
import {
  Wrapper,
  StyledNavbar,
  StyledDiv,
  Language,
  CustomeIcon,
  UseFontAweSome,
  StyledContainer,
  StyledNavItem,
  StyledNavLink,
  StyledNav,
  StyledCollapse,
  StyledButton,
} from "./style";
const Header2 = ({leng}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Wrapper>
      <StyledContainer>
        <img
          src={Logo}
          style={{
            height: "55px",
          }}
        />

        <StyledNavbar expand="md">
          <NavbarToggler onClick={toggle} />
          <StyledCollapse isOpen={isOpen} navbar>
            <StyledNav navbar>
              <StyledNavItem>
                <StyledNavLink to="/">Home</StyledNavLink>
                <img src={Angle} />
              </StyledNavItem>
              <StyledNavItem>
                <StyledNavLink to="/page">Page</StyledNavLink>
                <img src={Angle} />
              </StyledNavItem>
              <StyledNavItem>
                <StyledNavLink to="/shop">Shop</StyledNavLink>
                <img src={Angle} />
              </StyledNavItem>
              <StyledNavItem>
                <StyledNavLink to="/blog">Blog</StyledNavLink>
                <img src={Angle} />
              </StyledNavItem>
              <StyledNavItem>
                <StyledNavLink to="/contact">Contact Us</StyledNavLink>
                <img src={Angle} />
              </StyledNavItem>
            </StyledNav>
          </StyledCollapse>
        </StyledNavbar>
        <StyledDiv>
          <Language>
            <img src={Flag} />
            <StyledButton>
              English
              <img
                src={Angle}
                style={{
                  width: "8px",
                  height: "5px",
                }}
              />
            </StyledButton>
            <StyledButton>
              $USD{" "}
              <img
                src={Angle}
                style={{
                  width: "8px",
                  height: "5px",
                }}
              />
            </StyledButton>
          </Language>
          <UseFontAweSome>
            <CustomeIcon href="#">
              <img src={User} />
            </CustomeIcon>
            <CustomeIcon to="/cart">
              {" "}
              <img src={Shopping} />
              <Badge color="warning">{leng}</Badge>
            </CustomeIcon>
            <CustomeIcon href="#">
              <img src={Search} />{" "}
            </CustomeIcon>
          </UseFontAweSome>
        </StyledDiv>
      </StyledContainer>
    </Wrapper>
  );
};


const mapStateToProps = (state) => {
  return {
    leng: state.leng,
  };
};

export default connect(mapStateToProps, null)(Header2);

