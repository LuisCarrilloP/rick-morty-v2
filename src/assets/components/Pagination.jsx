import React from 'react';

const Pagination = ({ currentPage, charactersPerPage, totalCharacters, paginate, selected }) => {

  let pageNumbers = []

  for(let i = 1; i <= Math.ceil(totalCharacters/charactersPerPage); i++){
    if(i < currentPage +5 && i > currentPage -5){
      pageNumbers.push(i)
    }
  }

  return (
    <div className='Pagination'>
      <div className="pagination">
        {
          pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={number === selected ? "selected" : "page-btn"}
            >
              {number}
            </button>
          ))
        }
      </div>
    </div>
  );
};

export default Pagination;