import axios from 'axios';
export const SORT_PRODUCT = "SORT_PRODUCT";
//add cart action
export const sortProduct = (index) => {
  return {
    type: SORT_PRODUCT,
    index,
  };
};
export const ADD_TO_CART = "ADD_TO_CART";
//add cart action
export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id,
  };
};
export const REMOVE_ITEM = "REMOVE_ITEM";
//remove item action
export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id,
  };
};
export const SUB_QUANTITY = "SUB_QUANTITY";
//subtract qt action
export const subtractQuantity = (id) => {
  return {
    type: SUB_QUANTITY,
    id,
  };
};
export const ADD_QUANTITY = "ADD_QUANTITY";
//add qt action
export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id,
  };
};

export const ADD_PRODUCT = "ADD_PRODUCT";
//add qt action
export const addProduct = (id, quantity) => {
  return {
    type: ADD_PRODUCT,
    id,
    quantity,
  };
};

export const GET_HOMEPRODUCT = "GET_HOMEPRODUCT";
export const ERROR = 'ERROR'
export const getHomeProduct = () => async dispatch => {
    
  try{
      const res =await axios.get(`/api/gethomeProduct`)
      dispatch( {
          type: GET_HOMEPRODUCT,
          payload: res.data
      })
  }
  catch(e){
      dispatch( {
          type: ERROR,
          payload: console.log(e),
      })
  }

}

export const GET_LISTPRODUCT = "GET_LISTPRODUCT";
export const getListProduct = () => async dispatch => {
    
  try{
      const res =await axios.get(`/api/shop/getProduct`)
      dispatch( {
          type: GET_LISTPRODUCT,
          payload: res.data
      })
  }
  catch(e){
      dispatch( {
          type: ERROR,
          payload: console.log(e),
      })
  }

}