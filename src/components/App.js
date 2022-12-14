import '../styles/App.scss';
//import logo from '../images/Rick-and-Morty.png'
import {useEffect, useState} from 'react';
import callToApi from '../services/api';
import { Routes, Route, matchPath, useLocation } from 'react-router-dom';
//import ls from '../services/localStorage';
//import PropTypes from 'prop-types';

import Header from './Header';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';


function App() {

// STATES
  const [characterList, setCharacterList] = useState([]);
  const [filterByName, setFilterByName] = useState("");
  const [filterBySpecies, setFilterBySpecies] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  
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

  const handlerFilterBySpecies = (value) => {
    setFilterBySpecies(value);
  };

  const renderAlphabeticalOrder = () => {
    const orderedList = filteredList.sort((x, y) => x.name.localeCompare(y.name));
    setFilteredList([...orderedList]);
  };


// FILTERS 
  
  const filteredCharacters = characterList
    .filter((character) => filterByName === "" || character.name.toLowerCase().includes(filterByName.toLowerCase()))
    .filter((character) => filterBySpecies === "" ? "All" : character.species === filterBySpecies);
    

  

// ROUTES

  // Obtengo la info de la ruta. Me quedo solo con pathname
  const { pathname } = useLocation();

  // Función matchPath, cogemos el valor variable de la ruta -character id-
  const dataUrl = matchPath('/character/:characterId', pathname);

  // Validación para sacar el id del personaje
  const characterId = dataUrl !== null ? dataUrl.params.characterId : null;
  
  const characterFound = characterList.find((character) => character.id === parseInt(characterId));

  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={ 
            <>
              <main className="main">
              <Filters handlerFilterByName={handlerFilterByName} filterByName={filterByName} handlerFilterBySpecies={handlerFilterBySpecies} filterBySpecies={filterBySpecies} renderAlphabeticalOrder={renderAlphabeticalOrder} />
                <CharacterList characterList={filteredCharacters}/>
              </main> 
            </>
          } />

          <Route path="/character/:characterId" element={<CharacterDetail characterFound={characterFound} />} />
        </Routes>
    </>
  );
}

export default App;