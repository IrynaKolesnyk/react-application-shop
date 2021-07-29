import ProductList from "../components/productList/ProductList";

export const productsRoutes = [
  {
    name: "Мобильные телефоны",
    path: "/phones",
    component: ProductList,
    exact: true,
  },
  {
    name: "Ноутбуки",
    path: "/laptops",
    component: ProductList,
    exact: true,
  },
];
