import { useState } from "react";
import Personform from "./components/Personform.jsx";

const App = () => {
 const [persons, setPersons] = useState([
  { name: "Arto Hellas", number: "040-123456", id: 1 },
  { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
  { name: "Dan Abramov", number: "12-43-234345", id: 3 },
  { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
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
   <h1>Phonebook</h1>
   <form action="">
    {/* filter with: <input type="text" onChange={filterPhoneNumbers}/> */}
   </form>

   <h2>Add a new</h2>
   <Personform savePhoneDetails={savePhoneDetails} />
   <h2>Numbers</h2>
  </div>
 );
};

export default App;
