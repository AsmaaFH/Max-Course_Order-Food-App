import React from 'react';
import classes from './Cart.module.css';

const Cart = () => {
  const cartItems = (
    <ul className={classes.cart['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.8 }].map((item) => {
        <li>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.5</span>
      </div>
      <div className={classes.action}>
        <button className={classes['button--alt}']}>Close</button>
        <button className={classes.btn}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
