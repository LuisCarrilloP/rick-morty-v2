import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Location = ({url}) => {
  
  const [ location, setLocation ] = useState({})

  useEffect(() => {
    axios
      .get(url)
      .then(res => setLocation(res.data))
  }, [ url ])

  /* console.log(location); */

  return (
    <div className='Location'>
      <h4>{location.name}</h4>
      <div className='Location__info'>
        <p><b>type: </b>{location.type}</p>
        <p><b>dimension: </b>{location.dimension}</p>
        <p><b>population: </b>{location.residents?.length}</p> 
      </div>
    </div>
  );
};

export default Location;