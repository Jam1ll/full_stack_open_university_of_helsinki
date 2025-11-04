import { useState } from "react";

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  //const [good, setGood] = useState(0);
  //const [neutral, setNeutral] = useState(0);
  //const [bad, setBad] = useState(0);

  const [rating, setRating] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleGoodClick = () => setRating({ ...rating, good: rating.good + 1 });
  const handleNeutralClick = () =>
    setRating({ ...rating, neutral: rating.neutral + 1 });
  const handleBadClick = () => setRating({ ...rating, bad: rating.bad + 1 });

  return (
    <>
      <h1>Give Feedback</h1>
      <Button text={"Good"} onClick={handleGoodClick} />
      <Button text={"Neutral"} onClick={handleNeutralClick} />
      <Button text={"Bad"} onClick={handleBadClick} />
      <h1>Statistics</h1>
      good: {rating.good}
      <br />
      neutral: {rating.neutral}
      <br />
      bad: {rating.bad}
    </>
  );
};

export default App;
