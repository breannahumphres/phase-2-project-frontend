
function RandomCharacterPost({random}) {
console.log(random);

    return (
<div className="character-card">
    <img src={random.Img} alt = {random.Name} />
    <h3>{random.Name}</h3>
    <p>{random.Caption} </p> 
</div>

    )
}

export default RandomCharacterPost;