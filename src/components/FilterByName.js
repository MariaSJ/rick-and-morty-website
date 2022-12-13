const FilterByName = (props) => {

    const handlerChangeName = (ev) => {
        ev.preventDefault();
        props.handlerFilterByName(ev.target.value);
    };

    return (
        <>
        <input className="form__input-search" type="text" name="search-name" id="search-name" placeholder="Ej:Rick Sanchez" value={props.filterByName} onInput={handlerChangeName} />
        </>
    );
}

// FilterByName.propTypes = {

// };

export default FilterByName;