import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Hearder from './components/Layout/Hearder';
import Meals from './components/Meals/Meals';
import CartContext from './store/cart-context';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartContext>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Hearder onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContext>
  );
}

export default App;
