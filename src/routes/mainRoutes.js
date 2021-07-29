import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";

const mainRoutes = [
  {
    name: { en: "Home", ua: "Головна", ru: "Главная" },
    path: "/",
    icon: "",
    component: HomePage,
    exact: true,
  },
  {
    name: { en: "Products", ua: "Продукти", ru: "Продукты" },
    path: "/products",
    icon: "",
    component: ProductsPage,
    exact: false,
  },
  {
    name: { en: "Cart", ua: "Кошик", ru: "Корзина" },
    path: "/cart",
    icon: "",
    component: CartPage,
    exact: true,
  },
  {
    name: {
      en: "Administration",
      ua: "Адмiнiстрування",
      ru: "Администрирование",
    },
    path: "/admin",
    icon: "",
    component: AdminPage,
    exact: true,
  },
  {
    name: { en: "Registration", ua: "Реєстрація", ru: "Регистрация" },
    path: "/register",
    icon: "",
    component: AuthPage,
    exact: true,
  },
  {
    name: { en: "Login", ua: "Увійти", ru: "Войти" },
    path: "/login",
    icon: "",
    component: AuthPage,
    exact: true,
  },
];

export default mainRoutes;
