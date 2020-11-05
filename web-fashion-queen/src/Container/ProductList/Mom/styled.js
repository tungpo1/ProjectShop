import styled from "styled-components";
import { Col, DropdownItem, DropdownToggle, Pagination } from "reactstrap";
import { Link, NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  margin: 52px 0;
  align-items: center;
`;
export const StyledButton = styled.button`
  border: none;
  margin-right: 10px;
  :focus {
    outline: none;
  }
`;
export const ChangeView = styled.div`
  display: -webkit-inline-box;
  p {
    font-weight: normal;
    font-size: 18px;
    margin-left: 50px;
    padding-top: 5px;
    margin-bottom: 0;
  }
`;
export const StyledDropdownToggle = styled(DropdownToggle)`
  margin: 0 210px 0 6px;
  background-color: #fff;
  border: 1px solid #ccc;
  :focus,
  :hover,
  :visited {
    outline: none;
    color: #000;
    background-color: #fff;
  }
  :active {
    color: #111111 !important;
    background-color: #ffffff !important;
    border-color: #111111 !important;
  }
  font-size: 14px;
  color: #000;
  img {
    margin-left: 85px;
  }
`;
export const Wrapped = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const StyledNavLink = styled(NavLink)`
  div {
    display: flex;
    background-color: #f4f4f6;
    height: 296px;
    margin-bottom: 20px;
  }
  img {
    object-fit: cover;
    padding-top: 20px;
  }
`;
export const ReRated = styled(Col)`
  margin-bottom: 20px;
  .hover {
    display: none;
    position: absolute;
    top: 10px;
    right: 0;
  }
  h4 {
    font-size: 24px;
    font-weight: 700;
    margin-top: 10px;
  }
  > div {
    position: relative;
    &:hover {
      .hover {
        display: grid;
      }
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
export const ButtonImg = styled.button`
  &:focus {
    outline: none;
  }
  border: none;
  background-color: #fff;
`;
export const StyledPagination = styled(Pagination)`
  margin-top: 40px;
  border: 1px solid #bc9051;
  > ul {
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    > li {
      margin-right: 12px;
      .page-link:hover {
        background-color: #bc9051 !important;
      }
      a {
        color: #000 !important;
        font-weight: normal;
        font-size: 24px;
        padding: 10px 20px;
      }
    }
  }
`;
