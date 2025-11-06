import { useState } from "react";

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const MostVoted = ({ votes, anecdotes }) => {
  const greatestIndex = votes.indexOf(Math.max(...votes));
  console.log("greates index:", greatestIndex);
  return <h3>Most Voted: {anecdotes[greatestIndex]}</h3>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handleAnecdoteClick = () => {
    const anecdote = (max) => Math.floor(Math.random() * max);
    setSelected(anecdote(anecdotes.length));
  };

  const handleAnecdoteVote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
    console.log(votes);
  };

  return (
    <>
      <h4>{anecdotes[selected]}</h4>
      <h4>has {votes[selected]} votes</h4>
      <Button text={"new anecdote"} onClick={handleAnecdoteClick} />
      <Button text={"vote"} onClick={handleAnecdoteVote} />
      <MostVoted votes={votes} anecdotes={anecdotes} />
    </>
  );
};

export default App;
