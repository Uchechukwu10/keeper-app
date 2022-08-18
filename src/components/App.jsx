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
      id={index}
      title={note.title}
      content={note.content.substring(0,50) + "..."} 
      deleteItem={deleteItem}
      />
    )
  }

  function deleteItem(id) {
    console.log(`I don delete item wey get id ${id}`);
    setNotes(prevValue => {
      return prevValue.filter((item, index) => {
        return index !== id
      })
    })
  }



  return (
    <div className="container">
      <Header />
      <CreateArea addNote={addNote}/>
      <div className="notes">{notes.map(createNote)}</div>
      <Footer />
    </div>
  );
}

export default App;