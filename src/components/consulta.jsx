import React, {useState,useEffect} from "react";
import CharacterList from "./CharacterList";
import Character from "./Character";

function consultaPersonajes(){
  return(
    console.log("personajes")
  )
}

export default function Consulta(){

  const [characters,setCharacters]=useState([])

  useEffect(()=>{
    async function getData() {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharacters(data.results);
    }
    
    getData();
    
},[])

return(
    <>
    <h1>Peticiones de rick y morty</h1>
    {
      characters.map(characters=>{
        return(
          <div>
            <h2>{characters.name}</h2>
            <img src={characters.image} alt={characters.name} />
          </div>
        )
      })
    }
    </>
)
}
