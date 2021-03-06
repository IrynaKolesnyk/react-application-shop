import React from "react";
import { connect } from "react-redux";
import CartListItem from "./cartListItem/CartListItem";

const CartList = ({ cart, removeFromCart, removeAllFromCart }) => {
  return (
    <>
      {cart.length ? (
        <>
          <ul className="cartList">
            {cart.map((product) => (
              <CartListItem
                {...product}
                key={product.id}
                removeFromCart={removeFromCart}
              />
            ))}
          </ul>
          <button type="button" onClick={removeAllFromCart}>
            Оформить заказ
          </button>
        </>
      ) : (
        <p>Добавьте товар</p>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  cart: state.cart.items,
});
export default connect()(CartList);
