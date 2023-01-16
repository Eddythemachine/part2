import { useState } from "react";

const App = () => {
 const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
 const [newName, setNewName] = useState([...persons]);

 const savePhoneDetails = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const data = {
   name: name,
  };
  let newData = [];
  newData = [...newName];
  newData.push(data);
  const found = newName.some(
   (el) => el.name.toLocaleLowerCase() === name.toLocaleLowerCase()
  );
  if (found) {
   alert("Name exists in phone book");
  } else {
   setNewName(newData);
  }

  console.log(newName);
 };

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
