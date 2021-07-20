import React from "react";
import colors from "../../../styles/colors";
import { PhoneListItemStyled } from "./PhoneListItemStyled";

const PhoneListItem = ({ phone }) => {
  return (
    <PhoneListItemStyled colors={colors}>
      <div className="phoneListItemWrapper">
        <h3 className="phoneListItemTitle">{phone.name}</h3>
        <img src={phone.image} alt={phone.name} className="phoneListItemImg" />
        <p className="phoneListItemSale">
          <span className="phoneListItemName">Sale: </span>{" "}
          {phone.isSale ? "Действует акционная цена" : "В акции не участвует"}
        </p>
        <p className="phoneListItemDescription">
          <span className="phoneListItemName">Description: </span>
          {phone.description}
        </p>
        <ul>
          {phone.colors.map((color) => (
            <li key={color}>{color}</li>
          ))}
        </ul>
        <p className="phoneListItemPrice">
          Price: <span className="phoneListItemName">{phone.price}</span>
        </p>
        <div className="phoneListItemButtonGroup">
          <button type="button" className="addToCartBtn">
            Add to Cart
          </button>
          <button type="button" className="detailsBtn">
            Details
          </button>
        </div>
      </div>
    </PhoneListItemStyled>
  );
};

export default PhoneListItem;
