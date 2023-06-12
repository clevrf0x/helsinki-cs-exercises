import PropTypes from 'prop-types';

export default function App() {
  const course = 'Half Stack application development';
  const parts = [
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
  ];
  let total = parts.reduce((sum, part) => (sum += part.exercises), 0);

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={total} />
    </div>
  );
}

// Components
function Header({ course }) {
  return <h1>{course}</h1>;
}
Header.propTypes = {
  course: PropTypes.string.isRequired,
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

function Total({ total }) {
  return <p>Number of exercises {total}</p>;
}
Total.propTypes = {
  total: PropTypes.number.isRequired,
};
