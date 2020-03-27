import React, { useState } from 'react';
//import Header from './Header';
import Logon from './pages/Logon';

//Um componente no React é uma função que retorna HTML
// HTML escrito dentro do JS = JSX (JavaScript XML)
function App() {
  const [count, setCounter] = useState(0);
  //let count = useState(0);

  //useState() = Retorna um array [valor da variável, função de atualização]

  function incrementCount(){
    //count+=1;
    setCounter(count +1);

    
  }
  return (
    //Passa title (pode ser qualquer nome) como uma propriedade para o Header.js
    //<Header title='Semana de estudos Opa'></Header>//Importa o export do Header.js
    
    <div>
      <Header>Contador: {count}</Header>
      <button onClick={incrementCount}>Incrementar</button>
    </div>
    
  );
}

export default App;
