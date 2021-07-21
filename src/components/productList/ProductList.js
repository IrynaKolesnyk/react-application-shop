import React from "react";
import ProductsListItem from "./ProductListItem/ProductsListItem";
import { ProductListStyle } from "./ProductListStyle";

const ProductList = ({ products }) => {
  return (
    <ProductListStyle>
      {products.map((product) => (
        <ProductsListItem product={product} key={product.id} />
      ))}
    </ProductListStyle>
  );
};

export default ProductList;
