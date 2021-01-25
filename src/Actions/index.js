import { SALE_DATA } from "./types";
import { ORDER_DATA } from "./types";

export const saleData = (saleData) => (dispatch) => {
  return dispatch({ type: SALE_DATA, payload: saleData });
};

export const orderData = (orderdata) => (dispatch) => {
  return dispatch({ type: ORDER_DATA, payload: orderdata });
};
