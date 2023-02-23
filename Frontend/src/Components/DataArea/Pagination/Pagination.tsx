const Pagination: React.FC<{ vacationPerPage: number, totalVacations: number, 
    currentPage: number, setCurrentPage: (newPage: number) => void 
}> = ({ vacationPerPage, totalVacations, currentPage, setCurrentPage }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalVacations / vacationPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className="Pagination">
        {pageNumbers.map(number => (

            <button className="page-link" key={number} onClick={() => setCurrentPage(number)}>
              {number}
            </button>

        ))}
      </div>
    );
  };
  
  export default Pagination;
  