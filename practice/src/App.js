import { useState } from "react";
import React from "react";
import Note from "./components/Note.jsx";

function App() {
 const [note, setNote] = useState([{ name: "eddy", id: 0 }]);
 const [newNote, setNewNote] = useState([...note]);
 console.log("Render");

 const addNote = (event) => {
  event.preventDefault();
  const name = document.getElementById("add-note").value;
  const date = new Date().toISOString();
  const id = newNote.length + 1;
  const checkImportance = document.getElementById("imp");
  const important = checkImportance.checked ? true : false;
  let data = {
   name: name,
   date: date,
   id: id,
   important: important,
  };
  console.log(newNote);

  notes.push(data);
  setNewNote(newNote.concat(data));
 };

 let notes = [];
 const filteredList = newNote.filter((el) => {
  return el.important;
 });
 console.log(filteredList);
 return (
  <div>
   <h1>NOTES APP</h1>
   <form action="" onSubmit={addNote}>
    <label htmlFor="add note">Add new note</label>
    <br />
    <input type="text" name="add note" id="add-note" />
    <button type="submit">Submit</button>
    <br />
    <label htmlFor="">Important</label>
    <input type="checkbox" name="important" id="imp" />
   </form>
   {/* <Note note={newNote} /> */}
  </div>
 );
}

export default App;
