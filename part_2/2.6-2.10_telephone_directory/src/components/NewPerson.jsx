const NewPerson = ({
  newName,
  newNumber,
  handleNameChange,
  handleNumberChange,
  addPerson,
}) => {
  return (
    <>
      <form>
        <>
          name: <input value={newName} onChange={handleNameChange} />
        </>
        <br />
        <br />
        <>
          number:{" "}
          <input value={newNumber} onChange={handleNumberChange}></input>
        </>
        <br />
        <br />
        <>
          <button type="submit" onClick={addPerson}>
            add
          </button>
        </>
      </form>
    </>
  );
};

export default NewPerson;
