import CharacterCard from './CharacterCard';

const CharacterList = ({ characterList }) => {
    const characterElement = characterList.map((character) => {
        return <CharacterCard character = {character} />
    })
    return (
        <section>
            <ul>{characterElement}</ul>
        </section>
    );
}

// CharacterList.propTypes = {

// };

export default CharacterList;