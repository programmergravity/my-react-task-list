import React, { useState } from "react";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ task }) => {
  const [completed, setCompleted] = useState(task.completed);

  const handleCheckboxChange = () => {
    setCompleted(!completed);
  };

  return (
    <div className="task-main">
      <div>
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCheckboxChange}
        />
        <span style={{ textDecoration: completed ? "line-through" : "none" }}>
          {task.name}
        </span>
      </div>
      <div className="task-icon">
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
};

export default Task;
