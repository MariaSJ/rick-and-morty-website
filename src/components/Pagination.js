const Pagination = (props) => {

    const pageNumbers = []

  return (
    <nav
      classNameName="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <a className="pagination-previous">Previous</a>
      <a className="pagination-next">Next page</a>
      <ul className="pagination-list">
        <li>
          <a className="pagination-link" aria-label="Goto page 1">
            1
          </a>
        </li>
        <li>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>
        
        <li>
          <a className="pagination-link" aria-label="Goto page 42">
            42
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
