import React from "react";

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tasks = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir Trabalhar'];

class Tasks extends React.Component {
  render () {
    return (
      <ul>{ tasks.map( task => Task(task)) }</ul>
    );
  }
}

export default Tasks;