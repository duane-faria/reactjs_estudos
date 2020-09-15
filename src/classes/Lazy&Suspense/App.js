import React from 'react';
// import Contato from './Contato';
const Contato = React.lazy(() => import('./Contato'));

export default function App() {
  const [active, setActive] = React.useState(false);
  return (
    <>
      {active && (
        <React.Suspense fallback={<div>Carregando...</div>}>
          <Contato />
        </React.Suspense>
      )}
      <button onClick={() => setActive(!active)}>
        {active ? 'Desativar' : 'Ativar'}
      </button>
    </>
  );
}
