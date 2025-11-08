const Part = ({ part }) => {
  console.log("from Part:", part);
  return (
    <>
      {part.name} - exercises: {part.exercises}
      <br />
    </>
  );
};

export default Part;
