import React, { useState, useEffect } from "react";
import Details from "./Details";
import { connect } from "react-redux";

import _find from "lodash/find";
const Shop = ({
  match: {
    params: { id },
  },
  items,
  productList,
  addedItems,
}) => {
  console.log(id);
  let lstItem = _find(items, function (o) {
    return o.id == id;
  });
  if (lstItem) {
    let existed_item = _find(addedItems, function (o) {
      return o.id == id;
    });
    if (existed_item) {
      lstItem.quantity = existed_item.quantity;
    } else {
      lstItem.quantity = 1;
    }
  } 
  else {
    lstItem = _find(productList, function (o) {
      return o.id == id;
    });
    let existed_item = _find(addedItems, function (o) {
      return o.id == id;
    });
    if (existed_item) {
      lstItem.quantity = existed_item.quantity;
    } else {
      lstItem.quantity = 1;
    }
  }
  console.log(lstItem);
  return (
    <>
      <Details data={lstItem} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
    productList: state.productList,
    addedItems: state.addedItems,
  };
};

export default connect(mapStateToProps, null)(Shop);
