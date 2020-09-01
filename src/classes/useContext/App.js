import React from 'react';
import UserContext from './UserContext';
import Product from './Product';
import { GlobalStorage } from './GlobalContext';

function App() {
  return (
    <GlobalStorage>
      <Product />
    </GlobalStorage>
  );
}

export default App;
