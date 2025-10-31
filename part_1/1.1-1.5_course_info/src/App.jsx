const Header = (props) => {
  console.log("course = ", props);
  const data = props;
  return (
    <>
      <h1>{data.name}</h1>
    </>
  );
};

const Content = (props) => {
  console.log("content = ", props.parts);
  return (
    <>
      <Part parts={props} />
    </>
  );
};

const Total = (props) => {
  console.log("total = ", props.parts);
  const data = props.parts;
  return (
    <>
      <p>
        Number of exercises:{" "}
        {data[0].exercises + data[1].exercises + data[2].exercises}
      </p>
    </>
  );
};

// content: content-props/parts/part1
// part: part-props/content-props/parts/part1
const Part = (props) => {
  console.log("part = ", props.parts.parts);
  const data = props.parts.parts;
  return (
    <>
      {data[0].name} - {data[0].exercises}
      <br />
      {data[1].name} - {data[1].exercises}
      <br />
      {data[2].name} - {data[2].exercises}
    </>
  );
};

const App = () => {
  const course = {
    name: "Half stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using propos to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default App;
