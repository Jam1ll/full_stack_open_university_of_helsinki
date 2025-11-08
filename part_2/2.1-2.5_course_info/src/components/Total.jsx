const Total = ({ parts }) => {
  console.log("from total:", parts);

  const total = parts.reduce((accumulator, actual) => {
    return accumulator + actual.exercises;
  }, 0);

  return (
    <>
      <br />
      Total of <b>{total}</b> exercises
    </>
  );
};

export default Total;
