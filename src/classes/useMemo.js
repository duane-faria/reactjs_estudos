import React from 'react';
function useMemo() {
  function slowOperation() {
    let c;
    for (let i = 0; i < 100000000; i++) {
      c = i + i / 10;
    }
    return c;
  }
  const [count, setCount] = React.useState(0);

  let t1 = performance.now();
  const valor = React.useMemo(() => slowOperation(), []);
  console.log(performance.now() - t1, 'tempo');

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

export default useMemo;
