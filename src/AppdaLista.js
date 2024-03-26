
import { useState } from 'react';
import './App.css';
import MinhaLista from './components/MinhaLista';

function App() {
  const [mensagens, setMensagens] = useState([])

  const getAdvice = async () =>{
    

    const result = await fetch('https://api.adviceslip.com/advice')
    const data = await result.json()
    const frase = data.slip.advice
    console.log(frase)
    setMensagens(oldItens => [...oldItens,frase])
  
  }


  return (
    <div className="App">
      <h1>Renderizando Lista</h1>
      <MinhaLista xx={mensagens}/>

      <button onClick={getAdvice}>Adicionar</button>
    </div>
  );
}

export default App;
