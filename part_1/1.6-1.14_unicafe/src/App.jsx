/* eslint-disable no-unused-vars */
import { useState } from "react";

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Statistics = ({ all, average, positivePercentage }) => {
  return (
    <>
      <h1>Statistics</h1>
      <table
        style={{
          width: 50 + "%",
          border: 1 + "px solid black",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>All</th>
            <th>Average</th>
            <th>Positive percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{all}</td>
            <td>{average}</td>
            <td>{positivePercentage}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  //const [good, setGood] = useState(0);
  //const [neutral, setNeutral] = useState(0);
  //const [bad, setBad] = useState(0);

  const [rating, setRating] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
    average: 0.0,
    positivePercentage: 0.0,
  });

  const handleGoodClick = () => {
    const good = rating.good + 1;
    const all = good + rating.neutral + rating.bad;
    const average =
      ((good * 1 + rating.neutral * 0 + rating.bad * -1) / all) * 100;
    const positivePercentage = (good * 100) / all;
    setRating({
      ...rating,
      good: good,
      all: all,
      average: average,
      positivePercentage: positivePercentage,
    });
  };

  const handleNeutralClick = () => {
    const neutral = rating.neutral + 1;
    const all = rating.good + neutral + rating.bad;
    const average =
      ((rating.good * 1 + neutral * 0 + rating.bad * -1) / all) * 100;
    const positivePercentage = (rating.good * 100) / all;
    setRating({
      ...rating,
      neutral: neutral,
      all: all,
      average: average,
      positivePercentage: positivePercentage,
    });
  };

  const handleBadClick = () => {
    const bad = rating.bad + 1;
    const all = rating.good + rating.neutral + bad;
    const average =
      ((rating.good * 1 + rating.neutral * 0 + bad * -1) / all) * 100;
    const positivePercentage = (rating.good * 100) / all;
    const newBad = rating.bad + 1;
    setRating({
      ...rating,
      bad: newBad,
      all: all,
      average: average,
      positivePercentage: positivePercentage,
    });
  };

  return (
    <>
      <h1>Give Feedback</h1>
      <Button text={"Good"} onClick={handleGoodClick} />
      <Button text={"Neutral"} onClick={handleNeutralClick} />
      <Button text={"Bad"} onClick={handleBadClick} />
      <Statistics
        all={rating.all}
        average={rating.average}
        positivePercentage={rating.positivePercentage}
      />
    </>
  );
};

export default App;
