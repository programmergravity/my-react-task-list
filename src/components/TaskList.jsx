import React from "react";
import Task from "./Task";

const TaskList = () => {
  const tasks = [
    { id: 1, name: "Levantarme a las 7am", completed: false },
    { id: 2, name: "Preparar el desayuno", completed: true },
    { id: 3, name: "Leer el libro ''1984''", completed: false },
    { id: 4, name: "Crear una lista de tareas", completed: true },
    { id: 5, name: "Repasar los Hooks en React", completed: false },
    { id: 6, name: "Entrar a la clase de programacion", completed: false },
  ];

  return (
    <div className="list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
