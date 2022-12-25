import React from 'react';
import Hearder from './components/Layout/Hearder';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <>
      <Hearder></Hearder>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
