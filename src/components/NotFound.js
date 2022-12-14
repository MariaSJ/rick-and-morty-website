import pickle from '../images/pikle-rick.png';

const NotFound = () => {
  return (
    <div className="error">
      <img className="error__img" src={pickle} alt="pickle rick" title="Pickle Rick"/>
      <p className="error__text">Opss... it seems that the character you are looking for does not exist.</p>
    </div>
    );
}

export default NotFound;