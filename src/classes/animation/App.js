import React from 'react';
import Product from './Product';
import './App.css';
function App() {
  const [active, setActive] = React.useState(false);

  return (
    <>
      <button onClick={() => setActive(!active)}>Ativar</button>
      {active && <Product />}
    </>
  );
}

export default App;
