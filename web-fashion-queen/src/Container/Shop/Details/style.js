import styled from "styled-components";
import {
  ListGroupItem,
  Row,
  Col,
  DropdownToggle,
  NavItem,
  TabContent,
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
////////////////////////////////
// Style col  right
export const StyledCol = styled(Col)`
  padding-left: 0;
  margin-bottom: 77px;
`;
export const StyledShoes = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0 0 10px;
  width: 378px;
`;

export const RatingStar = styled.div`
  margin-top: 67px;
  > h5 {
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

//////////////////////////////////////////

// Style Buy product

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
export const StyledDropdownToggle = styled(DropdownToggle)`
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100px;
  height: 38px;
  font-size: 18px;
  color: #000;
  margin-left: 8px;
  img {
    float: right;
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
/////////////////////////////////////////////
// Style Tab

export const StyledNavitem = styled(NavItem)`
  background-color: #3e3c3c;
  margin-right: 4px;
  a {
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 18px;
  }
`;
export const StyledTabContent = styled(TabContent)`
  border: 2px solid #ccc;

  p {
    font-size: 18px;
    padding: 40px 0 40px 11px;
  }
  > div {
        > .card {
          display:flex;
          border:none;
          flex-wrap:wrap;
          flex-direction: inherit;
          >.card-title{
            height:72px;
            width: 410.5px;
            border: 1px solid #ccc;
            margin:0;
            font-size:18px;
            padding: 20px;
          }
        }
      }
    }
  }
`;
////////////////////////////////////////////
export const StyledH3 = styled.h3`
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  margin: 84px 0 20px 0;
`;

export const ReRated = styled.div`
  display: flex;
  > div {
    position: relative;
    margin-right: 10px;
    &:hover {
      .hover {
        display: grid;
      }
    }
    .hover {
      display: none;
      position: absolute;
      top: 0;
      right: 0;
    }
    h4 {
      font-size: 24px;
      font-weight: 700;
      margin-left: 30px;
    }
    > div {
      display: flex;
      line-height: 1;
      h6 {
        font-size: 18px;
        font-weight: 700;
        text-decoration: line-through;
        opacity: 0.5;
        margin-right: 20px;
      }
      span {
        color: #bc9051;
        font-size: 18px;
      }
    }
  }
`;
