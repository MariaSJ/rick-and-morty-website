import { Link } from 'react-router-dom';
import NotFound from './NotFound';

const CharacterDetail = ({ characterFound }) => {
    if (characterFound === undefined) {
      return <NotFound /> 
    }else{
        return (
        <main className="main">
        <article className="detail">
            <Link className="detail__close" to={"/"}>x</Link>
            <div className="detail__card">
                <img className="detail__img" src={characterFound.image} alt={`Foto de ${characterFound.name}`} title={`Foto de ${characterFound.name}`}></img>
                <div className="detail__data">
                    <h3 className="detail__name">{characterFound.name}</h3>
                    <p className="detail__status">{`Status: ${characterFound.status}`}</p>
                    <p className="detail__species">{`Species: ${characterFound.species}`}</p>
                    <p className="detail__origin">{`Origin: ${characterFound.origin}`}</p>
                    <p className="detail__episodes">{`Episodes: ${characterFound.episodes}`}</p>
                </div>
            </div>
        </article>
        </main>    
        )
    }
    };

export default CharacterDetail;