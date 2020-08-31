import React from 'react';

const V = () => {
  const [data, setData] = React.useState(null);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      {data && (
        <div>
          <h1>{data.nome}</h1>
          <p>{data.preco}</p>
        </div>
      )}
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};
export default V;
