import Person from "./Person";

const Persons = ({ filteredData, deletePerson }) => {
  return (
    <ul>
      {filteredData.map((person) => (
        <Person key={person.id} person={person} deletePerson={deletePerson} />
      ))}
    </ul>
  );
};

export default Persons;
