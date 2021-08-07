import React, { useState } from "react";
import "./Cart.css";
import tshirtDummyList from "./assets/DummyList";
import CartOverlay from "./CartOverlay";

export default function Cart({ cartList }) {
  const [buttonClicked, setButtonClicked] = useState(false);
  let cartItemsList = [];

  for (let ele of tshirtDummyList) {
    if (cartList.filter((id) => ele.id == id).length > 0) {
      if (cartList.filter((id) => ele.id == id).length == 1) {
        ele.quantity = 1;
        cartItemsList.push(ele);
      } else {
        ele.quantity = cartList.filter((id) => ele.id == id).length;
        cartItemsList.push(ele);
      }
    }
  }

  function toggleCart() {
    setButtonClicked((prev) => !prev);
  }

  return (
    <span class="cart-button-container">
      <button className="btn btn-dark cart-button" onClick={toggleCart}>
        <i className="bi bi-cart"></i>
        <span className="cart-button-qty">
          {cartItemsList.reduce((acc, ele) => (acc += ele.quantity), 0)}
        </span>
      </button>

      {buttonClicked && (
        <CartOverlay
          toggleCart={toggleCart}
          buttonClicked={buttonClicked}
          cartItemsList={cartItemsList}
        />
      )}
    </span>
  );
}
