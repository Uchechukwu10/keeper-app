import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes(prevValue => {
      return [...prevValue, note]
    })

  }

  function createNote(note, index) {
    return (
      <Note 
      key={index}
      title={note.title}
      content={note.content.substring(0,50) + "..."} 
      />
    )
    }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote}/>
      {notes.map(createNote)};
      <Footer />
    </div>
  );
}

export default App;