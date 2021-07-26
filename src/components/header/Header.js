import React, { Component } from "react";
import colors from "../../styles/colors";
import HeaderList from "./headerList/HeaderList";
import { HeaderStyled } from "./HeaderStyled";
import sprite from "../../icons/header/header.svg";
import Modal from "../modal/Modal";

class Header extends Component {
  state = {
    width: window.innerWidth,
    breakPoint: 768,
    isModalOpen: false,
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResizeWindow);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResizeWindow);
  }

  handleResizeWindow = () => this.setState({ width: window.innerWidth });

  toggleModal = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  render() {
    const { width, breakPoint, isModalOpen } = this.state;
    return (
      <>
        <HeaderStyled colors={colors}>
          <h2 className="headerLogo">Logo</h2>
          {width > breakPoint ? (
            <nav>
              <HeaderList />
            </nav>
          ) : (
            <svg className="burgerMenu" onClick={this.toggleModal}>
              <use href={sprite + "#icon-menu_24px"}></use>
            </svg>
          )}
        </HeaderStyled>
        {isModalOpen && (
          <Modal onClick={this.toggleModal}>
            <HeaderList />
          </Modal>
        )}
      </>
    );
  }
}

export default Header;
