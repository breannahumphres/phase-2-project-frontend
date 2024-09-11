import CharacterPost from "./CharacterPost";
import "./CharacterList.css";


function CharacterList({fetchedCharacters}) {


    return (
<div>
{fetchedCharacters.map((character,index) => (
    <CharacterPost key={index} character={character} />

))}
</div>

    );
}

export default CharacterList;