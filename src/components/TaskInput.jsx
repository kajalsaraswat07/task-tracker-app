import { useState } from "react";

const TaskInput = ({ setTasks }) => {
  const [task, setTask] = useState("");

  const addTask = () => {
    if (!task.trim()) return;

    setTasks((prev) => [
      ...prev,
      { id: Date.now(), text: task, completed: false }
    ]);
    setTask("");
  };

  return (
    <div className="input-section">
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task..."
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
};

export default TaskInput;
