import styled from "styled-components";
import {
  ListGroupItem,
  Row,
  Col,
  DropdownToggle,
  NavItem,
  TabContent,
  FormGroup,
} from "reactstrap";
export const Wrapper = styled.div`
  border: none;
`;
export const StyledH5 = styled.h5`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 700;
  margin-top: 67px;
`;
export const ListPick = styled.div`
  border-bottom: 1px solid #ccc !important;
  justify-content: space-between;
  display: flex;
  height: 48.5px;
  line-height: 1;
  align-items: center;
  padding: 0px 10px;
  font-size: 14px;
  font-weight: 400;
  & span {
    background-color: #fff;
    color: #000;
    opacity: 0.7;
  }
`;
export const StyledDiv = styled.div`
  margin-right: 20px;
`;
export const TaskBar = styled.div`
  position: relative;
  margin-top: 23px;
  width: 100%;
  height: 9px;
  background-color: #c4c4c4;
  border-radius: 10px;
  > img {
    position: absolute;
    bottom: 0;
    left: calc(50% - 71px);
  }
`;
export const ButtonImg = styled.button`
  &:focus {
    outline: none;
  }
  border: none;
`;
export const StyledButton = styled.button`
  background-color: #d4d4d4;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 400;
  border: none;
  padding: 3px 8px;
  float: right;
  margin: 20px 0 0 0;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const RatedProduct = styled.div`
  margin-top: 25px;
  display: flex;
`;
export const StylePrice = styled.div`
  position: relative;
  h4 {
    position: absolute;
    bottom: 0px;
    left: 16px;
    font-weight: bold;
    font-size: 18px;
  }
  h6 {
    position: absolute;
    bottom: -20px;
    left: 16px;
    color: #bc9051;
    font-weight: bold;
    font-size: 18px;
  }
`;
export const TagProduct = styled.div`
  margin-top: 34px;
  button {
    border: 1px solid #ccc;
    padding: 6px;
    margin: 0 8px 11px 0;
    :focus {
      outline: none;
    }
  }
  a {
    font-size: 12px;
    color: #000;
  }
`;
