import React from 'react';
import Product from './Product';

function useEffectP2() {
  const [active, setActive] = React.useState(false);

  return (
    <div>
      {active && <Product />}
      <button onClick={() => setActive(!active)}>Ativar</button>
    </div>
  );
}

export default useEffectP2;
