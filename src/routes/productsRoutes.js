import ProductList from "../components/productList/ProductList";

export const productsRoutes = [
  {
    name: "Мобильные телефоны",
    path: "/phones",
    component: ProductList,
    category: "phones",
    exact: true,
  },
  {
    name: "Ноутбуки",
    path: "/laptops",
    component: ProductList,
    category: "laptops",
    exact: true,
  },
];
