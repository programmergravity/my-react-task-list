import React from 'react';
import Task from './Task';

const TaskList = () => {
  const tasks = [
    { id: 1, name: 'Preparar el desayuno', completed: true },
    { id: 2, name: 'Crear una lista de tareas', completed: true },
    { id: 3, name: 'Repasar los Hooks en React', completed: false },
    { id: 4, name: 'Entrar a la clase de programacion', completed: false },
];

  return (
    <div className='list'>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;