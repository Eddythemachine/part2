// Imports
import { useState, useEffect } from "react";
import Personform from "./components/Personform.jsx";
import Persons from "./components/Persons.jsx";
import axios from "axios";

const App = () => {
 // useState
 const [persons, setPersons] = useState([]);
 // Using effect to fetch data from our local db Axios

 const [newName, setNewName] = useState([...persons]);
 const [filterList, setFilterList] = useState([...newName]);

 // Adding phonebook
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
   filterPhoneNumbers();
   alert(`${name} exists in phone book`);
  } else {
   filterPhoneNumbers();
   setNewName(newData);
  }
 };

 // Filtering the phonebook list
 function filterPhoneNumbers() {
  const filtervalue = document.getElementById("filtervalue").value;
  const displayFilter = newName.filter((el) => {
   return el.name.toLocaleLowerCase().includes(filtervalue.toLocaleLowerCase());
  });
  setFilterList(displayFilter);
 }
 useEffect(() => {
  console.log("Start effect");
  return () => {
   axios.get("http://localhost:3001/persons").then((res) => {
    console.log("Inside effect");
    setPersons(res.data);
   });
  };
 }, []);
 console.log(newName);
 return (
  <div>
   <h1>Phonebook</h1>
   <form action="">
    filter with:{" "}
    <input type="text" id="filtervalue" onChange={filterPhoneNumbers} />
   </form>

   <h2>Add a new</h2>
   <Personform
    savePhoneDetails={savePhoneDetails}
    filterPhoneNumbers={filterPhoneNumbers}
   />
   <h2>Numbers</h2>
   <Persons data={filterList} />
  </div>
 );
};

export default App;
