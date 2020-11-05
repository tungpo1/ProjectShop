import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col, Button, Form } from "reactstrap";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import Picture1 from "../images/1.png";
import Picture2 from "../images/2.png";
import Picture3 from "../images/3.png";
import Picture4 from "../images/4.png";
import axios from "axios";
const Wrapper = styled.div`
  margin: 50px 0;
`;
const Left = styled(Form)`
  button {
    width: 200px;
    height: 45px;
    margin-right: 25px;
  }
`;
const Right = styled.div`
  h5 {
    font-size: 18px;
    font-weight: 400;
    padding-top: 15px;
  }
  p {
    font-size: 12px;
  }
  h6 {
    font-weight: bold;
    font-size: 14px;
  }
`;
const StyledButton = styled.button`
  padding: 4px 25px 5px 15px;
  background-color: #bc9051;
  color: #fff;
  font-weight: 300;
  font-size: 21px;
  border: none;
  &:focus {
    outline: none;
  }
`;
const Div6 = styled.div`
  img {
    padding-top: 70px;
    width: 100%;
  }
`;
const StyledDiv = styled.div`
  padding-top: 20px;
  font-size: 22px;
  Input {
    background-color: #d9d9d9;
  }
`;
const Message = styled.div`
  padding: 32px 15px;
  width: 100%;
  Input {
    height: 151px;
    border: none;
    background-color: #d9d9d9;
  }
`;

function Div1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sub, setSub] = useState("");
  const [mess, setMess] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const onChangeSub = (e) => {
    setSub(e.target.value);
  };

  const onChangeMess = (e) => {
    setMess(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const newData = {
      id: "",
      name: name,
      email: email,
      phone: phone,
      sub: sub,
      mess: mess,
    };
    axios
      .post("api/post", newData)
      .then(function (response) {
        console.log(response.status);
        if (response.statusText === "OK") {
          alert("Message Sent SUCCESS");
          resetForm();
        } else if (response.data.status === "fail") {
          alert("Message failed to send.");
        }
      })
      .catch(function (response) {
        console.log(response);
      });
  };
  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setSub("");
    setMess("");
  };
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col md="6">
            <Left onSubmit={submitForm}>
              <h4>TELL US YOUR PROJECT</h4>
              <Row>
                <Col md="6">
                  <StyledDiv>
                    <Input
                      placeholder="Name*"
                      value={name}
                      onChange={onChangeName}
                    />
                  </StyledDiv>
                  <StyledDiv>
                    <Input
                      placeholder="Email*"
                      value={email}
                      onChange={onChangeEmail}
                    />
                  </StyledDiv>
                </Col>
                <Col md="6">
                  <StyledDiv>
                    <Input
                      placeholder="Phone*"
                      value={phone}
                      onChange={onChangePhone}
                    />
                  </StyledDiv>
                  <StyledDiv>
                    <Input
                      placeholder="Subject*"
                      value={sub}
                      onChange={onChangeSub}
                    />
                  </StyledDiv>
                </Col>
                <Message>
                  <Input
                    placeholder="Message*"
                    value={mess}
                    onChange={onChangeMess}
                  />
                </Message>
              </Row>
              <StyledButton>SEND MESSAGE</StyledButton>
            </Left>
          </Col>
          <Col md="6">
            <Right>
              <h4>CONTACT US</h4>
              <h5>
                Claritas est etiam processus dynamicus qui sequitur mutationem
                consuetudium lectorum Mirum est notare quam littera gothica quam
                nunc putamus parum claram anteposuerit litterarum formas human.
              </h5>
              <div>
                <p>
                  <img src={Picture1} /> 214 Nguyễn Lương Bằng Đống Đa Hà Nội
                </p>
                <hr size="10px" color="#bdbdbd"></hr>
              </div>
              <div>
                <p>
                  <img src={Picture2} /> example@gmail.com
                </p>
                <hr size="10px" color="#bdbdbd"></hr>
              </div>
              <div>
                <p>
                  <img src={Picture3} /> +849845xxx666
                </p>
              </div>
              <h6>WORKING HOURS</h6>
              <p>Monday - Saturday:08AM - 22PM</p>
            </Right>
          </Col>
        </Row>

        <Div6>
          <a href="https://www.google.com/maps/place/214+Nguy%E1%BB%85n+L%C6%B0%C6%A1ng+B%E1%BA%B1ng,+Quang+Trung,+%C4%90%E1%BB%91ng+%C4%90a,+H%C3%A0+N%E1%BB%99i,+Vietnam/@21.0143058,105.8251075,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab7f38ed7061:0xefbe723504900052!8m2!3d21.0143058!4d105.8273016">
            <img src={Picture4} />
          </a>
        </Div6>
      </Container>
    </Wrapper>
  );
}

export default Div1;
