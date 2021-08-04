import { NavLink, Route, Switch } from "react-router-dom";
import { productsRoutes } from "../routes/productsRoutes";
import { ProductPageContainer } from "./ProductPageStyled";

const ProductsPage = ({ match }) => {
  return (
    <ProductPageContainer>
      <nav>
        <ul className="navigationList">
          {productsRoutes.map((route) => (
            <li className="navigationListItem" key={route.path}>
              <NavLink
                className="navigationListItemAnchor"
                activeClassName="activeNavigationListItemAnchor"
                to={{
                  pathname: match.url + route.path,
                  state: { category: route.category },
                }}
                exact={route.exact}
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Switch>
        {productsRoutes.map((route) => (
          <Route
            path={match.path + route.path}
            exact={route.exact}
            component={route.component}
            key={route.path}
          />
        ))}
      </Switch>
    </ProductPageContainer>
  );
};

export default ProductsPage;
