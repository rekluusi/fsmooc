import React, { useState } from 'react';

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, bad, neutral }) => {
  const total = good + neutral + bad;

  if (total === 0) {
    return <p>No feedback given</p>;
  }

  const average = (good - bad) / total;
  const positivePercentage = (good / total) * 100;

  return (
    <div>
      <h1>Statistics:</h1>
      <table>
        <tbody>
          <StatisticLine text="Good (+1):" value={good} />
          <StatisticLine text="Neutral (+-0):" value={neutral} />
          <StatisticLine text="Bad (-1):" value={bad} />
          <StatisticLine text="All votes:" value={total} />
          <StatisticLine text="Average:" value={average} />
          <StatisticLine text="Positive percentage:" value={`${positivePercentage} %`} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <>
      <div>
        <h1>Give feedback to the cafe by clicking the buttons below!</h1>
        <Button handleClick={handleGood} text={'Good'} />
        <Button handleClick={handleNeutral} text={'Neutral'} />
        <Button handleClick={handleBad} text={'Bad'} />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
