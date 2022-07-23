import { useContext } from "react";
import TaskItems from "./TaskItems";
import { TaskContext } from "./store/tasks-context";
import styles from "./Tasks.module.css";

const Tasks: React.FC = () => {
  const taskCtx = useContext(TaskContext);

  return (
    <ul className={styles.list}>
      {taskCtx.tasks.map((task) => (
        <TaskItems
          key={task.id}
          tasks={task.text}
          onRemoveTask={taskCtx.removeTask.bind(null, task.id)}
        />
      ))}
    </ul>
  );
};

export default Tasks;
