import { Col, Row, Badge, Container } from "reactstrap";
import React from "react";
import {
  StyledH5,
  ListPick,
  StyledDiv,
  TaskBar,
  StyledButton,
  RatedProduct,
  StylePrice,
  TagProduct,
} from "./styled";
import Star2 from "../../../Component/Image/Detail/Star/5-sao1.png";
import Product from "../../../Component/Image/Detail/Rated/sanpham.png";
import Product2 from "../../../Component/Image/Detail/Rated/sanpham2.png";
import Product3 from "../../../Component/Image/Detail/Rated/sanpham3.png";
import taskbar from "../../../Component/Image/Detail/Filter/group.png";

function List() {
  return (
    <>
      <StyledH5>Categories</StyledH5>
      <StyledDiv>
        <ListPick>
          Cosmetic<Badge>(4)</Badge>
        </ListPick>
        <ListPick className="justify-content-between">
          Bags <Badge>(2)</Badge>
        </ListPick>
        <ListPick>
          Shoes <Badge>(6)</Badge>
        </ListPick>
        <ListPick>
          Accessories <Badge>(1)</Badge>
        </ListPick>
        <ListPick>
          Fashion <Badge>(5)</Badge>
        </ListPick>
      </StyledDiv>
      <StyledH5>Color</StyledH5>
      <StyledDiv>
        <ListPick>
          Gold
          <Badge>(4)</Badge>
        </ListPick>
        <ListPick className="justify-content-between">
          Green <Badge>(2)</Badge>
        </ListPick>
        <ListPick>
          Blue <Badge>(6)</Badge>
        </ListPick>
        <ListPick>
          White <Badge>(1)</Badge>
        </ListPick>
        <ListPick>
          Red <Badge>(5)</Badge>
        </ListPick>
      </StyledDiv>
      <StyledH5>Size</StyledH5>

      <StyledDiv>
        <ListPick className="justify-content-between">
          L <Badge>(2)</Badge>
        </ListPick>
        <ListPick>
          M <Badge>(6)</Badge>
        </ListPick>
        <ListPick>
          S <Badge>(1)</Badge>
        </ListPick>
        <ListPick>
          XL <Badge>(5)</Badge>
        </ListPick>
      </StyledDiv>
      <StyledH5>Filter by price</StyledH5>
      <TaskBar>
        <img src={taskbar} />
      </TaskBar>
      <StyledButton>Filter</StyledButton>
      <StyledH5 style={{ marginBottom: "41px" }}>Top Rated Product</StyledH5>
      <RatedProduct>
        <img src={Product} style={{ height: "72px", marginTop: "10px" }} />
        <StylePrice>
          <img src={Star2} />
          <h6>$ 340.00 </h6>
        </StylePrice>
      </RatedProduct>
      <RatedProduct>
        <img src={Product2} style={{ height: "72px", marginTop: "10px" }} />
        <StylePrice>
          <img src={Star2} />
          <h4>Blackless</h4>
          <h6>$ 390.00 </h6>
        </StylePrice>
      </RatedProduct>
      <RatedProduct>
        <img src={Product3} style={{ height: "72px", marginTop: "10px" }} />
        <StylePrice>
          <img src={Star2} />
          <h6>$ 420.00 </h6>
        </StylePrice>
      </RatedProduct>
      <StyledH5>Product Tag</StyledH5>
      <TagProduct>
        <button>
          <a href="#">Fashion</a>
        </button>
        <button style={{ paddingRight: "12px" }}>
          <a href="#">Bags</a>
        </button>
        <button>
          <a href="#">Cosmetic</a>
        </button>
        <button>
          <a href="#">Flat Shoes</a>
        </button>
        <button style={{ marginRight: "35px" }}>
          <a href="#">Eyeshadows</a>
        </button>
        <button>
          <a href="#">Hardbag</a>
        </button>
      </TagProduct>
    </>
  );
}
export default List;
