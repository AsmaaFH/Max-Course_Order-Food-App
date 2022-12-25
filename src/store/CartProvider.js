import React from 'react';
import CartContext from './cart-context';
const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};

  const removeItemFronCartHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFronCartHandler,
  };
  return <CartContext.provider value={cartContext}>{props.children}</CartContext.provider>;
};

export default CartProvider;
