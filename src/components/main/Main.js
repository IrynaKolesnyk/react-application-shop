import React, { Component } from "react";
import { getAllAdvByCategory } from "../../services/Api";
import AdvForm from "../admin/AdvForm";
import CartList from "../cartList/CartList";

import ProductList from "../productList/ProductList";
import Section from "../Section";
import { MainStyled } from "./MainStyled";

const getDataByCategory = async (category) => {
  const response = await getAllAdvByCategory(category);
  if (response) {
    return Object.keys(response.data).map((key) => ({
      id: key,
      ...response.data[key],
    }));
  }
  return [];
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
        <Section title="Администрирование">
          <AdvForm addNewProduct={this.addNewProduct} />
        </Section>
        <Section title="Корзина">
          <CartList
            cart={this.state.cart}
            removeFromCart={this.removeFromCart}
            removeAllFromCart={this.removeAllFromCart}
          />
        </Section>
        <Section title="Мобильные телефоны">
          <ProductList
            products={this.state.products.phones}
            addToCart={this.addToCart}
          />
        </Section>
        <Section title="Ноутбуки">
          <ProductList
            products={this.state.products.laptops}
            addToCart={this.addToCart}
          />
        </Section>
      </MainStyled>
    );
  }
}

export default Main;
