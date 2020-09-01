import React from 'react';
import { GlobalContext } from './GlobalContext';
function Product() {
  const global = React.useContext(GlobalContext);
  console.log(global);
  return <div></div>;
}

export default Product;
