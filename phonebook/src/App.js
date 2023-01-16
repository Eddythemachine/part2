import { useState } from "react";

const App = () => {
 const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
 const [newName, setNewName] = useState([...persons]);

 const savePhoneDetails = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  console.log(name);
  const data = {
   name: name,
  };
  let newData = [];
  newData = [...newName];
  newData.push(data);
  setNewName(newData);
 };
 console.log(newName);
 return (
  <div>
   <h2>Phonebook</h2>
   <form onSubmit={savePhoneDetails}>
    <div>
     name: <input type="text" name="" id="name" />
    </div>
    <div>
     <button type="submit">add</button>
    </div>
   </form>
   <h2>Numbers</h2>
   {/* <div>debug: {newName}</div> */}
  </div>
 );
};

export default App;
