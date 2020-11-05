
import _sortBy from "lodash/sortBy";

import {
  GET_HOMEPRODUCT,
  GET_LISTPRODUCT,
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
  ADD_PRODUCT,
  SORT_PRODUCT,
} from "../actions/action";
import _find from "lodash/find";
import _filter from "lodash/filter";

const initState = {
  homeItems:[],
  items: [],
  productList: [],
  addedItems: [],
  total: 0,
  leng:0
};

const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  switch (action.type) {

    case GET_HOMEPRODUCT:
          
        return {
            ...state,
            items:action.payload

        }
        case GET_LISTPRODUCT:
          
          return {
              ...state,
              productList:action.payload
  
          }

    case ADD_TO_CART:
      let addedItem = state.items.find((item) => item.id === action.id);
      if (!addedItem)
       { addedItem = state.productList.find((item) => item.id === action.id);}
      //check if the action id exists in the addedItems
    
      let existed_item = _find(state.addedItems,function(o) {return o.id == addedItem.id})
      console.log(existed_item);
 
      if (existed_item) {
      let quan = existed_item.quantity + 1;
      addedItem.quantity = quan;
      
        console.log( addedItem.quantity);
        state.leng=state.leng+1;
        // addedItem.numProduct =  addedItem.numProduct-addedItem.quantity ;
        return {
          ...state,
   
          total: state.total + addedItem.discount_price,
        }
      } else {
        addedItem.quantity = 1;
        //calculating the total
        let newTotal = state.total + addedItem.discount_price;
        state.leng=state.leng+1;
        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal,
        };
      }

    case REMOVE_ITEM:
      let itemToRemove = _find(state.addedItems, function (o) {
        return o.id === action.id;
      });
      let new_items = state.addedItems.filter((item) => action.id !== item.id);
      state.leng=state.leng-itemToRemove.quantity;
      //calculating the total
      const newTotal =
        state.total - itemToRemove.discount_price * itemToRemove.quantity;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    case ADD_QUANTITY:
      //INSIDE CART COMPONENT
      let addedItem1 = state.addedItems.find((item) => item.id === action.id);
      addedItem1.quantity += 1;
      let newTotal1 = state.total + addedItem1.discount_price;
      state.leng=state.leng+1;
      return {
        ...state,
        total: newTotal1,
      };

    case SUB_QUANTITY:
      //INSIDE CART COMPONENT
      let addedItem2 = state.addedItems.find((item) => item.id === action.id);
  
      //if the qt == 0 then it should be removed
      if (addedItem2 && addedItem2.quantity === 1) {
        let new_items = state.addedItems.filter(
          (item) => item.id !== action.id
        );
        let newTotal = state.total - addedItem2.discount_price;
        state.leng=state.leng-1;
        return {
          ...state,
          addedItems: new_items,
          total: newTotal,
        };
      } else {
        addedItem2.quantity -= 1;
        let newTotal = state.total - addedItem2.discount_price;
        state.leng=state.leng-1;
        return {
          ...state,
          total: newTotal,
        };
      }

    case ADD_PRODUCT:
      let addItem = state.items.find((item) => item.id === action.id);

      if (!addItem)
      {
        addItem = state.productList.find((item) => item.id === action.id);
      }

      let exist_item = state.addedItems.find((item) => action.id === item.id);

      if (exist_item) {
        addItem.quantity += action.quantity;
        state.leng= state.leng+ action.quantity;
        return {
          ...state,
          total:  addItem.discount_price * addItem.quantity,
        }
      } else {
        addItem.quantity = action.quantity;
        console.log(addItem.quantity);

        state.leng= state.leng+ addItem.quantity;
    
        //calculating the total
        let newTotalP = state.total + addItem.discount_price * addItem.quantity;
      
        return {
          ...state,
          addedItems: [...state.addedItems, addItem],
          total: newTotalP,
        };
      }

    case SORT_PRODUCT:
      //    console.log(action.index)
      switch (action.index) {
        case "Alphabet":
          let listData = _sortBy(state.productList, [
            function (o) {
              return o.name;
            },
          ]);
          return {
            ...state,
            productList: listData,
          };
        case "Price":
          let listData1 = _sortBy(state.productList, [
            function (o) {
              return o.discount_price;
            },
          ]);
          return {
            ...state,
            productList: listData1,
          };
        case "Quatinty":
          let listData2 = _sortBy(state.productList, [
            function (o) {
              return o.numProduct;
            },
          ]);
          return {
            ...state,
            productList: listData2,
          };
        case "Relevance":
          let listData3 = _sortBy(state.productList, [
            function (o) {
              return o.id;
            },
          ]);
          return {
            ...state,
            productList: listData3,
          };
        default:
          return state;
      }

    default:
      return state;
  }
};

export default cartReducer;
