import CharacterList from './CharacterList';
import UserPost from './UserPost';
import {useState, useEffect} from "react";


function Home() {
    const [fetchedCharacters, setFetchedCharacters] = useState([]);
    useEffect(() =>  {
    
      fetch("http://localhost:3000/Villagers")
      .then((response) => response.json())
      .then((data )=> setFetchedCharacters(data))
      .catch((error) => console.error(error))
    }, []);

  return (
    <div className="Home">
      <h1>Stardew Valley Social</h1>
   <UserPost fetchedCharacters={fetchedCharacters}/>
     <CharacterList fetchedCharacters={fetchedCharacters}/>
    </div>
  );
}

export default Home;