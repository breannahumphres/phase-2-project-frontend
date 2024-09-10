// import {useState, useEffect} from "react";
 
// function CharacterComment() {
// const [comment, setComment] = useState([]);

// useEffect(() => {
//     fetch("http://localhost:3000/Villagers/")
//     .then((response) => response.json())
//     .then((villagers) => {
//         const comments= getRandomComments(villagers);
//         setComment(comments);
        
//     })
//     .catch((error) => console.error(error))

// }, []);

// function getRandomComments(villagers) {
//     const shuffledVillagers = [...villagers].sort(() => 0.5 - Math.random());
//     const selectedVillagers = shuffledVillagers.slice(0,3);

//     const randomComments = selectedVillagers.map((villager) => {
//         const comments = villager.Comments || [];
//         if(comments.length === 0) {
//             return {
//                 villagername: villager.Name,
//                 comment: "No comment available",
//             };
//         }
//         const randomComment = 
//         comments[Math.floor(Math.random() * comments.length)];
//         return {
//             villagerName: villager.Name,
//             comment: randomComment,
//         };
//     });
//     return randomComments;
// }

//     return (

//         <div>
//             <h3>Comments from Villagers:</h3>
//             {comment.length > 0 ? (
//                 comment.map((commentObj, index) => (
//                     <p key = {index}>
//                         <strong>{commentObj.villagerName}:</strong> {commentObj.comment}
//                     </p>
//                 ))
//             ) : (
//                 <p>Loading comments...</p>
//             )
                
//             }

//         </div>
//     );
// }

// export default CharacterComment;