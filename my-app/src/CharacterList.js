import {useState, useEffect} from "react";
import CharacterPost from "./CharacterPost";
import "./CharacterList.css";

function CharacterList() {

    const [fetchedCharacters, setFetchedCharacters] = useState([]);
    useEffect(() =>  {
    
      fetch("http://localhost:3000/Villagers")
      .then((response) => response.json())
      .then((data )=> setFetchedCharacters(data))
      .catch((error) => console.error(error))
    }, []);

    return (
<div>
{fetchedCharacters.map((character) => (
    <CharacterPost key={character.Id} character={character} />
))}
</div>

    );
}

export default CharacterList;