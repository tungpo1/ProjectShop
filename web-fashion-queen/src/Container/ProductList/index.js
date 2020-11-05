import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  Badge,
  Container,
  PaginationItem,
  PaginationLink,
  Input,
} from "reactstrap";
import List from "./List/index";
import ListProduct from "./Mom/index";
import AngleDown from "../../Component/Image/Icon/03.jpg";
import ListImg from "../../Component/Image/Shop/List/6.png";
import ListImg2 from "../../Component/Image/Shop/List/5.png";
import _sortBy from "lodash/sortBy";
import { sortProduct, getListProduct } from "../../Redux/actions/action";
import {
  Wrapper,
  Wrapped,
  ChangeView,
  ButtonImg,
  StyledPagination,
  StyledDropdownToggle,
} from "./Mom/styled";
import styled from "styled-components";
import { connect } from "react-redux";
const options = [
  {
    label: "Relevance",
    value: "Relevance",
  },
  {
    label: "Alphabet",
    value: "Alphabet",
  },
  {
    label: "Price",
    value: "Price",
  },
  {
    label: "Quatinty",
    value: "Quatinty",
  },
];
const CustomInput = styled(Input)`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.65);
  padding-left: 7px;
  padding-top: 9px;
  padding-bottom: 8px;
  width: 85%;
  border-radius: 0;
  margin-left: 6px;
`;
function Shop({ productList, sortProduct, getListProduct }) {
  const [dropdownOpen, setOpen] = useState(false);
  const [inputvalue, setInputvalue] = useState();

  const [data, setData] = useState(productList);

  const onChangeData = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setInputvalue(e.target.value);
    console.log(inputvalue);
    sortProduct(e.target.value);
  };

  useEffect(() => {
    setData(productList);
  }, [productList]);

  const toggle = () => setOpen(!dropdownOpen);
  return (
    <Container>
      <Row>
        <Col md="3">
          <List />
        </Col>{" "}
        <Col md="9" style={{ padding: "0" }}>
          <Wrapper>
            <ButtonImg>
              <img src={ListImg2} />
            </ButtonImg>
            <ButtonImg>
              {" "}
              <img src={ListImg} />
            </ButtonImg>
            <ChangeView>
              <p>Sort By :</p>
              <CustomInput
                type="select"
                value={inputvalue}
                onChange={(e) => onChangeData(e)}
              >
                {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </CustomInput>
              <h6 style={{ position: "absolute", right: "0" }}>
                Showing 1-12 Of 21 Results
              </h6>
            </ChangeView>
          </Wrapper>
          <Wrapped>
            <ListProduct dataList={data} />
          </Wrapped>
          <StyledPagination aria-label="Page navigation example">
            <PaginationItem>
              <PaginationLink previous href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink style={{ backgroundColor: "#bc9051" }} href="#">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next href="#" />
            </PaginationItem>
          </StyledPagination>
        </Col>
      </Row>
    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    productList: state.productList,
  };
};
const mapDispatchToProps = (dispatch) => ({
  sortProduct: (index) => dispatch(sortProduct(index)),
  getListProduct: () => dispatch(getListProduct())
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
