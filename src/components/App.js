import '../styles/App.scss';
//import logo from '../images/Rick-and-Morty.png'
import {useEffect, useState} from 'react';
import callToApi from '../services/api';
//import ls from '../services/localStorage';
//import PropTypes from 'prop-types';

import CharacterList from './CharacterList';

function App() {

// STATES
const [characterList , setCharacterList] = useState([]);
  
// USEEFFECT

useEffect(() => {
  // Dentro de useEffect llamamos a la API
  callToApi().then((data) => {
    // Cuando la API responde guardamos los datos en el estado para que se vuelva a renderizar el componente
    setCharacterList(data);
  });
}, []);


  return (
    <>
      <h1>Rick y Morty</h1>
      {/* <img className='logo' src={logo} alt=""></img> */}
      <CharacterList characterList={characterList} />
    </>
  );
}

export default App;
