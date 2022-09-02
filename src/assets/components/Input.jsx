import React, { useState } from 'react';
import Location from './Location'
import Header from './Header'
import Characters from './Characters/Characters';

const Input = () => {

  const random = Math.floor(Math.random() * 126) +1
  const [ url, setUrl ] = useState(`https://rickandmortyapi.com/api/location/${random}`)

  /* const [ locations, setLocations ] = useState([])
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location")
      .then(res => setLocations(res.data.results))
  }, [])
  console.log(locations); */
  
  const [ search, setSearch ] = useState("")
  const waitSearch = (url) => {
    if(search <= 126){
      setSearch("")
      setUrl(url)
    }else{
      alert("There are only 126 locations")
    }
  }

  

  return (
    <div className='Input Main'>
      <Header/>
      <Location url={url}/>
      <input 
        type="text"
        list="locations"
        placeholder='type a location id' 
        onChange={e => setSearch(e.target.value)} 
        value={search}
      />
      {/* <datalist id='locations'>
        {
          locations.map(location => (
            <option value={location.name}></option>
          ))
        }
      </datalist> */}
      <button onClick={() => waitSearch(`https://rickandmortyapi.com/api/location/${search}`)}>Search</button>
      <Characters url={url}/>
    </div>
  );
};

export default Input;