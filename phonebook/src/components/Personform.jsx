import React from "react";

function Personform({ savePhoneDetails, filterPhoneNumbers }) {
 return (
  <div>
   <form onSubmit={savePhoneDetails}>
    <div>
     name: <input type="text" name="" id="name" />
     <br />
     number: <input type="number" name="" id="no" />
    </div>
    <div>
     <button type="submit" onMouseLeave={filterPhoneNumbers}>
      add
     </button>
    </div>
   </form>
  </div>
 );
}

export default Personform;
