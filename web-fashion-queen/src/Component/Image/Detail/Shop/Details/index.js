import React, { useState } from "react";
import classnames from "classnames";
import {
  Row,
  Col,
  Badge,
  Container,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  TabPane,
  Nav,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Card,
  CardTitle,
} from "reactstrap";
import {
  Wrapper,
  ReRated,
  ListPick,
  StyledDiv,
  StyledH5,
  TaskBar,
  InnerBar,
  StyledButton,
  RatingStar,
  StyledShoes,
  StyledCol,
  AddCart,
  Amout,
  BuyProduct,
  Inner,
  BoxSize,
  StyledDropdownToggle,
  StyledCompare,
  StyledShare,
  RatedProduct,
  StylePrice,
  TagProduct,
  StyledNavitem,
  StyledTabContent,
  StyledH3,
} from "./style";
// import ExampleSlider from "./slickcarousel";
import taskbar from "../../../Component/Image/Detail/Filter/group.png";
import Background from "../../../Component/Image/Detail/background-big.jpg";
import Star from "../../../Component/Image/Detail/Star/sao.jpg";
import Compare from "../../../Component/Image/Icon/compare.png";
import Heart from "../../../Component/Image/Icon/tim.png";
import Cart from "../../../Component/Image/Icon/tuido-fixed.png";
import Angle from "../../../Component/Image/Icon/03.jpg";
import Eyes from "../../../Component/Image/Icon/footer-eye.png";
import Tim from "../../../Component/Image/Icon/footer-tim.png";
import Share from "../../../Component/Image/Icon/footer-share.png";
import Tui from "../../../Component/Image/Icon/footer-tui.png";

import Product from "../../../Component/Image/Detail/Rated/sanpham.png";
import Product2 from "../../../Component/Image/Detail/Rated/sanpham2.png";
import Product3 from "../../../Component/Image/Detail/Rated/sanpham3.png";
import Picture from "../../../Component/Image/Detail/Rated/Rectangle.png";
import Picture2 from "../../../Component/Image/Detail/Rated/Rectangle2.png";
import Picture3 from "../../../Component/Image/Detail/Rated/Rectangle3.png";
import Shoes from "../../../Component/Image/Detail/shoes-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faPinterest,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";
function Details() {
  // export const data = TOP_RATE.map((item) => {});
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <Container>
      <Wrapper>
        <Row>
          <Col md="3">
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
            <StyledH5>Filter by price</StyledH5>
            <TaskBar>
              <img src={taskbar} />
            </TaskBar>
            <StyledButton>Filter</StyledButton>
            <StyledH5 style={{ marginBottom: "41px" }}>
              Top Rated Product
            </StyledH5>
            <RatedProduct>
              <img
                src={Product}
                style={{ height: "72px", marginTop: "10px" }}
              />
              <StylePrice>
                <img src={Star} />
                <h6>$ 340.00 </h6>
              </StylePrice>
            </RatedProduct>
            <RatedProduct>
              <img
                src={Product2}
                style={{ height: "72px", marginTop: "10px" }}
              />
              <StylePrice>
                <img src={Star} />
                <h4>Blackless</h4>
                <h6>$ 390.00 </h6>
              </StylePrice>
            </RatedProduct>
            <RatedProduct>
              <img
                src={Product3}
                style={{ height: "72px", marginTop: "10px" }}
              />
              <StylePrice>
                <img src={Star} />
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
          </Col>
          <Col md="9">
            <Row>
              <Col md="6">
                <img src={Background} style={{ marginTop: "67px" }} />
                <StyledShoes>
                  <img src={Shoes} />
                  <img src={Shoes} />
                  <img src={Shoes} />
                  <img src={Shoes} />
                </StyledShoes>
              </Col>
              <StyledCol md="6">
                <RatingStar>
                  <h5>Ornare Sed Consequat</h5>
                  <img src={Star} />
                  <p>1 review(s)</p>
                  <h4>$ 530.00</h4>
                  <span>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. Phasellus id nisi quis
                    justo tempus mollis sed et dui. In hac habitasse platea
                    dictumst.
                  </span>
                  <AddCart>
                    <p
                      style={{
                        fontSize: "24px",
                        fontWeight: "300",
                        margin: "21px 0 4px 32px",
                        textTransform: "uppercase",
                      }}
                    >
                      200 in stock
                    </p>
                    <Inner>
                      <Amout>
                        {" "}
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>{" "}
                      </Amout>
                      <BuyProduct type="submit">
                        <img src={Cart} />
                        Add to cart
                      </BuyProduct>
                    </Inner>
                    <BoxSize>
                      <h3>Size:</h3>
                      <UncontrolledDropdown>
                        <StyledDropdownToggle nav>
                          S <img src={Angle} />
                        </StyledDropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem>M</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>XXL</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </BoxSize>
                    <BoxSize>
                      <h3>Color:</h3>
                      <UncontrolledDropdown>
                        <StyledDropdownToggle nav style={{ width: "159px" }}>
                          White <img src={Angle} />
                        </StyledDropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem>Red</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Blue</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </BoxSize>
                    <BoxSize>
                      <StyledCompare>
                        <img src={Compare} />
                        <p>Compare</p>
                      </StyledCompare>
                      <StyledCompare style={{ marginLeft: "32px" }}>
                        <img src={Heart} />
                        <p>Wishlist</p>
                      </StyledCompare>
                    </BoxSize>
                    <BoxSize>
                      <h3>Tag :</h3>
                      <a href="#">Fashion</a>
                    </BoxSize>
                  </AddCart>
                  <StyledShare>
                    <h4>ShareProduct:</h4>
                    <a href="http://www.facebook.com">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="https://twitter.com/?lang=vi">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>{" "}
                    <a href="https://www.instagram.com/">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.pinterest.com/">
                      <FontAwesomeIcon icon={faPinterest} />
                    </a>
                    <a href="https://www.skype.com/en/">
                      <FontAwesomeIcon icon={faSkype} />
                    </a>{" "}
                  </StyledShare>
                </RatingStar>
              </StyledCol>
            </Row>
            <Nav tabs>
              <StyledNavitem>
                <NavLink
                  className={classnames({ active: activeTab === "1" })}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  Description
                </NavLink>
              </StyledNavitem>
              <StyledNavitem>
                <NavLink
                  className={classnames({ active: activeTab === "2" })}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  Information
                </NavLink>
              </StyledNavitem>
              <StyledNavitem>
                <NavLink
                  className={classnames({ active: activeTab === "3" })}
                  onClick={() => {
                    toggle("3");
                  }}
                >
                  Review(1)
                </NavLink>
              </StyledNavitem>
            </Nav>
            <StyledTabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam fringilla augue nec est tristique auctor. Ipsum metus
                      feugiat sem, quis fermentum turpis eros eget velit. Donec
                      ac tempus ante. Fusce ultricies massa massa. Fusce
                      aliquam, purus eget sagittis vulputate, sapien libero
                      hendrerit est, sed commodo augue nisi non neque.Cras neque
                      metus, consequat et blandit et, luctus a nunc. Etiam
                      gravida vehicula tellus, in imperdiet ligula euismod eget.
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis egestas. Nam erat mi, rutrum at
                      sollicitudin rhoncus
                    </p>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Card>
                  <CardTitle>Color</CardTitle>
                  <CardTitle>White</CardTitle>
                  <CardTitle>Size</CardTitle>
                  <CardTitle>S,M,L</CardTitle>
                </Card>
              </TabPane>
              <TabPane tabId="3" style={{ padding: "20px" }}>
                <Form>
                  <FormGroup>
                    <Label for="exampleText">
                      1 Review For Chaz Kangeroo Hoodies
                    </Label>
                    <Input type="textarea" name="text" id="exampleText"></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleName">* Your Name</Label>
                    <Input
                      type="name"
                      name="name"
                      id="exampleName"
                      placeholder="with a placeholder"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">* Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="with a placeholder"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleText">* Your Review</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleFile">File</Label>
                    <Input type="file" name="file" id="exampleFile" />
                  </FormGroup>
                  <FormGroup tag="fieldset">
                    <legend>Note: HTML is not translated!</legend>
                    <Label>* Rating</Label>
                  </FormGroup>
                  <Button>Continue</Button>
                </Form>
              </TabPane>
            </StyledTabContent>
            <StyledH3>Related Product</StyledH3>
            {/* <ExampleSlider /> */}
            <ReRated>
              <div>
                <img src={Picture} />
                <img src={Star} />
                <h4>High Feel</h4>
                <div>
                  <h6>$620.00</h6>
                  <span>$530.00</span>
                </div>
                <div className="hover">
                  <a href="#">
                    {" "}
                    <img src={Eyes} />
                  </a>
                  <a href="#">
                    {" "}
                    <img src={Tui} />
                  </a>
                  <a href="#">
                    {" "}
                    <img src={Tim} />
                  </a>
                  <a href="#">
                    {" "}
                    <img src={Share} />
                  </a>
                </div>
              </div>
              <div>
                <img src={Picture2} />

                <img src={Star} />
                <h4>Bow Sandals</h4>
                <div>
                  <h6>$620.00</h6>
                  <span>$530.00</span>
                </div>
                <div className="hover">
                  <a href="#">
                    {" "}
                    <img src={Eyes} />
                  </a>
                  <a href="#">
                    {" "}
                    <img src={Tui} />
                  </a>
                  <a href="#">
                    {" "}
                    <img src={Tim} />
                  </a>
                  <a href="#">
                    {" "}
                    <img src={Share} />
                  </a>
                </div>
              </div>
              <div>
                <img src={Picture3} />
                <img src={Star} />
                <h4>Backless</h4>
                <div>
                  <h6>$620.00</h6>
                  <span>$530.00</span>
                </div>
                <div className="hover">
                  <a href="#">
                    {" "}
                    <img src={Eyes} />
                  </a>
                  <a href="#">
                    {" "}
                    <img src={Tui} />
                  </a>
                  <a href="#">
                    {" "}
                    <img src={Tim} />
                  </a>
                  <a href="#">
                    {" "}
                    <img src={Share} />
                  </a>
                </div>
              </div>
              <div>
                <img src={Picture} />
                <img src={Star} />
                <h4>Bow Sandals</h4>
                <div>
                  <h6>$620.00</h6>
                  <span>$530.00</span>
                </div>
                <div className="hover">
                  <a href="#">
                    {" "}
                    <img src={Eyes} />
                  </a>
                  <a href="#">
                    {" "}
                    <img src={Tui} />
                  </a>
                  <a href="#">
                    {" "}
                    <img src={Tim} />
                  </a>
                  <a href="#">
                    {" "}
                    <img src={Share} />
                  </a>
                </div>
              </div>
            </ReRated>
          </Col>
        </Row>
      </Wrapper>
    </Container>
  );
}
export default Details;
