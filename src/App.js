import React from 'react';
import Header from './Header';

//Um componente no React é uma função que retorna HTML
// HTML escrito dentro do JS = JSX (JavaScript XML)
function App() {
  return (
    //Passa title (pode ser qualquer nome) como uma propriedade para o Header.js
    <Header title='Semana de estudos Opa'></Header>//Importa o export do Header.js
  );
}

export default App;
