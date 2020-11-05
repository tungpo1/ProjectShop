import React, { Component } from "react";
import Slider from "react-slick";
import Picture from "../../../Component/Image/Detail/Rated/Rectangle.png";
import Picture2 from "../../../Component/Image/Detail/Rated/Rectangle2.png";
import Picture3 from "../../../Component/Image/Detail/Rated/Rectangle3.png";
import styled from "styled-components";
const Wrapper = styled.div`
  h2 {
    font-weight: bold;
    font-size: 24px;
  }
  > .slick-slider {
    display: flex;
    width: 100%;
    overflow: hidden;
  }
`;
// const StyledDiv = styled.div``;
// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }
// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      centenPadding: "60px",
      centerMode: true,
      slidesToShow: 3,
      className: "center",
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
    };
    return (
      <Wrapper>
        <h2> RELATED PRODUCT</h2>
        <Slider {...settings}>
          <div>
            <img src={Picture} />
            <p>High Feel</p>
          </div>
          <div>
            <img src={Picture3} />
            <p>High Feel</p>
          </div>
          <div>
            <img src={Picture} />
            <p>High Feel</p>
          </div>
          <div>
            <img src={Picture2} />
            <p>High Feel</p>
          </div>
          <div>
            <img src={Picture} />
            <p>High Feel</p>
          </div>
          <div>
            <img src={Picture3} />
            <p>High Feel</p>
          </div>
        </Slider>
      </Wrapper>
    );
  }
}
