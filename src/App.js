
import './App.css';
import Card from './components/Card';
import FormattedText from './components/FormattedText';
import List from './components/List';
//import { useState } from 'react';

const list1 = ["Primeiro Item", "Segundo Item", "Terceiro Item", "Qaurto Item"];
const list2 = ["Batata", "Tomate"];

function App() {
  /*
    const [contador, setContador] = useState(0)
  
    const handleClick = () => {
      setContador(contador + 1)
    }
  */
  return (
    <div className="App">
      <header className="App-header">
        
          <List items={list1}/>
          <List items={list2}/>
          <FormattedText label={'nome'} value={'Jefferson'}/>
          <FormattedText label={'nome'} value={'Gislaine'}/>
      </header>
    </div>
  );
}

export default App;
