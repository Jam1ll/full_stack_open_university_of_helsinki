import { useState } from "react";
import Person from "./components/Person";

const App = () => {
  //hooks
  const [persons, setPerson] = useState([{ id: 1, name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

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
        };
        const newArrayOfPersons = persons.concat(newPerson);

        setPerson(newArrayOfPersons);
      }
    }
    setNewName("");
  };

  const handleNameChange = (event) => {
    const value = event.target.value;
    setNewName(value);
  };

  return (
    <>
      <h2>PhoneBook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>

        <div>
          <button type="submit" onClick={addPerson}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </ul>
    </>
  );
};

export default App;
