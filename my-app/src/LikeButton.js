import {useState} from "react";
import emptyHeart from "./emptyheart.jpg";
import fullHeart from "./fullheart.jpg";
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