
const callToApi = () => {
    // Llamamos a la API
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((character) => {
        return {
          id: character.id,
          image: character.image,
          name: character.name,
          species: character.species,
          status: character.status,
          origin: character.origin.name,
          episodes: character.episode.length,
        };
        
      });
      return cleanData;
    });
};
  
export default callToApi;