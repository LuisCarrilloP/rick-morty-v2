import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CharacterItem from './CharacterItem';
import Pagination from '../Pagination'

const Characters = ({url}) => {

  const [ state, setState ] = useState([])

  const [ currentPage, setCurrentPage ] = useState(1)
  const charactersPerPage = 10

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        setState(res.data.residents)
        setCurrentPage(1)
      })

  }, [ url ])

  //console.log(state);

  //current page
  const indexOfLastCharacter = currentPage * charactersPerPage
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage
  const charactersShowed = state.slice(
    indexOfFirstCharacter, indexOfLastCharacter
  )

  //change page
  const paginate = (numberOfPage) => setCurrentPage(numberOfPage)


  return (
    <div className='Characters'>
      <h2>Residents</h2>
      <ul className='characters-card-container'>
        {
          charactersShowed.map(resident => (
            <CharacterItem url={resident} key={resident}/>
          ))
        }
      </ul>
      <Pagination
        currentPage={currentPage}
        charactersPerPage={charactersPerPage}
        totalCharacters={state.length}
        paginate={paginate}
        selected={currentPage}
      />
    </div>
  );
};

export default Characters;