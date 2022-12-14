import AlphabeticalOrder from "./AlphabeticalOrder";
import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";

const Filters = (props) => {
    const handleSubmit = (ev) => {
        ev.preventDefault();
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <FilterByName handlerFilterByName={props.handlerFilterByName} filterByName={props.filterByName} />
            <FilterBySpecies handlerFilterBySpecies={props.handlerFilterBySpecies} filterBySpecies={props.filterBySpecies} />
            <AlphabeticalOrder renderAlphabeticalOrder={props.renderAlphabeticalOrder}/>
        </form>
    );
}

// Filters.propTypes = {

// };

export default Filters;