import React, { useState, useEffect } from "react";
import {
  Button,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

import StarRatings from "react-star-ratings";
import { addToCart, getHomeProduct } from "../../../../Redux/actions/action";
import Eye from "../../../../Component/Image/Icon/eye.png";
import Bag from "../../../../Component/Image/Icon/tuido-fixed.png";
import Heart from "../../../../Component/Image/Icon/heart.png";
import Share from "../../../../Component/Image/Icon/ab1.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ModalProduct from "../../../ModalProduct";
import _find from "lodash/find";
import {Icon,CustomCol} from "./style"
import axios from "axios";


function TopSlide({ items, addToCart,getHomeProduct }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [reload, setReload] = useState(false);
  const handleClick = (id) => {
    addToCart(id);
  };
  const [modal, setModal] = useState(false);
  const [dataProduct, setDataProduct] = useState([]);


  const toggle = (id) => {

    setModal(!modal);
    if(modal == "false"){
      setDataProduct([]);
    }
    setDataProduct(
      _find(items, function (o) {
        return o.id == id;
      })
    );
  };
  const handleClose = (e) => {
    setDataProduct([]);
    setModal(false);
  };


  useEffect( () => {
     console.log(reload);
if(reload == false){
getHomeProduct();
setReload(true);
}

  }, []);
 
  // useEffect(() => {
  //   const fetchData = async () => {
  //       const result = await axios(`/api/home` ,
  //       );
  //       setProductHome(result.data);
  //       // getHomeProduct();
  //     };
  //     fetchData();
  // }, []);
  const closeBtn = (
    <button className="close" onClick={handleClose}>
      &times;
    </button>
  );
  const data = items.map((item) => {
    const id = item.id;
    return (
      <CustomCol md="3" key={item.id}>
        <div
          style={{
            backgroundColor: "#F4F4F6",
            marginBottom: "40px",
            marginTop: "70px",
            position: "relative",
          }}
        >
          <Link to={`/shop/${id}`}>
            <img
              src={item.img}
              onMouseEnter={(e) =>
                setActiveIndex(activeIndex === item.id ? null : item.id)
              }
            />
          </Link>
          <Icon
            onMouseEnter={(e) => setActiveIndex(item.id)}
            style={{ display: activeIndex === item.id ? "grid" : "none" }}
          >
            <Button 
              onClick={() => {
                toggle(item.id);
              }}
              style={{ backgroundImage: `url(${Eye})` }}
            ></Button>

            <Button
              onClick={() => {
                handleClick(item.id);
              }}
              style={{
                backgroundImage: `url(${Bag})`,
                backgroundSize: "contain",
              }}
            ></Button>
            <Button style={{ backgroundImage: `url(${Heart})` }}></Button>
            <Button
              style={{
                backgroundImage: `url(${Share})`,
                backgroundRepeat: "repeat",
                backgroundSize: "cover",
              }}
            ></Button>
          </Icon>
        </div>
        <StarRatings
          rating={item.rate}
          starDimension="30px"
          starSpacing="0"
          starRatedColor="rgb(255, 216, 49)"
          starEmptyColor="rgb(125, 107, 107)"
        />
        <h3>{item.name} </h3>
        <p>
          <span>${item.price}.00</span> ${item.discount_price}.00{" "}
        </p>
      </CustomCol>
    );
  });
  return (
    <Row>
      {data}
      <Modal backdrop="static" keyboard={false} size="lg" isOpen={modal}  toggle={toggle} >
        <ModalHeader close={closeBtn}></ModalHeader>
        <ModalBody>
          <ModalProduct dataP={dataProduct} />
        </ModalBody>
      </Modal>
    </Row>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    getHomeProduct: () => dispatch(getHomeProduct()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopSlide);
