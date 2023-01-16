import { useState } from "react";
import React from "react";
import Note from "./components/Note.jsx";

function App() {
 const [note, setNote] = useState([{ name: "eddy", id: 0 }]);
 const [newNote, setNewNote] = useState([]);
 console.log("Render");

 const addNote = (event) => {
  event.preventDefault();
  const name = document.getElementById("add-note").value;
  const date = new Date().toISOString();
  const id = newNote.length + 1;
  let data = {
   name: name,
   date: date,
   id: id,
  };
  console.log(newNote);

  notes.push(data);
  setNewNote(notes);
 };
 console.log(newNote);
 console.log(note);
 let notes = [];
 return (
  <div>
   <h1>NOTES APP</h1>
   <form action="" onSubmit={addNote}>
    <label htmlFor="add note">Add new note</label>
    <br />
    <input type="text" name="add note" id="add-note" />
    <button type="submit">Submit</button>
   </form>
   {/* <Note note={newNote} /> */}
  </div>
 );
}

export default App;
