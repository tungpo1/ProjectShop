import React, { useState } from "react";
import { Col, Container, Form, Row } from "reactstrap";
import styled from "styled-components";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";
import Axios from "axios";

const Col1 = styled(Col)`
  text-align: center;

  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    color: #000000;
  }
  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
  }
`;
const Col2 = styled(Col)`
  button {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #fff9f9;
    padding: 14px 47.5px 6px 43.5px;
    background: #33d6fa;
  }
  input {
    height: auto;
    &::placeholder {
      font-family: Roboto;
      font-style: italic;
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      color: #bdbdbd;
    }
  }
`;
function Subscribe() {

  const [email,setEmail] = useState("");
const changeEmail = (e) =>{
  setEmail(e.target.value);
}
const handleSubmit = (e) =>{
  e.preventDefault();
  const Subscribes = {
    email: email
  };
  Axios.post("/api/subscribes", Subscribes)
  .then(function(response){
    console.log(response.status);
    if (response.statusText === "OK") {
      alert("Subscribes Email SUCCESS");
      setEmail("");
    } else if (response.statusText === "fail") {
      alert("Email failed to Subscribes.");
    }
  })
  .catch(function (response) {
    console.log(response);
  });
};
  return (
    <Container
      fluid="true"
      style={{
        backgroundColor: "rgba(196, 196, 196, 0.58)",
        paddingTop: "135px",
        paddingBottom: "150px",
      }}
    >
      <Row>
        <Col1 md="6">
          <h1>JOIN QEEN NEWSLETTER</h1>
          <p>Subscribe our newsletter and get discount 30% off</p>
        </Col1>
        <Col2 md="6">
          <Form onSubmit = {handleSubmit}>
          <InputGroup style={{ paddingTop: "9px" }}>
            <Input type="email" placeholder="Enter your email address" value={email} onChange ={changeEmail} />
            <InputGroupAddon addonType="prepend">
              <Button>SUBSCRIBE</Button>
            </InputGroupAddon>
          </InputGroup>
          </Form>
        </Col2>
      </Row>
    </Container>
  );
}

export default Subscribe;
