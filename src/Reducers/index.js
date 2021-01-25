import { combineReducers } from "redux";

const listOfProductsReducers = [
  { product: "I phone", desc: "none" },
  { product: "Oppo", desc: "noen" },
  { product: "Vivo", desc: "noen" },
  { product: "Real Me", desc: "noen" },
  { product: "Motorola", desc: "noen" },
  { product: "Web Series Channels", desc: "noen" },
  { product: "Mobile Recharge", desc: "noen" },
  { product: "One Plus", desc: "noen" },
];

const listOfVendorsReducers = [
  { name: "Amazon", desc: "none" },
  { name: "Flipkart", desc: "noen" },
  { name: "Phone for Sale", desc: "noen" },
  { name: "Get I phone", desc: "noen" },
  { name: "Get One Plus", desc: "noen" },
  { name: "Get All Phone", desc: "noen" },
  { name: "Get smartphone", desc: "noen" },
  { name: "Best Deals On All", desc: "noen" },
];

const initState = {
  saleData: [],
  purchaseData: [],
  productData: listOfProductsReducers,
  vendorData: listOfVendorsReducers,
};

const getDataReducer = (state = initState, action) => {
  if (action.type === "NEW_DATA") {
    return { ...state, saleData: [...state.saleData, action.newSaleItem] };
  } else if (action.type === "VENDOR_PURCHASE") {
    return {
      ...state,
      purchaseData: [...state.purchaseData, action.newPurchaseData],
    };
  } else return state;
};

export default combineReducers({
  getData: getDataReducer,
  productData: listOfProductsReducers,
  vendorData: listOfVendorsReducers,
});
