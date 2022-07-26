import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function createNote(note) {
return (
  <Note 
  key={note.key}
  title={note.title}
  content={note.content.substring(0,50) + "..."} 
  />
)
}

function App() {
  return (
    <div>
      <Header />
      <Footer />
      {notes.map(createNote)};
    </div>
  );
}

export default App;