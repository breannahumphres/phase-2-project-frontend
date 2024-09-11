import CharacterList from './CharacterList';
import UserPost from './UserPost';
import {useState, useEffect} from "react";
import './Home.css';

function Home() {
    const [fetchedCharacters, setFetchedCharacters] = useState([]);
    useEffect(() =>  {
    
      fetch("https://phase-2-project-backend-x04p.onrender.com/Villagers")
      .then((response) => response.json())
      .then((data )=> setFetchedCharacters(data))
      .catch((error) => console.error(error))
    }, []);

  return (
    <div className="centered-container">
      <h1>Stardew Valley Social</h1>
   <UserPost fetchedCharacters={fetchedCharacters}/>
     <CharacterList fetchedCharacters={fetchedCharacters}/>
    </div>
  );
}

export default Home;