import TaskItem from "./TaskItem";

const TaskList = ({ tasks, setTasks }) => {
  return (
    <ul className="task-list">
      {tasks.length === 0 && <p>No tasks yet.</p>}
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} setTasks={setTasks} />
      ))}
    </ul>
  );
};

export default TaskList;
