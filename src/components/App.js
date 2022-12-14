import '../styles/App.scss';
import {useEffect, useState} from 'react';
import callToApi from '../services/api';
import { Routes, Route, matchPath, useLocation } from 'react-router-dom';
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
  const [order, setOrder] = useState(false); //creo una variable de estado de tipo booleano en false

  
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

  // Función render: cambia el estado de order a true si es false y a false si es true.
  const renderAlphabeticalOrder = () => {
    const aux = order;
    setOrder(!aux);
  };

// FILTERS 
  
  const filteredCharacters = characterList
    .filter((character) => filterByName === "" || character.name.toLowerCase().includes(filterByName.toLowerCase()))
    .filter((character) => filterBySpecies === "" ? "All" : character.species === filterBySpecies)
    .sort((a, b) => {
      if (order) {
        //x.name.localeCompare(y.name);
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      }
    });
    // añado el sort a mi lista de fltros y filteredCharacters se pasa por props al componente que renderiza la lista. 
  

// ROUTES

  // Obtengo la info de la ruta. Me quedo solo con pathname
  const { pathname } = useLocation();

  // Función matchPath, cogemos el valor variable de la ruta (en este caso character id)
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