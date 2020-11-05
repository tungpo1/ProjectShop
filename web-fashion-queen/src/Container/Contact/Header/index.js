import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  background-color: #d9d9d9;
  width: 100%;
  height: 285px;
  top: 0; 
  padding-top: 95px;
  p{
    font-size: 24px;
  }
  h6{
    color: #cab495;
    font-size: 24px;
    a{
      color: #000000;
  }
}
`
function Header() {
  return (
    <Wrapper>
      <p>CONTACT</p>
      <h6><a href="#">Home </a>/ Contact Us</h6>
    </Wrapper>
  
    )
}
export default Header;
