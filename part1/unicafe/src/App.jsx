import { useState } from 'react';
import PropTypes from 'prop-types';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good' handleClick={() => setGood(good + 1)} />
      <Button text='neutral' handleClick={() => setNeutral(neutral + 1)} />
      <Button text='bad' handleClick={() => setBad(bad + 1)} />

      <h1>statistics</h1>
      {good > 0 || neutral > 0 || bad > 0 ? <Statistics good={good} neutral={neutral} bad={bad} /> : <div>No feedback given</div>}
    </div>
  );
}

function Button({ text, handleClick }) {
  return <button onClick={handleClick}>{text}</button>;
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

function Statistics({ good, neutral, bad }) {
  const total = good + neutral + bad;
  /* average ((good * 1) + (neutral * 0) + (bad * -1) / total) */
  const average = (good - bad) / total;
  const positiveRatings = (good / total) * 100;
  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine text='good' value={good} />
          <StatisticsLine text='neutral' value={neutral} />
          <StatisticsLine text='bad' value={bad} />
          <StatisticsLine text='all' value={total} />
          <StatisticsLine text='average' value={average} />
          <tr>
            <td>positive</td>
            <td>{positiveRatings}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

function StatisticsLine({ text, value }) {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}
StatisticsLine.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
