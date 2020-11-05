import React, { useState } from "react";
import { Badge, NavbarToggler, Container } from "reactstrap";
import { Link } from "react-router-dom";
import Logo from "../Image/Logo/queen-to.png";
import Flag from "../Image/Icon/icon-flag2.png";
import User from "../Image/Icon/User.png";
import Angle from "../Image/Icon/angle-down.png";
import Shopping from "../Image/Icon/shopping.png";
import Search from "../Image/Icon/Search.png";

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
const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Wrapper>
      <StyledDiv>
        <StyledContainer>
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
          <img
            src={Logo}
            style={{
              height: "77px",
            }}
          />
          <UseFontAweSome>
            <CustomeIcon href="#">
              <img src={User} />
            </CustomeIcon>
            <CustomeIcon href="#">
              {" "}
              <Link to="/cart">
                <img src={Shopping} />
              </Link>
              <Badge color="warning">2</Badge>
            </CustomeIcon>
            <CustomeIcon href="#">
              <img src={Search} />{" "}
            </CustomeIcon>
          </UseFontAweSome>
        </StyledContainer>
      </StyledDiv>
      <Container>
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
                {/* <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown> */}
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
      </Container>
    </Wrapper>
  );
};

export default Example;
