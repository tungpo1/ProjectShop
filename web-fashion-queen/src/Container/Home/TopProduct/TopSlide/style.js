
import styled from "styled-components";
import {
    Col,
  } from "reactstrap";
export const Icon = styled.div`
position: absolute;
display: grid;
top: 0;
right: 10px;
    button{
        margin-top: 15px;
        width: 25px;
        height: 21px;
        background-repeat: no-repeat;
        background-size: auto;
        background-position: center;
        border-radius: 0;
        background-color: transparent;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-color: transparent;
        &:hover{
            background-color: transparent;
            border-color: transparent;
        }
        &:focus {
            color: #fff;
            background-color: transparent;
            border-color: transparent;
    }
        &:active{
            border: none;
            background-color: transparent;
            border-color: transparent;
        }
   
`;
export const CustomCol = styled(Col)`
  h3 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    margin-top: 30px;
  }

  p {
    margin-top: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 33px;
    line-height: 39px;
    font-variant: small-caps;
    color: #33d6fa;
    span {
      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 28px;
      text-decoration-line: line-through;
      color: rgba(0, 0, 0, 0.49);
      padding-right: 25px;
    }
  }
`;