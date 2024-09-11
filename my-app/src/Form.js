import "./FormModal.css";

function Form({ isOpen, onClose, handleSubmit }) {
  if (!isOpen) {
    return null;
  }
  
  
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onClose} className="close-button">Create Your Own Post Here</button>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" required />
            </label>
            <br />
            <label>
                Caption:
                <input type="text" name="caption" required />
            </label>
            <br />
            <label>
                Image URL:
                <input type="text" name="img" required />
            </label>
            <br />
            <button type="submit">Add Post</button>
        </form>
        </div>
        </div>
    );
}

export default Form;