import React from 'react';

export default function useState() {
  const [active, setActive] = React.useState(true);
  const [data, setDate] = React.useState({ name: 'Duane', age: 21 });

  function handleClick() {
    let newState = !active;
    setActive(newState);
    setDate({
      ...data,
      college: 'Computer engineering',
    });
  }

  return (
    <React.Fragment>
      <p>{data.name}</p>
      <p>{data.age}</p>
      <p>{data.college}</p>
      <button onClick={handleClick}>{active ? 'ativo' : 'inativo'}</button>
    </React.Fragment>
  );
}
