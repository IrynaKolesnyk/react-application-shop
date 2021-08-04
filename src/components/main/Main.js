import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import mainRoutes from "../../routes/mainRoutes";
import { getAllAdvByCategory } from "../../services/Api";
import { MainStyled } from "./MainStyled";

const getDataByCategory = async (category) => {
  const response = await getAllAdvByCategory(category);
  return response;
  // if (response) {
  //   return Object.keys(response.data).map((key) => ({
  //     id: key,
  //     ...response.data[key],
  //   }));
  // }
  // return [];
};

class Main extends Component {
  state = {
    cart: [],
    products: { phones: [], laptops: [] },
  };

  async componentDidMount() {
    const phones = await getDataByCategory("phones");
    const laptops = await getDataByCategory("laptops");
    this.setState({ products: { phones, laptops } });
  }

  addNewProduct = (product) => {
    this.setState((prevState) => ({
      products: {
        ...prevState.products,
        [product.category]: [...prevState.products[product.category], product],
      },
    }));
  };

  addToCart = (product) => {
    this.setState((prev) => ({
      cart: [...prev.cart, product],
    }));
  };

  removeFromCart = (id) => {
    this.setState((prev) => ({
      cart: prev.cart.filter((cartItem) => cartItem.id !== id),
    }));
  };

  removeAllFromCart = () => {
    this.setState({
      cart: [],
    });
  };

  render() {
    return (
      <MainStyled>
        <Switch>
          {mainRoutes.map((route) => (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
              key={route.path}
            />
          ))}
        </Switch>
      </MainStyled>
    );
  }
}

export default Main;
