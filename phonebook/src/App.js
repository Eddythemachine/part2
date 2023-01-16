import { useState } from "react";

const App = () => {
 const [persons, setPersons] = useState([
  { name: "Arto Hellas", no: "0807424244", id: 1 },
 ]);
 const [newName, setNewName] = useState([...persons]);

 const savePhoneDetails = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const no = document.getElementById("no").value;
  const id = newName.length + 1;
  const data = {
   name: name,
   no: no,
   id: id,
  };
  let newData = [];
  newData = [...newName];
  newData.push(data);
  const found = newName.some(
   (el) => el.name.toLocaleLowerCase() === name.toLocaleLowerCase()
  );
  if (found) {
   alert(`${name} exists in phone book`);
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
     <br />
     number: <input type="number" name="" id="no" />
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
