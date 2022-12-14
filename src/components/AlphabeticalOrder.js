const AlphabeticalOrder = (props) => {
    
    const handlerClick = (ev) => {
        ev.preventDefault();
        props.renderAlphabeticalOrder();
    };
    
    return (
        <>
            <input type="button" value="A-Z" onClick={handlerClick}/>
        </>
    );
}

// AlphabeticalOrder.propTypes = {

// };

export default AlphabeticalOrder;