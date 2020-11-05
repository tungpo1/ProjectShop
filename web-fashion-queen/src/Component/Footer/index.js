import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Logo from "../Image/Logo/logo-ft.png";
import Home from "../Image/Icon/icon-home.png";
import Phone from "../Image/Icon/dt.png";
import Mail from "../Image/Icon/icon-mail.png";

import { Wrapper } from "./style";
import {
  faFacebookF,
  faInstagram,
  faPinterest,
  faSkype,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function FooterProduct() {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col md="2">
            <img src={Logo} style={{ marginBottom: "40px" }} />
            <h6>Copyright@2020 baobinhtheme. All Rights Reserved</h6>
            <span>Terms & Conditions</span>
          </Col>
          <Col md="2">
            <h5>INFORMATION</h5>
            <a href="#">About Us</a>
            <a href="#"> Frequently Questions</a>
            <a href="#"> Delivery Infomation</a>
            <a href="#"> Services</a>
          </Col>
          <Col md="2">
            <h5>MY ACCOUNT</h5>
            <a href="#">My Account</a>
            <a href="#"> Shopping Cart</a>
            <a href="#"> Wishlist</a>
            <a href="#"> Checkout</a>
            <a href="#"> Contact</a>
          </Col>
          <Col md="2">
            <h5>QUICK LINKS</h5>

            <a href="#">Brands</a>
            <a href="#"> Gift Vouchers</a>
            <a href="#"> Affiliates</a>
            <a href="#"> Specials</a>
            <a href="#"> Frequently Questions</a>
          </Col>
          <Col md="2">
            <h5>CONTACT US</h5>
            <div className="contact">
              <img src={Home} />
              <p>214 Nguyễn Lương Bằng Đống Đa Hà Nội </p>
            </div>
            <div className="contact">
              <img src={Phone} />
              <p>+849845xxx666</p>
            </div>
            <div className="contact">
              <img src={Mail} />
              <p>example@gmail.com</p>
            </div>
          </Col>

          <Col md="2">
            <h5>SOCIAL SITE</h5>
            <button>
              <a href="#" style={{ color: "#000" }}>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </button>
            <button>
              <a href="#" style={{ color: "#000" }}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </button>
            <button>
              <a href="#" style={{ color: "#000" }}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </button>
            <button>
              <a href="#" style={{ color: "#000" }}>
                <FontAwesomeIcon icon={faPinterest} />
              </a>
            </button>{" "}
            <button>
              <a href="#" style={{ color: "#000" }}>
                <FontAwesomeIcon icon={faSkype} />
              </a>
            </button>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}
export default FooterProduct;
