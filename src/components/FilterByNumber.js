const FilterByNumber = (props) => {

    const handlerInput = (ev) => {
        ev.preventDefault();
        props.handlerFilterByNumber(ev.target.value);
    };

    return (
        <>
            <input type="number" name="filter-number" id="filter-number" value={props.FilterByNumber} onInput={handlerInput}></input>
        </>
    );
}

export default FilterByNumber;