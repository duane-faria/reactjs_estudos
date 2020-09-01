import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => (
  <GlobalContext.Provider value={{ text: 'Uma mensagem emocionante' }}>
    {children}
  </GlobalContext.Provider>
);
