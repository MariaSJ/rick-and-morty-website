import FilterByName from "./FilterByName";

const Filters = (props) => {
    return (
        <form className="form">
            <FilterByName handlerFilterByName={props.handlerFilterByName} filterByName={props.filterByName} />
        </form>
    );
}

// Filters.propTypes = {

// };

export default Filters;