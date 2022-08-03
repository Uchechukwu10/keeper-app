import React, { useState } from 'react'

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setNote(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    function submit(event) {
        props.addNote(note);

        event.preventDefault();
        setNote(() => {
            return {
                title: "",
                content: ""
            }
        });
    }

    return (
        <div>
            <form>
            <input onChange={handleChange} value={note.title} name="title" placeholder="Title" />
            <textarea onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows="3" />
            <button onClick={submit}>Add</button>
        </form>
        </div>
    )
}

export default CreateArea