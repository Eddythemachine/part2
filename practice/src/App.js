import { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
 const [notes, setNotes] = useState([]);
 const viewNote = (event) => {
  // console.log(event.target.value);
 };
 let newNote = [...notes];
 const addNote = (event) => {
  event.preventDefault();
  const note = document.querySelector(".notes");
  const important = document.getElementById("imp");
  const isImportant = important.checked ? true : false;
  const id = notes.length + 1;
  const newCreatedNote = {
   note: note.value,
   id: id,
   important: isImportant,
  };
  newNote.push(newCreatedNote);
  setNotes(newNote);
  // console.log("button clicked", event.target, );
  // console.log(newCreatedNote);
 };

 const filterArray = newNote.filter((el) => {
  return el.important;
 });

 const displayOnlyImportantList = () => {
  const displayList = document.getElementById("display");
  showNotes = displayList?.checked ? filterArray : newNote;
  console.log(`Outside ${displayList?.checked}`);
 };
 return (
  <div>
   <h1>Notes</h1>
   <form onSubmit={addNote}>
    <label htmlFor="important">Important</label>
    <input type="checkbox" name="important" id="imp" />
    <br />
    <input onChange={viewNote} className={"notes"} />
    <button type="submit">save</button>
   </form>

   <Note note={showNotes} />
   <form action="">
    <label htmlFor="show">Show Only Important List</label>
    <input
     type="checkbox"
     name="show"
     id="display"
     onChange={displayOnlyImportantList}
    />
   </form>
  </div>
 );
};

export default App;
