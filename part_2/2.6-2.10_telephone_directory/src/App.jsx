import { useState } from "react";
import Data from "./components/Data";
import Filter from "./components/Filter";
import NewPerson from "./components/NewPerson";
import Persons from "./components/Persons";

const App = () => {
  //hooks
  const [persons, setPerson] = useState(Data);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const validateName = (arrayWithNames) => {
    console.log("array with names:", arrayWithNames);

    const formattedName = newName.replace(/\s/g, "").toLowerCase();

    console.log("searching", formattedName);

    const found = arrayWithNames.find((element) => {
      console.log("element", element);
      const formattedArrayName = element.name.replace(/\s/g, "").toLowerCase();
      console.log(`comparing ${formattedArrayName} with ${formattedName}`);
      return formattedArrayName === formattedName;
    });
    return found; //returns whether an object or undefined
  };

  //add a new person
  const addPerson = (event) => {
    event.preventDefault(); //prevent F5

    if (newName.length === 0) {
      alert("the name cannot be empty");
    } else {
      const foundDuplicate = validateName(persons);
      if (foundDuplicate) {
        alert(`${foundDuplicate.name} is already added to the list.`);
        setNewName("");
      } else {
        const newPerson = {
          id: persons.length + 1,
          name: newName,
          number: newNumber,
        };
        const newArrayOfPersons = persons.concat(newPerson);

        setPerson(newArrayOfPersons);
      }
    }
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    const value = event.target.value;
    setNewName(value);
  };

  const handleNumberChange = (event) => {
    const value = event.target.value;
    setNewNumber(value);
  };

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setNewFilter(value);
  };

  const filteredData =
    newFilter === ""
      ? persons
      : persons.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s/g, "")
            .includes(newFilter.toLowerCase().replace(/\s/g, ""))
        );

  return (
    <>
      <h2>PhoneBook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />

      <h2>Add a new</h2>
      <NewPerson
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <Persons filteredData={filteredData} />
    </>
  );
};

export default App;
