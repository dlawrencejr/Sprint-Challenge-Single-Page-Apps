import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import axios from 'axios';


export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect

  const [characters,setCharacters] = useState([]);

  useEffect(() => {

    axios.get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        console.log('Successful',res.data.results)
        setCharacters(res.data.results)
      })
      .catch(err =>{
        console.log('Not here',err)
      })
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list grid-view">
      {characters.map(character => (
        
        <CharacterCard 
        key={character.id}
        img={character.image}
        name={character.name}
        status={character.status}
        location={character.location.name}
        origin={character.origin.name}
        />

      ))}
    </section>
  );
}
