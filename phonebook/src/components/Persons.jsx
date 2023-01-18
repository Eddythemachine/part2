import React from "react";

function Persons({ data }) {
 return (
  <div>
   {data.map((el) => {
    const { id, no, name } = el;
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
