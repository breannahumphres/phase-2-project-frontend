import CharacterComment from "./CharacterComment";
import LikeButton from "./LikeButton";


function CharacterPost({character}) {
// console.log(character);

    return ( 
<div className="character-card">
    <img src={character.Img} alt = {character.Name} />
    <h3>{character.Name}</h3>
    <p>{character.Caption} </p> 
    <LikeButton /> 
    <CharacterComment />

</div>

    )
}

export default CharacterPost;