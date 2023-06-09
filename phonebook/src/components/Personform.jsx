import React from "react";

function Personform({ savePhoneDetails }) {
  return (
    <div>
      <form onSubmit={savePhoneDetails}>
        <div>
          name: <input type="text" name="" id="name" />
          <br />
          number: <input type="number" name="" id="no" />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
}

export default Personform;
