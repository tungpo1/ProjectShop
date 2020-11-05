import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import pic1 from "../../../Component/Image/Slide/Slide2.png";
import pic2 from "../../../Component/Image/Slide/Slide3.png";
import left from "../../../Component/Image/Icon/left.png";
import pic3 from "../../../Component/Image/Slide/Slide1-1.png";
import { Col, Container, Row } from "reactstrap";
import ret from "../../../Component/Image/Icon/return.png";
import dollar from "../../../Component/Image/Icon/dollar.png";
import support from "../../../Component/Image/Icon/support.png";
const Slide1 = styled.div`
  height: 554px;
  position: relative;
  background-image: linear-gradient(white, #d3f5fe);
  margin-top: 30px;
  h4 {
    position: absolute;
    top: 108px;
    left: 31px;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    color: #5a5858;
  }
  h2 {
    position: absolute;
    top: 159px;
    left: 31px;
    font-family: Roboto;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 56px;
    color: #000000;
    width: 40%;
  }
  p {
    position: absolute;

    left: 31px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
  }
  a {
    position: absolute;
    bottom: 86px;
    left: 31px;
    display: flex;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #272626;
    &:hover {
      text-decoration: none;
    }
  }
`;
const CusCol = styled(Col)`
  display: flex;
  position: relative;
  img {
    object-fit: contain;
  }
  p {
    margin-bottom: 0;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
  }
  &::after {
    position: absolute;
    content: "";
    width: 1px;
    height: 48px;
    top: calc(45% - 24px);
    right: 15px;
    background: #bdbdbd;
  }
  &:last-of-type {
    &::after {
      content: none;
    }
  }
`;
const ContainerCustom = styled(Container)`
  margin-top: 50px;
  padding-bottom: 37px;
  position: relative;
`;
const Wrapp = styled.div`
  position: relative;
  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background: rgba(146, 141, 141, 0.43);
    bottom: 0;
  }
`;
export default class Slide extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 3000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <Slide1>
            <img
              src={pic3}
              style={{ position: "absolute", top: "50px", right: "30px" }}
            />
            <h4>QEEN BAG SHOP</h4>
            <h2>Special Offer Today Women Supper Dresses</h2>
            <p style={{ top: "316px" }}>
              We deliver new collection and hot collection
            </p>
            <p style={{ bottom: "159px" }}>from out factory to your doorstep</p>
            <a href="/">
              SHOP NOW{" "}
              <img
                src={left}
                style={{ objectFit: "contain", marginLeft: "11px" }}
              />{" "}
            </a>
          </Slide1>

          <Slide1 className="slide2">
            <img
              src={pic1}
              style={{ position: "absolute", top: "0px", right: "30px" }}
            />
            <h4>QEEN BAG SHOP</h4>
            <h2>Special Offer Today Women Supper Dresses</h2>
            <p style={{ top: "316px" }}>
              We deliver new collection and hot collection
            </p>
            <p style={{ bottom: "159px" }}>from out factory to your doorstep</p>
            <a href="/">
              SHOP NOW{" "}
              <img
                src={left}
                style={{ objectFit: "contain", marginLeft: "11px" }}
              />{" "}
            </a>
          </Slide1>

          <Slide1 className="slide3">
            <img
              src={pic2}
              style={{ position: "absolute", bottom: "6%", right: "30px" }}
            />
            <h4>QEEN BAG SHOP</h4>
            <h2>Special Offer Today Women Supper Dresses</h2>
            <p style={{ top: "316px" }}>
              We deliver new collection and hot collection
            </p>
            <p style={{ bottom: "159px" }}>from out factory to your doorstep</p>
            <a href="/">
              SHOP NOW{" "}
              <img
                src={left}
                style={{ objectFit: "contain", marginLeft: "11px" }}
              />{" "}
            </a>
          </Slide1>
        </Slider>
        <Wrapp>
          <ContainerCustom>
            <Row>
              <CusCol md="4">
                <img src={ret} />
                <div style={{ paddingLeft: "10px" }}>
                  <p>FREE RETURN</p>
                  <p>30 days money back guarantee!</p>
                </div>
              </CusCol>
              <CusCol md="4">
                <img src={dollar} />
                <div style={{ paddingLeft: "10px" }}>
                  <p>FREE SHIPPING</p>
                  <p> Free shipping on all order</p>
                </div>
              </CusCol>
              <CusCol md="4">
                <img src={support} />
                <div style={{ paddingLeft: "10px" }}>
                  <p>SUPPORT 24/7</p>
                  <p>We support online 24 hours a day</p>
                </div>
              </CusCol>
            </Row>
          </ContainerCustom>
        </Wrapp>
      </div>
    );
  }
}
