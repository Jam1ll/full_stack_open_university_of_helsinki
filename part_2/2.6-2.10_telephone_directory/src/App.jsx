import { useState, useEffect } from "react";
import personService from "./services/personService";
import Filter from "./components/Filter";
import NewPerson from "./components/NewPerson";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

const App = () => {
  //hooks
  const [persons, setPerson] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [message, setMessage] = useState(null);
  const [isErrorMessage, setIsErrorMessage] = useState(false);

  useEffect(() => {
    personService
      .getAllPersons()
      .then((persons) => setPerson(persons))
      .catch((error) => console.log(error.message));
  }, []); // [] means it'll run just 1 time and not at every render

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

  const addPerson = (event) => {
    event.preventDefault(); //prevent F5

    if (newName.length === 0) {
      alert("the name cannot be empty");
    } else {
      const foundDuplicate = validateName(persons);

      if (foundDuplicate) {
        const confirmation = window.confirm(
          `${foundDuplicate.name} is already added to the list. Replace old number with a new one?`
        );
        console.log(confirmation);

        if (confirmation) {
          const updatedPerson = {
            id: foundDuplicate.id,
            name: foundDuplicate.name,
            number: newNumber,
          };

          personService
            .updatePerson(updatedPerson.id, updatedPerson)
            .then(() => {
              setPerson(
                persons.map((person) =>
                  person.id !== updatedPerson.id ? person : updatedPerson
                ) //re-render with the updated person.
              );
            })
            .then((response) => {
              setIsErrorMessage(false);
              setMessage(`Changed ${updatedPerson.name}'s number`);
              console.log("response", response);

              setTimeout(() => {
                setMessage(null);
              }, 5000);
            })
            .catch((error) => {
              setIsErrorMessage(true);
              setMessage(`Error changing ${updatedPerson.name}'s number`);
              console.log("error", error);

              setTimeout(() => {
                setMessage(null);
              }, 5000);
            });
        }
        setNewName("");
        setNewNumber("");
      } else {
        const newPerson = {
          id: `${persons.length + 1}`,
          name: newName,
          number: newNumber,
        };

        personService
          .createPerson(newPerson)
          .then((response) => {
            setIsErrorMessage(false);
            setMessage(`Added ${newPerson.name}`);
            console.log("response", response);

            setTimeout(() => {
              setMessage(null);
            }, 5000);
          })
          .catch((error) => {
            setIsErrorMessage(true);
            setMessage(`Error adding ${newPerson.name}`);
            console.log("error", error);

            setTimeout(() => {
              setMessage(null);
            }, 5000);
          });
        setPerson(persons.concat(newPerson));
      }
    }
    setNewName("");
    setNewNumber("");
  };

  const deletePerson = (id) => {
    try {
      const personToDelete = persons.find((person) => person.id === id);
      if (window.confirm(`Delete ${personToDelete.name}?`)) {
        personService
          .deletePerson(id)
          .then(() => {
            const remainingPersons = persons.filter(
              (person) => person.id !== id
            );
            setPerson(remainingPersons);
          })
          .then((response) => {
            setIsErrorMessage(false);
            setMessage(`Deleted ${personToDelete.name}`);
            console.log("response", response);

            setTimeout(() => {
              setMessage(null);
            }, 5000);
          })
          .catch((error) => {
            setIsErrorMessage(true);
            setMessage(
              `Error deleting ${
                [personToDelete].name
              }. Maybe it has already been deleted.`
            );
            console.log("error", error);

            setTimeout(() => {
              setMessage(null);
            }, 5000);
          });
      }
    } catch (error) {
      console.log("error", error.message);
    }
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
      <Notification message={message} isErrorMessage={isErrorMessage} />
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
      <Persons filteredData={filteredData} deletePerson={deletePerson} />
    </>
  );
};

export default App;
