import React, { useState } from "react";

import { Container, Row, Col } from "reactstrap";
import StarRatings from "react-star-ratings";
import Compare from "../../Component/Image/Icon/compare.png";
import Heart from "../../Component/Image/Icon/tim.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterest,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";
import Cart from "../../Component/Image/Icon/tuido-fixed.png";
import { Input } from "reactstrap";
import { connect } from "react-redux";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
  addProduct,
} from "../../Redux/actions/action";
import {
  StyledShoes,
  BuyProduct,
  BoxSize,
  StyledCol,
  RatingStar,
  AddCart,
  Inner,
  Amout,
  StyledShare,
  StyledCompare,
} from "./style";
const ModalProduct = ({ dataP, addProduct }) => {
  console.log(dataP);
  const [quantity, setQuantity] = useState(1);
  const handleClick = (id, quantity) => {
    addProduct(id, quantity);
    // setQuantity(1);
  };
  const handleSubQuantity = (id) => {
    if (quantity <= 1) {
      setQuantity(1);
    } else setQuantity(quantity - 1);
  };
  const handleAddQuantity = (id) => {
    setQuantity(quantity + 1);
  };
  return (
    <Container>
      <Row>
        <Col md="6" style={{ paddingLeft: "0" }}>
          {/* <img src={data.img} style={{ marginTop: "67px" }} />  */}
          <div
            style={{
              background: "#d5f5ff",
              width: "100%",
              height: "500px",
              marginTop: "0",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={dataP.img} style={{ objectFit: "contain" }} />
          </div>
          <StyledShoes>
            <div className="imgDisplay">
              <img src={dataP.img} />
            </div>
            <div className="imgDisplay">
              <img src={dataP.img} />
            </div>
            <div className="imgDisplay">
              <img src={dataP.img} />
            </div>
            <div className="imgDisplay">
              <img src={dataP.img} />
            </div>
          </StyledShoes>
        </Col>
        <StyledCol md="6">
          <RatingStar>
            <h5>{dataP.name}</h5>
            <StarRatings
              rating={dataP.rate}
              starDimension="30px"
              starSpacing="0"
              starRatedColor="rgb(255, 216, 49)"
              starEmptyColor="rgb(125, 107, 107)"
            />
            <p>1 review(s)</p>
            <h4>$ {dataP.price}.00</h4>
            <span>{dataP.descrip}</span>
            <AddCart>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "300",
                  margin: "21px 0 4px 0px",
                  textTransform: "uppercase",
                }}
              >
                {dataP.numProduct} in stock
              </p>
              <Inner>
                <Amout>
                  <button
                    onClick={() => {
                      handleSubQuantity(dataP.id);
                    }}
                  >
                    -
                  </button>
                  <span>{quantity} </span>
                  <button
                    onClick={() => {
                      handleAddQuantity(dataP.id);
                    }}
                  >
                    +
                  </button>
                </Amout>

                <BuyProduct
                  onClick={() => {
                    handleClick(dataP.id, quantity);
                  }}
                >
                  <img src={Cart} />
                  Add to cart
                </BuyProduct>
              </Inner>
              <BoxSize>
                <h3>Size:</h3>
                <Input
                  type="select"
                  name="select"
                  style={{ width: "20%", marginLeft: "12px", fontSize: "14px" }}
                >
                  <option>S</option>
                  <option>XL</option>
                  <option>MD</option>
                  <option>LG</option>
                </Input>
              </BoxSize>
              <BoxSize>
                <h3>Color:</h3>
                <Input
                  type="select"
                  name="select"
                  style={{ width: "30%", marginLeft: "12px", fontSize: "14px" }}
                >
                  <option>White</option>
                  <option>Red</option>
                  <option>Blue</option>
                  <option>Back</option>
                </Input>
               
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
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
    additems: state.addedItems,
    total: state.total,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
    addProduct: (id, quantity) => {
      dispatch(addProduct(id, quantity));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalProduct);
