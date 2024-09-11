import { useState } from "react";
import Form from "./Form";
import CharacterPost from "./CharacterPost";
import "./Home.css";

export default function UserPost({fetchedCharacters}) {
    const [ userPost, setUserPost ] = useState([]);
    const [isModalOpen, setisModalOpen] = useState(false);

    function openModal() {
        setisModalOpen(true);
    }

    function closeModal() {
        setisModalOpen(false);
    }

    // We'll pass this function to <Form> to handle its `submit` event.
    function handleSubmit(event) {
        // Prevent default behavior.
        event.preventDefault();

            const fetchedCount = fetchedCharacters?.length || 0;
            const userPostCount = userPost?.length || 0;

        const newPost = {
            Id: fetchedCount + userPostCount + 1,
            Name: event.target.name.value,
            Caption: event.target.caption.value,
            Img: event.target.img.value
        }
        fetch("http://localhost:3000/Villagers", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify(newPost)
        }).then(response => response.json())
          .then(data => {setUserPost([data, ...userPost]); 
            closeModal();
          }
        );
        event.target.reset();
    }

        function handleDelete(postId) {
            fetch(`http://localhost:3000/Villagers/${postId}`, {
                method: "DELETE", 
            })
            .then(()=> {
                setUserPost(userPost.filter((post) => post.Id !== postId));
            })
            .catch((error) => console.error(error));
        }


    return (
        <div className="button">
            <button onClick={openModal} className="open-modal-button">
                Click here to add your own post! 
            </button>
            <Form isOpen = {isModalOpen} onClose={closeModal} handleSubmit={handleSubmit} />

            <div className="post-list">
{userPost.map((post) => (
    <div key={post.Id} className="post">
        <CharacterPost character={post}/>
        <button onClick={() => handleDelete(post.Id)}>Delete Post</button>
        </div>
))}

          
</div>

        </div>
    )
}