import CharacterCard from './CharacterCard';
import NotFound from './NotFound';
import ScrollUp from './ScrollUp';

const CharacterList = ({ characterList }) => {
    if (characterList.length === 0) {
        return <NotFound/>
    }else{
        const oneCharacter = characterList.map((character) => {
        return <CharacterCard character={character} key={character.id} />
    })
        
    return (
        <section className="characters">
            <ul className="characters__list">{oneCharacter}</ul>
            <ScrollUp />
        </section>
    ); 
    }
}

export default CharacterList;