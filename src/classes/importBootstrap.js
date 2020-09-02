import React from 'react';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div
        className="card bg-dark text-white m-5"
        style={{ maxWidth: '18rem' }}
      >
        <div className="card-header">Notebook</div>
        <div className="card-body">
          <div className="card-title">R$20000</div>
        </div>
      </div>
    </>
  );
}

export default App;
