import React from "react";
import ProductsListItem from "./ProductListItem/ProductsListItem";
import { ProductListStyle } from "./ProductListStyle";

const ProductList = ({ products, addToCart }) => {
  return (
    <ProductListStyle>
      {products.map((product) => (
        <ProductsListItem
          product={product}
          key={product.id}
          addToCart={addToCart}
        />
      ))}
    </ProductListStyle>
  );
};

export default ProductList;
