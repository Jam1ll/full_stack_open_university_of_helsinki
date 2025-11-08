import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => {
  console.log("from Course:", course);
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <hr />
    </>
  );
};

export default Course;
