import React from 'react'

//Exercises 1.3 - 1.5
const App = () => {
  const course = {
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
};

const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
        )
      };


const Content = (props) => {
    return (
      <div>
        <p> {props.parts} </p>
      </div>
    )
};

const Total = (props) => {
    return (
      <div>
        <p>Total number of exercises: parts={props.parts}</p>
      </div>
    )
}


export default App;


{/* // Exercise 1.1 - 1.2
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
};

const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
        )
      };

const Content = (props) => {
    return (
      <div>
        <p> {props.part1}: {props.exercises1} </p>
        <p> {props.part2}: {props.exercises2} </p>
        <p> {props.part3}: {props.exercises3} </p>
      </div>
    )
};

const Total = (props) => {
    return (
      <div>
        <p>Total number of exercises: {props.exercises1 + props.exercises2 + props.exercises3}</p>
      </div>
    )
} */}