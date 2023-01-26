import React from "react";

function Persons({ data }) {
 return (
  <div>
   {data.map((el) => {
    const { id, no, name } = el;
    console.log(id);
    return (
     <p key={id}>
      Name:{name}: {no}
     </p>
    );
   })}
  </div>
 );
}

export default Persons;
