import React from "react";
import colors from "../../../styles/colors";
import { ProductListItemStyled } from "./ProductListItemStyled";

const ProductsListItem = ({ product }) => {
  const { name, description, price, image, isSale } = product;
  return (
    <ProductListItemStyled colors={colors}>
      <div className="phoneListItemWrapper">
        <h3 className="productListItemTitle">{name}</h3>
        <img src={image} alt={name} className="productListItemImg" />
        <p className="productListItemSale">
          <span className="productListItemName">Sale: </span>{" "}
          {isSale ? "Действует акционная цена" : "В акции не участвует"}
        </p>
        <p className="productListItemDescription">
          <span className="productListItemName">Description: </span>
          {description}
        </p>
        {/* <ul>
          {product.colors.map((color) => (
            <li key={color}>{color}</li>
          ))}
        </ul> */}
        <p className="productListItemPrice">
          Price: <span className="productListItemName">{price}</span>
        </p>
        <div className="productListItemButtonGroup">
          <button type="button" className="addToCartBtn">
            Add to Cart
          </button>
          <button type="button" className="detailsBtn">
            Details
          </button>
        </div>
      </div>
    </ProductListItemStyled>
  );
};

export default ProductsListItem;
