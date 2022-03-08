import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://m.media-amazon.com/images/I/41GwbLpZtQL._SR1242,150_.jpg"
          alt=""
          className="checkout__ad"
        />

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/*Basket item */}
          {/*Basket item */}
          {/*Basket item */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
