import React, { Component } from "react";
import { connect } from "react-redux";
import { getLaptops, getPhones } from "../../redux/products/productsActions";
import { getAllAdvByCategory } from "../../services/Api";
import ProductsListItem from "./ProductListItem/ProductsListItem";
import { ProductListStyle } from "./ProductListStyle";

class ProductList extends Component {
  async componentDidMount() {
    const res = await getAllAdvByCategory(this.props.category);
    console.log("~ res", res);

    this.props.category === "laptops" && this.props.getLaptops(res);
    this.props.category === "phones" && this.props.getPhones(res);
  }
  render() {
    const { products, addToCart } = this.props;
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
  }
}

const mapStateToProps = (state, props) => ({
  category: props.location.state.category,
  products: state.products.items[props.location.state.category],
});

export default connect(mapStateToProps, {
  getLaptops: getLaptops,
  getPhones: getPhones,
})(ProductList);
