import {useState, useEffect} from "react";
import "./Home.css";
 
function CharacterComment() {
const [comment, setComment] = useState([]);

useEffect(() => {
    fetch("https://phase-2-project-backend-x04p.onrender.com/Villagers")
    .then((response) => response.json())
    .then((villagers) => {
        const comments= getRandomComments(villagers);
        setComment(comments);
        
    })
    .catch((error) => console.error(error))

}, []);

function getRandomComments(villagers) {
    const shuffledVillagers = [...villagers].sort(() => 0.5 - Math.random());
    const selectedVillagers = shuffledVillagers.slice(0,3);

    const randomComments = selectedVillagers.map((villager) => {
        const comments = villager.Comments || [];
        if(comments.length === 0) {
            return null;
        }
        const randomComment = 
        comments[Math.floor(Math.random() * comments.length)];
        return {
            villagerName: villager.Name,
            comment: randomComment,
        };
    }).filter(comment => comment !==null);
    return randomComments;
}

    return (

        <div className="comments">
            <h4>Comments from Villagers:</h4>
            {comment.length > 0 ? (
                comment.map((commentObj, index) => (
                    <p key = {index}>
                        <strong>{commentObj.villagerName}:</strong> {commentObj.comment}
                    </p>
                ))
            ) : (
                <p>Loading comments...</p>
            )
                
            }

        </div>
    );
}

export default CharacterComment;