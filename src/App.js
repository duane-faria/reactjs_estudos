import React from 'react';

function App() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

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

      <button>Enviar</button>
    </form>
  );
}

export default App;
