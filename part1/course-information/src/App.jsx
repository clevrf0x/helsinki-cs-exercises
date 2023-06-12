import PropTypes from 'prop-types';

export default function App() {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
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

function Content({ part1, part2, part3 }) {
  return (
    <div>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </div>
  );
}
Content.propTypes = {
  part1: PropTypes.object.isRequired,
  part2: PropTypes.object.isRequired,
  part3: PropTypes.object.isRequired,
};

function Part({ part }) {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
}
Part.propTypes = {
  part: PropTypes.object.isRequired,
};

function Total({ total }) {
  return <p>Number of exercises {total}</p>;
}
Total.propTypes = {
  total: PropTypes.number.isRequired,
};
