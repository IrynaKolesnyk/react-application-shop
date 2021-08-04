const ADD_PRODUCT = "addProducts";
const DELETE_PRODUCT = "deleteProduct";
const GET_ALL_PRODUCTS = "getAllProducts";
const GET_PHONES = "getPhones";
const GET_LAPTOPS = "getLaptops";

const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

const deleteProduct = (category, id) => ({
  type: DELETE_PRODUCT,
  payload: {
    category,
    id,
  },
});

const getLaptops = (laptops) => ({
  type: GET_LAPTOPS,
  payload: laptops,
});
const getPhones = (phones) => ({
  type: GET_PHONES,
  payload: phones,
});

const getAllProducts = (products) => ({
  type: GET_ALL_PRODUCTS,
  payload: products,
});

export { getAllProducts, getPhones, getLaptops, deleteProduct, addProduct };

export {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_PHONES,
  GET_LAPTOPS,
};
