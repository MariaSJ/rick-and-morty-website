import '../styles/App.scss';
//import logo from '../images/Rick-and-Morty.png'
import {useEffect, useState} from 'react';
import callToApi from '../services/api';
import { Routes, Route, matchPath, useLocation } from 'react-router-dom';
//import ls from '../services/localStorage';
//import PropTypes from 'prop-types';

import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';

function App() {

// STATES
  const [characterList, setCharacterList] = useState([]);
  const [filterByName , setFilterByName ] = useState("");
  
// USEEFFECT

useEffect(() => {
  // Dentro de useEffect llamamos a la API
  callToApi().then((data) => {
    // Cuando la API responde guardamos los datos en el estado para que se vuelva a renderizar el componente
    setCharacterList(data);
  });
}, []);

// HANDLER FUNCTIONS
  
  const handlerFilterByName = (value) => {
    setFilterByName(value);
  };

  const filteredCharacters = characterList
    .filter((character) => filterByName === "" || character.name.toLowerCase().includes(filterByName.toLowerCase()));
  
  return (
    <>
      <header className="header">
        <h1>Rick y Morty</h1>
        {/* <img className='logo' src={logo} alt=""></img> */}
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={ 
            <>
              <Filters handlerFilterByName={handlerFilterByName} filterByName={filterByName} />
              <CharacterList characterList={filteredCharacters} />
            </>
          } />

          <Route path="/character/:characterId" element={<CharacterDetail />} />
        </Routes>
      </main>
    </>
  );
}

export default App;