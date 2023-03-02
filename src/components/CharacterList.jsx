import React, {useState,useEffect} from "react";
import Character from "./Character";

function NavPage(props){
  return(
    <header className="d-flex justify-content-between align-items-center">
      <p>Page: {props.page}</p>
      <button className="btn btn-primary btn-sm"
       onClick={()=>props.setPage((props.page)+1)}>
        {props.page+1}
      </button>
    </header>
  )
}

function CharacterList(){
    const [characters,setCharacters]=useState([]);
    const [loading,setLoading]=useState([true]);
    const [page,setPage]=useState(1);

    useEffect(()=>{
      async function getData() {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const data = await response.json();
        setLoading(false);
        setCharacters(data.results);
      }
      
      getData();
    },[page]);

  if(loading){
    return(
      <div>Loading</div>
    )
  }

  return(
    <div className="container">

    <NavPage page={page} setPage={setPage}/>
      {
        loading?(<h1>Loading...</h1>):
        (
          <div className="row">
            {characters.map((character)=>{
              return(
                <div className="col-md-4">
                  <Character key={character.id} character={character}/>  
                </div>
        )
      })}
      </div>
        )
      }

    <NavPage page={page} setPage={setPage}/>

    </div>
    )
}

export default CharacterList