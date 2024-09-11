import {useState, useEffect} from "react";
import RandomCharacterPost from "./RandomCharacterPost.js";
import "./CharacterList.css";

function RandomCharacterList() {

    const [fetchedRandomCharacters, setFetchedRandomCharacters] = useState([]);
    useEffect(() =>  {
    
      fetch("https://phase-2-project-backend-x04p.onrender.com/Randoms")
      .then((response) => response.json())
      .then((data )=> setFetchedRandomCharacters(data))
      .catch((error) => console.error(error))
    }, []);

    return (
<div>
{fetchedRandomCharacters.map((random) => (
    <RandomCharacterPost key={random.Id} random={random} />
))}
</div>

    );
}

export default RandomCharacterList;