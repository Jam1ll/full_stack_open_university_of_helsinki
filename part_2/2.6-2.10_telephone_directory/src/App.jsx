import { useState } from "react";
import Person from "./components/Person";

const App = () => {
  //hooks
  const [persons, setPerson] = useState([{ id: 1, name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  //add a new person
  const addPerson = (event) => {
    event.preventDefault();
    console.log(event);

    const newPerson = {
      id: persons.length + 1,
      name: newName,
    };
    const newArrayOfPersons = persons.concat(newPerson);

    setPerson(newArrayOfPersons);
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
