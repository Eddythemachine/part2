import React from "react";

function Note({ note }) {
 return (
  <div>
   <ul>
    {note.map((el) => {
     const { id, note } = el;
     //  console.log(note);
     return (
      <li key={id}>
       {/* <span>{id}</span> */}
       {note}
      </li>
     );
    })}
   </ul>
  </div>
 );
}

export default Note;
