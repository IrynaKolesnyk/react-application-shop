import React, { Component } from "react";
import data from "../../data";
import AdvForm from "../admin/AdvForm";
import CartList from "../cartList/CartList";

import ProductList from "../productList/ProductList";
import Section from "../Section";
import { MainStyled } from "./MainStyled";

class Main extends Component {
  state = {
    cart: [],
    ...data,
  };

  addNewProduct = (product) => {
    this.setState((prevState) => ({
      [product.category]: [...prevState[product.category], product],
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
            products={this.state.phones}
            addToCart={this.addToCart}
          />
        </Section>
        <Section title="Ноутбуки">
          <ProductList
            products={this.state.laptops}
            addToCart={this.addToCart}
          />
        </Section>
      </MainStyled>
    );
  }
}

export default Main;
