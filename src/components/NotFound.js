import { Link } from "react-router-dom";
import pickle from '../images/pikle-rick.png';

const NotFound = () => {
  return (
    <div className="error">
      <img className="error__img" src={pickle} alt="pickle rick" title="Pickle Rick"/>
      <p className="error__text">Vaya... parece que el personaje que buscas no existe</p>
      <Link className="error__goBack" to="/">Volver</Link>
    </div>
    );
}

export default NotFound;