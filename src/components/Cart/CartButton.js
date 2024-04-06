// CartButton.js
import React from "react";
import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice"; // Assuming you have a separate slice for UI actions
// Correct import for cart slice

const CartButton = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity); // Access state.cart.totalQuantity

  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <div>
      <button className={classes.button} onClick={toggleCartHandler}>
        <span>My Cart</span>
        <span className={classes.badge}>{cartQuantity}</span>
      </button>

      <div className={classes.cart}>{/* Content of the cart */}</div>
    </div>
  );
};

export default CartButton;
