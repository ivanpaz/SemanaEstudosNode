import React from 'react';
import ReactDOM from 'react-dom'; //integração do react com o navegador

import App from './App';

//render significa colocar me tela
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


