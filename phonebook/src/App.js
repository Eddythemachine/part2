// Imports
import { useState, useEffect } from "react";
import Personform from "./components/Personform.jsx";
import Persons from "./components/Persons.jsx";
import services from "./services/services.js";

const App = () => {
  // useState
  const [persons, setPersons] = useState([]);
  const [searchWorld, setSearchWorld] = useState("");

  // Get data
  function getData() {
    services.getNumber().then((res) => {
      setPersons(res.data);
    });
  }

  useEffect(() => {
    return () => {
      getData();
    };
  }, []);

  // Updating/editing number

  // Adding phonebook
  const savePhoneDetails = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const no = document.getElementById("no").value;
    // const id = persons.length + 1;
    const data = {
      name: name,
      no: no,
    };
    let newData = [];
    newData = [...persons];
    const found = persons.some(
      (el) => el.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
    const checkNo = persons.some((el) => +el.no === +no);
    if (found && checkNo) {
      alert(`${name} exists in phone book`);
    } else if (!checkNo) {
      const nameToChange = persons.find((el) => {
        return el.name === name;
      });
      console.log(nameToChange);
      const url = `http://localhost:3001/persons/${nameToChange.id}`;
      services.updateNumber(url, data);
      getData();
    } else {
      services.createNumber(data).then((response) => {
        getData();
      });
    }

    getData();
  };

  const showList = persons.filter((el) => {
    return el.name.toLowerCase().includes(searchWorld.toLowerCase());
  });
  // Filtering the phonebook list
  function filterPhoneNumbers(event) {
    setSearchWorld(event.target.value);
  }

  const deleteBtn = (id) => {
    services.getNumber().then((res) => {
      const data = res.data;
      const newList = data.filter((el) => {
        return id !== el.id;
      });
      //  const delItem = data.find((el) => {
      //   return id === el.id;
      //  });
      setPersons(newList);
      services.deleteNumber(`http://localhost:3001/persons/${id}`);
    });
  };

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
      <Persons data={showList} deleteBtn={deleteBtn} />
    </div>
  );
};

export default App;
