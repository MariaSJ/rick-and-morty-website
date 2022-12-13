const FilterByName = (props) => {

    const handlerChangeName = (ev) => {
        ev.preventDefault();
        props.handlerFilterByName(ev.target.value);
    };

    return (
        <>
        <input className="form__search-name" type="text" name="search-name" id="search-name" value={props.filterByName} onChange={handlerChangeName} />
        </>
    );
}

// FilterByName.propTypes = {

// };

export default FilterByName;