import {useState} from "react";
import emptyHeart from "/Users/breannahumphres/Development/code/phase-2/phase-2-project-frontend/my-app/src/kisspng-animation-awesome-pixel-5af9c902e17b21.4649731615263193629236.jpg";
import fullHeart from "/Users/breannahumphres/Development/code/phase-2/phase-2-project-frontend/my-app/src/360_F_133365873_7eswWXyuviHLkyIBMy6fChgC3EjtFrmD.jpg"
import "./LikeButton.css";


function LikeButton() {
const [liked, setLiked] = useState(false);

const handleLikeClick = () => {
    setLiked(!liked);
};

return (
    <div className="like-button-container" onClick={handleLikeClick} style={{cursor: "pointer"}}>
        
        <img 
        className="like-button"
        src={liked ? fullHeart : emptyHeart}
        alt = {liked ? "unlike" : "like"}
        />

    </div>
)


}

export default LikeButton;