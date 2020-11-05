import React from "react";
import { Button } from "reactstrap";
import styled from "styled-components";
import BG1 from "../../../Component/Image/BG/1.png";
import BG2 from "../../../Component/Image/BG/2.png";

const Wrapper = styled.div`
  position: relative;
  background-color: #aec7ee;
  height: 362px;
  img {
    position: absolute;
  }
  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    position: absolute;
    top: 102px;
    left: calc(50% - 59.5px);
  }
  h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    color: #000000;
    position: absolute;
    top: 148px;
    left: calc(50% - 136px);
  }
  button {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #33d6fa;
    padding: 13px 23px;
    border-radius: 0;
    position: absolute;
    bottom: 83px;
    left: calc(50% - 86px);
    border: 1px solid #33d6fa;
    background: transparent;
  }
`;

function ShopNow() {
  return (
    <Wrapper>
      <img src={BG2} style={{ top: "0", left: "0" }} />

      <img src={BG1} style={{ top: "0", right: "0" }} />
      <p>NEW BAGS</p>
      <h2>POPULAR STYLE</h2>
      <Button>SHOP NOW</Button>
    </Wrapper>
  );
}
export default ShopNow;
