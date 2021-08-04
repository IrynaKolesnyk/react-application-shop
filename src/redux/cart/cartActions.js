const ADD_TO_CART = "addToCart";
const REMOVE_FROM_CART_BY_ID = "removeFromCartByID";
const CREATE_ORDER = "createOrder";
const SET_LOADER = "setLoader";
const SET_ERROR = "setError";
const RESET_ERROR = "resetError";

const addToCart = (product) => ({ type: ADD_TO_CART, payload: product });
const removeFromCartByID = (id) => ({
  type: REMOVE_FROM_CART_BY_ID,
  payload: id,
});
const createOrder = () => ({ type: CREATE_ORDER });
const setLoader = () => ({ type: SET_LOADER });
const setError = (message) => ({ type: SET_ERROR, payload: message });
const resetError = () => ({ type: RESET_ERROR });

export {
  ADD_TO_CART,
  REMOVE_FROM_CART_BY_ID,
  CREATE_ORDER,
  SET_LOADER,
  SET_ERROR,
  RESET_ERROR,
};

export {
  addToCart,
  removeFromCartByID,
  createOrder,
  setLoader,
  setError,
  resetError,
};
