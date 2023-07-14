import { useState } from "react";

export const Task = (props) => {
  console.log(props)
  const [ newTask, setNewTask ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createNewTask(newTask)
    localStorage.setItem("tasks", newTask);
    setNewTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
      type="text"
      placeholder="Adding your new task"
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      />
      <button>Add task</button>
    </form>
  );
};

