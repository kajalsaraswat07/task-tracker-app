import { useState } from "react";

const TaskItem = ({ task, setTasks }) => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(task.text);

  const toggleStatus = () => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = () => {
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  const saveEdit = () => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === task.id ? { ...t, text } : t
      )
    );
    setEdit(false);
  };

  return (
    <li className={task.completed ? "completed" : ""}>
      {edit ? (
        <input value={text} onChange={(e) => setText(e.target.value)} />
      ) : (
        <span>{task.text}</span>
      )}

      <div>
        <button onClick={toggleStatus}>
          {task.completed ? "Done" : "Pending"}
        </button>

        {edit ? (
          <button onClick={saveEdit}>Save</button>
        ) : (
          <button onClick={() => setEdit(true)}>Edit</button>
        )}

        <button onClick={deleteTask}>Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;
