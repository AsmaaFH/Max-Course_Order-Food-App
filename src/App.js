import React from 'react';
import Cart from './components/Cart/Cart';
import Hearder from './components/Layout/Hearder';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <>
      <Cart />
      <Hearder />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
