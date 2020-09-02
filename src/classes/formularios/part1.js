import React from 'react';

function App() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [select, setSelect] = React.useState('');
  const [radio, setRadio] = React.useState('notebook');

  const [form, setForm] = React.useState({
    name: '',
    email: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nome</label>
      <input
        value={form.name}
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
      />

      <label htmlFor="email">E-mail</label>
      <input
        value={form.email}
        type="email"
        id="email"
        name="email"
        onChange={handleChange}
      />

      <br></br>

      <textarea
        value={message}
        onChange={({ target }) => setMessage(target.value)}
      />

      <br></br>

      <select value={select} onChange={({ target }) => setSelect(target.value)}>
        <option disabled value="">
          selecione
        </option>
        <option value="notebook">notebook</option>
        <option value="smartphone">smartphone</option>
        <option value="tablet">tablet</option>
      </select>

      <br></br>

      <input type="radio" value="notebook" checked={radio === 'notebook'} />

      <br></br>
      <button>Enviar</button>
    </form>
  );
}

export default App;
