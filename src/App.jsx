import React from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import "./App.css";
import "./Header.css";
import "./TaskList.css";


function App() {
  return (
  <main className="container-main">
  <div className="container">
    <Header className="header" />
    <TaskList />
    <div className="ctner-clear">
    <h1 className="title-clear">Tienes 2 tareas pendientes</h1><button className="btn-clear">CLEAR</button>
    </div>
  </div>
  </main>
  );
}


export default App