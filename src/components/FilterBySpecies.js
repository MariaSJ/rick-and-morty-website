const FilterBySpecies = (props) => {
    const handlerChangeSpecies = (ev) => {
        ev.preventDefault();
        props.handlerFilterBySpecies(ev.target.value);
    };

    return (
        <>
        <div className="form__species">
            <label className="form__label-species" htmlFor="Species">Species</label>
            <select className="form__select-species" name="Species" id="Species" value={props.filterBySpecies} onInput={handlerChangeSpecies}>
                <option value="">All</option>
                <option value="Human">Human</option>
                <option value="Alien">Alien</option>
            </select>
        </div>    
        </>
    );
}

// FilterBySpecies.propTypes = {

// };

export default FilterBySpecies;