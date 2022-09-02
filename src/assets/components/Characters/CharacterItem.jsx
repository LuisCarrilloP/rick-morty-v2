import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CharacterItem = ({url}) => {

  const [ character, setCharacter ] = useState({})
  const [ color, setColor ] = useState("green")

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        setCharacter(res.data)
        if(res.data?.status === "Alive"){
          setColor("green")
        }else if(res.data?.status === "Dead"){
          setColor("red")
        }else {
          setColor("gray")
        }
      })
  },[ url ])

  // console.log(character);

  return (
      <li className='character-card'>
        <img src={character.image} alt="character image"/>
        <div className='character-info'>
          <p className='character-name'>{character.name}</p>
          <p className='character-status'><span className={"circle " + color}></span> {character.status} - {character.species}</p>
          <p className="subtitle">origin</p>            
          <p className='character-origin'>{character.origin?.name}</p>
          <p className="subtitle">episodes</p>    
          <p className='character-episodes'>{character.episode?.length}</p>
        </div>
      </li>
  );
};

export default CharacterItem;