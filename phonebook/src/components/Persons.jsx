import React from "react";

function Persons({ data, deleteBtn, changeNo }) {
  return (
    <div>
      {data.map((el) => {
        const { id, no, name } = el;
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
            <button
              onClick={() => {
                changeNo(id);
              }}
            >
              Check id
            </button>
          </p>
        );
      })}
    </div>
  );
}

export default Persons;
