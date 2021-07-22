import React, { Component } from "react";
import data from "../../data";
import CartList from "../cartList/CartList";

import ProductList from "../productList/ProductList";
import Section from "../Section";
import { MainStyled } from "./MainStyled";

class Main extends Component {
  state = {
    cart: [],
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
        <Section title="Корзина">
          <CartList
            cart={this.state.cart}
            removeFromCart={this.removeFromCart}
            removeAllFromCart={this.removeAllFromCart}
          />
        </Section>
        <Section title="Мобильные телефоны">
          <ProductList products={data.phones} addToCart={this.addToCart} />
        </Section>
        <Section title="Ноутбуки">
          <ProductList products={data.laptops} addToCart={this.addToCart} />
        </Section>
      </MainStyled>
    );
  }
}

export default Main;
