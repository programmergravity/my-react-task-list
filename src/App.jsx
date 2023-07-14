import React from "react";
import Header from "./components/Header";
import { Task } from "./components/Task";
import { TaskList } from "./components/TaskList";

function createNewTask(taskName) {
  alert(taskName)
}

function App() {
  return (
    <main className="container-main">
      <div className="container">
        <Header />
        <Task createNewTask={createNewTask} />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
