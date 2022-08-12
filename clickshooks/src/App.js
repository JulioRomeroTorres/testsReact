import logo from './logo.svg';
import './App.css';
import freeccLogo from './images/freeCodeCamp.png';
import {Buttonr} from './components/Buttom'
import {Counter} from './components/Counter'
import {useState} from 'react';

function App() {


  const [numberClics, setNumberClics] = useState(0);

  const increaseClic = () =>{
    setNumberClics(numberClics+1);
  };

  const decreaseClic = () =>{
    setNumberClics(numberClics-1);
  };

  const resetClic = () => {
    setNumberClics(0)
  };


  return (
    <div className="App">
      <div className='logo-container'>
        <img 
          className='freecc-logo'
          src={freeccLogo}
          alt='Logo de FreecodeCamp'
        />  
      </div>
      <div className='main-container'>
        <Counter
          numClics={numberClics}
        />

        <Buttonr
          text='Incrementar'
          isButtonClic={0}
          manageClic={increaseClic}
          />
        <Buttonr
          text='Decrementar'
          isButtonClic={1}
          manageClic={decreaseClic}
          />
        <Buttonr
          text='Resetear'
          isButtonClic={2}
          manageClic={resetClic}

        />
      </div>
    </div>
  );
}

export default App;
