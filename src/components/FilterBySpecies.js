const FilterBySpecies = (props) => {
    const handlerChangeSpecies = (ev) => {
        ev.preventDefault();
        props.handlerFilterBySpecies(ev.target.value);
    };

    return (
        <>
        <label htmlFor="Species">Species</label>
        <select name="Species" id="Species" value={props.filterBySpecies} onInput={handlerChangeSpecies}>
            <option value="">All</option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
        </select>
        </>
    );
}

// FilterBySpecies.propTypes = {

// };

export default FilterBySpecies;