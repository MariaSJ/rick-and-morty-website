import CharacterCard from './CharacterCard';

const CharacterList = ({ characterList }) => {
    const characterElement = characterList.map((character) => {
        return <CharacterCard character={character} key={character.id} />
    })
    return (
        <section className="characters">
            <ul className="characters__list">{characterElement}</ul>
        </section>
    );
}

// CharacterList.propTypes = {

// };

export default CharacterList;