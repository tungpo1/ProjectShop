import React, { useState, useEffect } from "react";
import StarRatings from "react-star-ratings";
import Eyes from "../../../Component/Image/Icon/footer-eye.png";
import Tim from "../../../Component/Image/Icon/footer-tim.png";
import Share from "../../../Component/Image/Icon/footer-share.png";
import Tui from "../../../Component/Image/Icon/footer-tui.png";
import { connect } from "react-redux";
import { Container, Row, Col, Modal, ModalHeader, ModalBody } from "reactstrap";
import { addToCart,getListProduct } from "../../../Redux/actions/action";
import { ReRated, StyledNavLink } from "./styled";
import _find from "lodash/find";
import ModalProduct from "../../ModalProduct";
function ListProduct({ addToCart, productList, dataList, getListProduct }) {
  const handleClick = (id) => {
    addToCart(id);
  };
  const [modal, setModal] = useState(false);
  const [dataProduct, setDataProduct] = useState([]);
  const toggle = (id) => {
    setModal(!modal);
    setDataProduct(
      _find(productList, function (o) {
        return o.id == id;
      })
    );
  };
  const handleClose = (e) => {
    setDataProduct([]);
    setModal(false);
  };
  useEffect( () => {
    const result = getListProduct();
    dataList = productList;
  }, []);
 console.log(dataList);
  const closeBtn = (
    <button className="close" onClick={handleClose}>
      &times;
    </button>
  );

  const data = dataList.map((item) => {
    const id = item.id;

    return (
      <ReRated md="3">
        <div key={item.id}>
          <StyledNavLink to={`/shop/${id}`}>
            <div>
              <img src={item.img} className="w-100" />
            </div>
          </StyledNavLink>
          <StarRatings
            rating={item.rate}
            starDimension="30px"
            starSpacing="0"
            starRatedColor="#ffcf01"
            starEmptyColor="rgb(125, 107, 107)"
          />
          <h4>{item.name}</h4>
          <div>
            <h6>${item.price}.00</h6>
            <span>${item.discount_price}.00</span>
          </div>
          <div className="hover">
            <a style={{ cursor: "pointer" }}>
              {" "}
              <img
                src={Eyes}
                onClick={() => {
                  toggle(item.id);
                }}
              />
            </a>
            <a style={{ cursor: "pointer" }}>
              {" "}
              <img
                src={Tui}
                onClick={() => {
                  handleClick(item.id);
                }}
              />
            </a>
            <a style={{ cursor: "pointer" }}>
              {" "}
              <img src={Tim} />
            </a>
            <a style={{ cursor: "pointer" }}>
              {" "}
              <img src={Share} />
            </a>
          </div>
        </div>
      </ReRated>
    );
  });

  return (
    <Container>
      <Row>
        {data}
        <Modal backdrop="static" keyboard={false} size="lg" isOpen={modal} toggle={toggle}>
          <ModalHeader close={closeBtn}></ModalHeader>
          <ModalBody>
            <ModalProduct dataP={dataProduct} />
          </ModalBody>
        </Modal>
      </Row>
    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    productList: state.productList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    getListProduct: () => dispatch(getListProduct())
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);
