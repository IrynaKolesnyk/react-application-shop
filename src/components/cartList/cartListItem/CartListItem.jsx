import React from "react";

const CartListItem = ({ name, id, price, removeFromCart }) => {
  const removeCart = () => {
    removeFromCart(id);
  };
  return (
    <li>
      <h3>{name}</h3>
      <p>{price}</p>
      <button type="button" onClick={removeCart}>
        Delete
      </button>
    </li>
  );
};

export default CartListItem;
