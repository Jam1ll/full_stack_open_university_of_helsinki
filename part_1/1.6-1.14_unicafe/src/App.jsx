/* eslint-disable no-unused-vars */
import { useState } from "react";

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Statistics = (props) => {
  if (props.all === 0) {
    return <>No feedback given</>;
  }
  return (
    <>
      <StatisticLine text={"good"} value={props.good} />
      <br />
      <StatisticLine text={"neutral"} value={props.neutral} />
      <br />
      <StatisticLine text={"bad"} value={props.bad} />
      <br />
      <StatisticLine text={"all"} value={props.all} />
      <br />
      <StatisticLine text={"average"} value={props.average} />
      <br />
      <StatisticLine
        text={"positive percentage"}
        value={props.positivePercentage}
      />
    </>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <>
      {text} - {value}
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
      <h1>Statistics</h1>
      <Statistics
        good={rating.good}
        neutral={rating.neutral}
        bad={rating.bad}
        all={rating.all}
        average={rating.average}
        positivePercentage={rating.positivePercentage}
      />
    </>
  );
};

export default App;
