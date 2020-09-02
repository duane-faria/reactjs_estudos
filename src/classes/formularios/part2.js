import React from 'react';

function App() {
  const [cep, setCep] = React.useState('');

  function handleBlur({ target }) {
    const regex = /^\d{5}-?\d{3}$/;
    const validation = regex.test(target.value);
    console.log(validation);
  }

  return (
    <form>
      <label htmlFor="cep">CEP</label>
      <input
        type="text"
        id="cep"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        placeholder="00000-000"
        onBlur={handleBlur}
      />
    </form>
  );
}

export default App;
