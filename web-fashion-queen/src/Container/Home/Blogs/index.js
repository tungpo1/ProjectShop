import React from "react";
import { Col, Container, Row } from "reactstrap";
import styled from "styled-components";
import BlogSlide from "./BlogSlide";
import Slider from "react-slick";
import Prev from "../../../Component/Image/Icon/arrowLeft.png";

import Next from "../../../Component/Image/Icon/arrowRight.png";
const Wrapper = styled(Container)`
  margin-top: 66px;
  padding-bottom: 76px;
  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.07em;
    color: #000000;
  }
`;
const NextArrow = styled.div`

`;

const PrevArrow = styled.div``;
const Wrap = styled.div`
  .slick-slider {
    margin-bottom: -6px;
  }

  .slick-prev {
    left: 0px;
    z-index: 5;
    top: 53%;
    &:before {
      display: none;
    }
  }
  .slick-next {
    right: 0px;
    top: 53%;
    &:before {
      display: none;
    }
  }
`;
export default function Blogs() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: (
      <NextArrow>
        <img className="nextIcon" src={Next} />
      </NextArrow>
    ),
    prevArrow: (
      <PrevArrow>
        <img className="prevIcon" src={Prev} />
      </PrevArrow>
    ),
  };
  return (
    <>
      <Wrapper>
        <h1>LATEST BLOGS</h1>

        <Wrap>
          <Slider {...settings}>
            <div>
              <BlogSlide />
            </div>
            <div>
              <BlogSlide />
            </div>
            <div>
              <BlogSlide />
            </div>
          </Slider>
        </Wrap>
      </Wrapper>
    </>
  );
}
