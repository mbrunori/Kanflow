import { useState } from "react";

import './Modal.css'

function Modal({ onClose, onSave }) {
    const [title, setTitle] = useState("");       // ← era "name"
    const [content, setContent] = useState("");   // ← era "description"

    function handleSubmit() {
        onSave({ title, content });               // ← coerente con Board
    }

    return (
        <div className="overlay">
            <div className="modal">
                <h3>Insert data</h3>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={4}
                />
                <div className="buttonDiv">
                    <button onClick={handleSubmit}>Save</button>
                    <button onClick={onClose}>Close without saving</button>
                </div>
            </div>
        </div>
    )
}

export default Modal