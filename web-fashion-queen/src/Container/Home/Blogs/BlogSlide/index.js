import React from "react";
import { Col, Container, Row } from "reactstrap";
import styled from "styled-components";
import { Blog } from "../../common";

const CustomCol = styled(Col)`
  h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 75px;
    color: #bdbdbd;
    margin-bottom: 0;
    span {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 42px;
      color: #bdbdbd;
    }
  }
  h3 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    margin-bottom: 15px;
  }
  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    margin-bottom: 22px;
  }
  a {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #5a5858;
    text-decoration: underline;
  }
`;
function BlogSlide() {
  const data = Blog.map((item) => {
    return (
      <Col md="6">
        <Container style={{ paddingRight: "0", paddingLeft: "0" }}>
          <Row style={{ paddingTop: "90px" }}>
            <Col md="6">
              <img
                src={item.img}
                className="w-100"
                style={{ height: "250px", objectFit: "cover" }}
              />
            </Col>
            <CustomCol md="6">
              <h2>
                {item.day} <span>{item.month_year} </span>
              </h2>
              <h3>{item.title}</h3>
              <p>{item.content} </p>
              <a href="/">Read More</a>
            </CustomCol>
          </Row>
        </Container>
      </Col>
    );
  });
  return <Row>{data}</Row>;
}
export default BlogSlide;
