import FilterByName from "./FilterByName";

const Filters = (props) => {
    const handleSubmit = (ev) => {
        ev.preventDefault();
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <FilterByName handlerFilterByName={props.handlerFilterByName} filterByName={props.filterByName} />
        </form>
    );
}

// Filters.propTypes = {

// };

export default Filters;