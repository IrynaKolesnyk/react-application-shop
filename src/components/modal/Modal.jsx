import React, { Component } from "react";
import ModalStyled from "./ModalStyled";
class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener("keydown", this.handleEsc);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEsc);
    const body = document.querySelector("body");
    body.style.overflow = "auto";
  }

  handleEsc = (event) => event.code === "Escape" && this.props.onClick();

  handleClick = () => this.props.onClick();

  handleBackdropClick = (event) => {
    if (event.target !== event.currentTarget) return false;
    this.props.onClick();
  };
  render() {
    return (
      <ModalStyled onClick={this.handleBackdropClick}>
        <div className="Modal">{this.props.children}</div>
      </ModalStyled>
    );
  }
}

export default Modal;
