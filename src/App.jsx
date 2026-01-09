import { useEffect, useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <h1>Task Tracker</h1>
      <TaskInput setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
