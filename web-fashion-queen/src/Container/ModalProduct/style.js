import styled from "styled-components";
import {
  ListGroupItem,
  Row,
  Col,
  DropdownToggle,
  NavItem,
  TabContent,
} from "reactstrap";

export const StyledShoes = styled(Row)`
  display: flex;
  justify-content: space-between;
  margin: 30px 0 0 6px;
  width: 378px;
`;
export const StyledCol = styled(Col)`
  padding-left: 0;
  margin-bottom: 77px;
`;

export const RatingStar = styled.div`
  margin-top: 0;
  > h5 {
    margin-top: 20px;
    font-weight: 700;
    font-size: 18px;
  }
  > p {
    color: Red;
    font-weight: 700;
    font-size: 18px;
  }
  h4 {
    color: #bc9051;
    font-size: 18px;
    font-weight: bold;
  }
`;

export const AddCart = styled.div`
  border-bottom: 1px solid #ccc;
`;

export const Inner = styled.div`
  display: flex;
`;

export const Amout = styled.div`
  border: 1px solid #ccc;
  height: 38px;
  width: 88px;
  line-height: 2;
  text-align: center;
  display: flex;
  span {
    margin: 0 18px;
  }
  button {
    background-color: #fff;
    border: none;
    :focus {
      outline: none;
    }
  }
`;

export const BuyProduct = styled.button`
  background-color: #bc9051;
  width: 131px;
  margin-left: 30px;
  height: 38px;
  padding: 0;
  font-size: 18px;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const BoxSize = styled.div`
  line-height: 1;
  display: flex;
  align-items: center;
  margin: 18px 0 20px 0;
  border-radius: 8px;
  h3 {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 0;
  }
  a {
    color: #000;
    font-size: 18px;
    font-weight: 300;
    margin-left: 13px;
    :hover {
      color: #000;
    }
  }
`;

export const StyledCompare = styled.button`
  border: 1px solid #ccc;
  width: 99px;
  height: 38px;
  background-color: #fff;
  position: relative;
  &:focus {
    outline: none;
  }
  p {
    font-size: 12px;
    font-weight: 400;
    line-height: 2.9;
    margin-left: 25px;
  }
  img {
    position: absolute;
    top: 0px;
    left: 0px;
    // margin-left: 3px;
  }
`;
export const StyledShare = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  h4 {
    color: #000;
  }
  svg {
    margin-left: 20px;
    font-size: 20px;
    color: #000;
  }
`;
