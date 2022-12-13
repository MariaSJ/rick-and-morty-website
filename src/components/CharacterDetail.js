import { Link } from 'react-router-dom';

const CharacterDetail = ({ character }) => {
    return (
        <article className="detail">
            <Link className="detail__close" to={"/"}>X</Link>
            <div className="detail__card">
                <img className="detail__img" src={character.image} alt={`Foto de ${character.name}`} title={`Foto de ${character.name}`}></img>
                <h3 className="detail__name">{character.name}</h3>
                <p className="detail__status">{`Status:${character.status}`}</p>
                <p className="detail__species">{`Species: ${character.species}`}</p>
                <p className="detail__origin">{`Origin: ${character.origin}`}</p>
                <p className="detail__episodes">{`Episodes: ${character.episodes}`}</p>
            </div>
        </article>
        )
    };

// CharacterDetail.propTypes = {

// };

export default CharacterDetail;