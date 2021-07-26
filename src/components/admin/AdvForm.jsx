import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
const categories = ["phones", "laptops"];
const initialState = {
  name: "",
  image: "",
  description: "",
  price: 0,
  isSale: false,
  category: categories[0],
};

class AdvForm extends Component {
  state = {
    ...initialState,
  };

  onHandelChange = (event) => {
    const { name, value, checked, type } = event.target;
    if (type === "checkbox") {
      this.setState({ [name]: checked });
      return;
    }
    this.setState({ [name]: value });
  };

  onHandelSubmit = (event) => {
    event.preventDefault();
    this.props.addNewProduct({ ...this.state, id: uuidv4() });
    this.setState({ ...initialState });
    console.log(this.state);
  };

  render() {
    const { name, image, description, price, isSale, category } = this.state;
    return (
      <form onSubmit={this.onHandelSubmit}>
        <label className="advFormLabel">
          Название продукта:
          <input
            type="text"
            name="name"
            value={name}
            className="advFormInput"
            onChange={this.onHandelChange}
          />
        </label>
        <label className="advFormLabel">
          Изображение:
          <input
            type="text"
            name="image"
            value={image}
            className="advFormInput"
            onChange={this.onHandelChange}
          />
        </label>
        <label className="advFormLabel">
          Описание:
          <input
            type="text"
            name="description"
            value={description}
            className="advFormInput"
            onChange={this.onHandelChange}
          />
        </label>
        <label className="advFormLabel">
          Цена:
          <input
            type="number"
            name="price"
            value={price}
            className="advFormInput"
            onChange={this.onHandelChange}
          />
        </label>
        <label className="advFormLabel">
          Скидка:
          <input
            type="checkbox"
            name="isSale"
            checked={isSale}
            className="advFormInput"
            onChange={this.onHandelChange}
          />
        </label>
        <label className="advFormLabel">
          Категория:
          <select
            name="category"
            value={category}
            onChange={this.onHandelChange}
          >
            {categories.map((category) => (
              <option
                value={category}
                key={category}
                onChange={this.onHandelChange}
              >
                {category}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Добавить продукт</button>
      </form>
    );
  }
}

export default AdvForm;
