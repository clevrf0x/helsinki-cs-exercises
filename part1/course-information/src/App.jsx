import PropTypes from 'prop-types';

export default function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ]
  };

  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

// Components
function Header({ courseName }) {
  return <h1>{courseName}</h1>;
}
Header.propTypes = {
  courseName: PropTypes.string.isRequired,
};

function Content({ parts }) {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} part={part} />
      ))}
    </div>
  );
}
Content.propTypes = {
  parts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      exercises: PropTypes.number.isRequired,
    })
  ).isRequired,
};

function Part({ part }) {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
}
Part.propTypes = {
  part: PropTypes.shape({
    name: PropTypes.string.isRequired,
    exercises: PropTypes.number.isRequired,
  }).isRequired,
};

function Total({ parts }) {
  let total = parts.reduce((sum, part) => (sum += part.exercises), 0);
  return <p>Number of exercises {total}</p>;
}
Total.propTypes = {
  parts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      exercises: PropTypes.number.isRequired
    })
  ).isRequired,
};
