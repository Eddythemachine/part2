import { useState } from "react";
import Personform from "./components/Personform.jsx";
import Persons from "./components/Persons.jsx";

const App = () => {
 const [persons, setPersons] = useState([
  { name: "Arto Hellas", no: "040-123456", id: 1 },
  { name: "Ada Lovelace", no: "39-44-5323523", id: 2 },
  { name: "Dan Abramov", no: "12-43-234345", id: 3 },
  { name: "Mary Poppendieck", no: "39-23-6423122", id: 4 },
 ]);
 const [newName, setNewName] = useState([...persons]);
 const [filterList, setFilterList] = useState([...persons]);

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
  filterPhoneNumbers();
  if (found) {
   alert(`${name} exists in phone book`);
  } else {
   filterPhoneNumbers();
  }
 };
 function filterPhoneNumbers() {
  const filtervalue = document.getElementById("filtervalue").value;
  const displayFilter = newName.filter((el) => {
   return el.name.toLocaleLowerCase().includes(filtervalue.toLocaleLowerCase());
  });
  setFilterList(displayFilter);
 }
 return (
  <div>
   <h1>Phonebook</h1>
   <form action="">
    filter with:{" "}
    <input type="text" id="filtervalue" onChange={filterPhoneNumbers} />
   </form>

   <h2>Add a new</h2>
   <Personform savePhoneDetails={savePhoneDetails} />
   <h2>Numbers</h2>
   <Persons data={filterList} />
  </div>
 );
};

export default App;
