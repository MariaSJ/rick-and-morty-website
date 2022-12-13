import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="error">
      <p className="error__text">El personaje que buscas no existe</p>
      <Link className="error__goBack" to="/">Volver</Link>
    </div>
    );
}

export default NotFound;