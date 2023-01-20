// Imports
import { useState, useEffect } from "react";
import Personform from "./components/Personform.jsx";
import Persons from "./components/Persons.jsx";
import axios from "axios";

const App = () => {
 // useState
 const [persons, setPersons] = useState([]);
 const [searchWorld, setSearchWorld] = useState("");

 // Adding phonebook
 const savePhoneDetails = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const no = document.getElementById("no").value;
  // const id = persons.length + 1;
  const data = {
   name: name,
   no: no,
   //  id: id,
  };
  let newData = [];
  newData = [...persons];
  newData.push(data);
  const found = persons.some(
   (el) => el.name.toLocaleLowerCase() === name.toLocaleLowerCase()
  );
  if (found) {
   alert(`${name} exists in phone book`);
  } else {
   axios.post("http://localhost:3001/persons", data).then((response) => {
    console.log(response);
    setPersons(newData);
   });
  }

  // axios.post("");
 };
 const showList = persons.filter((el) => {
  return el.name.toLowerCase().includes(searchWorld.toLowerCase());
 });
 // Filtering the phonebook list
 function filterPhoneNumbers(event) {
  setSearchWorld(event.target.value);
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
   <Persons data={showList} />
  </div>
 );
};

export default App;
