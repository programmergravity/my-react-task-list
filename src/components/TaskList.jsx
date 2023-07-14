import React from "react";
import { useState } from "react";


export const TaskList = () => {

  const [taskList, setTaskList] = useState([
    {name: 'mi primer tarea', done: false},
    {name: 'mi segunda tarea', done: false},
    {name: 'mi tercer tarea', done: false},
    {name: 'mi cuarta tarea', done: false},
  ])
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
          <tbody>
          {taskList.map(task => (
            <tr key={task.name}>
              <td>
                {task.name}
              </td>
            </tr>
            ))
          }
          </tbody>
        </table>
    </div>
  );
};


