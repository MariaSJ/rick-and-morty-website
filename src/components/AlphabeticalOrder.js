const AlphabeticalOrder = (props) => {
    
    const handlerClick = (ev) => {
        ev.preventDefault();
        props.renderAlphabeticalOrder();
    };
    
    return (
        <>
            <input className="form__btn" type="button" value="A - Z" onClick={handlerClick}/>
        </>
    );
}

// AlphabeticalOrder.propTypes = {

// };

export default AlphabeticalOrder;