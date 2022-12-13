const CharacterCard = (props) => {
    return (
         <li className="card"> 
            <a className="card__link" href="#">
                <img className="card__img" src={props.character.image} alt={`Foto de ${props.character.name}`} title= {`Foto de ${props.character.name}`}></img>
                <h3 className="card__title">{props.character.name}</h3>
                <p className="card__species">{props.character.species}</p>
            </a>
        </li>
    );
}

// CharacterCard.propTypes = {

// };

export default CharacterCard;