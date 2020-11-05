import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import { Container } from "reactstrap";
import styled from "styled-components";
import axios from "axios";
import { connect } from "react-redux";
import _find from "lodash/find";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from "../../Redux/actions/action";
import { Link } from "react-router-dom";
import Bin from "../../Component/Image/Icon/bin.png";
import { Button } from "reactstrap";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  border: 2px solid #bc9051;
  background-color: #bc9051;
  color: #fff;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 28px;
  font-variant: small-caps;
  h4 {
    margin: 15px;
  }
  input {
    outline: none;
    height: 35px;
    width: 405px;
  }
`;
const StyledContainer = styled(Container)`
  margin-top: 50px;
  margin-bottom: 100px;
`;
const StyledTable = styled(Table)`
  td,
  th {
    text-align: center;
    font-weight: 500;
    vertical-align: middle;
  }
`;
const StyledHeader = styled.header`
  background-color: rgba(196, 196, 196, 0.65);
  text-align: center;
  height: 200px;
  margin-bottom: 50px;
  position: relative;
  h3 {
    padding: 50px 10px 0px;
  }
  span {
    color: #bc9051;
  }
`;
const Sum = styled.div`
  width: 350px;
  text-align: end;
  margin-top: 15px;
  background-color: #f4f4f6;
  margin-left: 340px;
  text-align: left;
  h6 {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    text-transform: uppercase;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    font-variant: small-caps;
    color: #000000;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    &:nth-of-type(4) {
      border-bottom: none;
    }
    p {
      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 28px;
      font-variant: small-caps;
      color: #000000;
      margin-bottom: 0;
    }
  }
  button {
    color: #fff;
    background-color: #bc9051;
    border: none;
    outline: none;
    width: 350px;
  }
`;

const StyledButton = styled(Button)`
  color: #bc9051;
  background-color: #fff;
  text-transform: uppercase;
  font-size: 18px;
  padding: 15px 0;
  margin-bottom: 25px;
  border: 1px;
  height: auto;
  line-height: 1;
  &:focus,
  &:active,
  &:hover {
    outline: none;
    box-shadow: none !important;
    border: none;
  }
`;
const AddProduct = styled.div`
  border: 1px solid #333;
  button {
    border: none;
    background-color: #fff;
    outline: none;
  }
`;
const Foottable = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-top: none;
  margin-top: -16px;
  display: flex;
  justify-content: space-around;
  input {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 10px;
    margin-bottom: 10px;
    height: 40px;
    width: 50%;
  }
  button {
    background-color: #bc9051;
    color: #fff;
    outline: none;
    border: none;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 40px;
    width: 150px;
  }
`;
const Wrap = styled.div`
  width: 100px;
  display: -webkit-inline-box;
  border: none;
  justify-content: center;
  background-color: #f4f4f6;
  img {
    width: 100%;
    object-fit: contain;
  }
`;
function ShopCart({ addedItems, total, removeItem, addQuantity, subtractQuantity }) {
  const [data, setData] = useState([]);
  let [listId, setListId] = useState([]);
  let listQuantity = [];
  const handleRemove = (id) => {
    removeItem(id);
  };
  const handleSubQuantity = (id) => {
    subtractQuantity(id);
  };
  const handleAddQuantity = (id) => {
    addQuantity(id);
  };
 
  useEffect(() => {
    setData(addedItems);
  }, [addedItems]);


for (let i = 0; i < addedItems.length; i++) {
  
  let list = addedItems[i].id;
  let quan = addedItems[i].quantity;
  listId=[...listId,list];
  listQuantity=[...listQuantity,quan];
}

const handleCheckOut = () =>{
  let index =0;
let checkOut = [];
let check;
for (let i = 0; i < addedItems.length; i++) {
  let listid = listId[i];
  let product = _find(addedItems,function(o){return o.id = listid})
  let quanid = product.numProduct - listQuantity[i];
   check ={
    listid: listid,
    quanid:quanid
  }
  checkOut = [...checkOut,check]
}
console.log(check);
axios
.post("api/checkout", check)
.then(function (response) {
  console.log(response.status);
  if (response.statusText === "OK") {
    alert("Check Out SUCCESS");

  } else if (response.data.status === "fail") {
    alert("CheckOut failed .");
  }
})
.catch(function (response) {
  console.log(response);
});

}
console.log(addedItems);

  return (
    <StyledContainer>
      <StyledHeader>
        <h3>SHOP</h3>
        <p>
          Home/Shop/<span>Cart</span>
        </p>
      </StyledHeader>
      <StyledDiv>
        <h4>PRODUCT</h4>
        <h4>QUANTITY</h4>
      </StyledDiv>
      <StyledTable bordered>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((item) =>
        
            (   
              <tr key={item.id}>
                <td>
                  <Wrap>
                    <img src={item.img} />
                  </Wrap>{" "}
                </td>
                <th>{item.name}</th>
                <th>${item.discount_price}.00</th>
                <th>
                  <AddProduct>
                    <button
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        handleSubQuantity(item.id);
                      }}
                    >
                      -
                    </button>
                    <span> {item.quantity}</span>
                    <button
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        handleAddQuantity(item.id);
                      }}
                    >
                      +
                    </button>
                  </AddProduct>
                </th>
                <td>
                  <img
                    src={Bin}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleRemove(item.id);
                    }}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </StyledTable>
      <Foottable>
        <input placeholder="Enter Your Cuppon Code" />
        <button>APPLY COUPON</button>
        <Link to="/shop">  <button>UPDATE CART</button> </Link>
      </Foottable>
      <div style={{ textAlign: "-webkit-right" }}>
        <Sum>
          <h6>Cart totals</h6>
          <h6>
            Sub total <p>${total}</p>
          </h6>
          <h6>
            Shipping <p>$7</p>{" "}
          </h6>
          <h6>
            Total :{" "}
            <p style={{ color: "#BC9051", fontWeight: "bold" }}>${total + 7}</p>
          </h6>

         <Link to="/cart"> <button onClick = {handleCheckOut} >PROCEED TO CHECKOUT</button> </Link>
        </Sum>
      </div>
    </StyledContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopCart);
