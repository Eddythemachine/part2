import React from "react";

function Persons({ data, deleteBtn }) {
 return (
  <div>
   {data.map((el) => {
    const { id, no, name } = el;
    console.log(id);
    return (
     <p key={id}>
      Name:{name}: {no}
      <button
       onClick={() => {
        deleteBtn(id);
       }}
      >
       delete
      </button>
     </p>
    );
   })}
  </div>
 );
}

export default Persons;
