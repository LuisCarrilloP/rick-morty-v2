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
      <datalist id='locations'>
      <option value="1"></option>
          <option value="2"></option>
          <option value="3"></option>
          <option value="4"></option>
          <option value="5"></option>
          <option value="6"></option>
          <option value="7"></option>
          <option value="8"></option>
          <option value="9"></option>
          <option value="10"></option>
          <option value="11"></option>
          <option value="12"></option>
          <option value="13"></option>
          <option value="14"></option>
          <option value="15"></option>
          <option value="16"></option>
          <option value="17"></option>
          <option value="18"></option>
          <option value="19"></option>
          <option value="20"></option>
          <option value="21"></option>
          <option value="22"></option>
          <option value="23"></option>
          <option value="24"></option>
          <option value="25"></option>
          <option value="26"></option>
          <option value="27"></option>
          <option value="28"></option>
          <option value="29"></option>
          <option value="30"></option>
          <option value="31"></option>
          <option value="32"></option>
          <option value="33"></option>
          <option value="34"></option>
          <option value="35"></option>
          <option value="36"></option>
          <option value="37"></option>
          <option value="38"></option>
          <option value="39"></option>
          <option value="40"></option>
          <option value="41"></option>
          <option value="42"></option>
          <option value="43"></option>
          <option value="44"></option>
          <option value="45"></option>
          <option value="46"></option>
          <option value="47"></option>
          <option value="48"></option>
          <option value="49"></option>
          <option value="50"></option>
          <option value="51"></option>
          <option value="52"></option>
          <option value="53"></option>
          <option value="54"></option>
          <option value="55"></option>
          <option value="56"></option>
          <option value="57"></option>
          <option value="58"></option>
          <option value="59"></option>
          <option value="60"></option>
          <option value="61"></option>
          <option value="62"></option>
          <option value="63"></option>
          <option value="64"></option>
          <option value="65"></option>
          <option value="66"></option>
          <option value="67"></option>
          <option value="68"></option>
          <option value="69"></option>
          <option value="70"></option>
          <option value="71"></option>
          <option value="72"></option>
          <option value="73"></option>
          <option value="74"></option>
          <option value="75"></option>
          <option value="76"></option>
          <option value="77"></option>
          <option value="78"></option>
          <option value="79"></option>
          <option value="80"></option>
          <option value="81"></option>
          <option value="82"></option>
          <option value="83"></option>
          <option value="84"></option>
          <option value="85"></option>
          <option value="86"></option>
          <option value="87"></option>
          <option value="88"></option>
          <option value="89"></option>
          <option value="90"></option>
          <option value="91"></option>
          <option value="92"></option>
          <option value="93"></option>
          <option value="94"></option>
          <option value="95"></option>
          <option value="96"></option>
          <option value="97"></option>
          <option value="98"></option>
          <option value="99"></option>
          <option value="100"></option>
          <option value="101"></option>
          <option value="102"></option>
          <option value="103"></option>
          <option value="104"></option>
          <option value="105"></option>
          <option value="106"></option>
          <option value="107"></option>
          <option value="108"></option>
          <option value="109"></option>
          <option value="110"></option>
          <option value="111"></option>
          <option value="112"></option>
          <option value="113"></option>
          <option value="114"></option>
          <option value="115"></option>
          <option value="116"></option>
          <option value="117"></option>
          <option value="118"></option>
          <option value="119"></option>
          <option value="120"></option>
          <option value="121"></option>
          <option value="122"></option>
          <option value="123"></option>
          <option value="124"></option>
          <option value="125"></option>
          <option value="126"></option>  
        {
          /* locations.map(location => (
            <option value={location.name}></option>
          )) */
          
        }
      </datalist>
      <button onClick={() => waitSearch(`https://rickandmortyapi.com/api/location/${search}`)}>Search</button>
      <Characters url={url}/>
    </div>
  );
};

export default Input;