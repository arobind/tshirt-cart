import React from "react";
import { createPortal } from "react-dom";
import "./CartOverlay.css";

const overlayRoot = document.getElementById("overlay");
export default function CartOverlay({
  buttonClicked,
  cartItemsList,
  toggleCart
}) {
  return createPortal(
    <div className="cart-overlay-blur">
      <div className="cart-overlay">
        <div>
          <button
            onClick={toggleCart}
            id="overlayClose"
            className="overly-close-button"
          >
            <i class="bi bi-x-circle"></i>
          </button>
          {cartItemsList.length > 0 ? (
            <>
              <h2 className="cart-header">Your Cart</h2>
              <div className="cart-div">
                {cartItemsList.map((item) => {
                  return (
                    <div className="cart-item" key={item.id}>
                      <img
                        src="https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                        className="cart-img"
                      />
                      <div>{item.desc}</div>
                      <div style={{ marginLeft: "10px" }}>
                        <div>{item.price}$</div>
                        <div> Qty : {item.quantity}</div>
                      </div>
                    </div>
                  );
                })}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "700",
                    fontSize: "15px"
                  }}
                >
                  <div>Subtotal</div>
                  <div>
                    {cartItemsList
                      .reduce(
                        (acc, ele) => (acc += +(ele.price * ele.quantity)),
                        0
                      )
                      .toFixed(2)}
                    $
                  </div>
                </div>

                <button
                  className="btn btn-dark checkout-button"
                  onClick={() => console.log("Checkout Successful")}
                >
                  Checkout
                </button>
              </div>
            </>
          ) : (
            <h2 className="cart-header">Cart is Empty</h2>
          )}
        </div>
      </div>
    </div>,
    document.getElementById("overlay")
  );
  // return(
  //   <></>
  // )
}
