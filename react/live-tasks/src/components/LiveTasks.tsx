import { useRef, useContext } from "react";

import styles from "./LiveTasks.module.css";
import { TaskContext } from "./store/tasks-context";

const LiveTasks: React.FC = () => {
  const taskRef = useRef<HTMLInputElement>(null);
  const taskCtx = useContext(TaskContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const userTask = taskRef.current!.value;

    if (userTask.trim().length === 0) {
      //throw some error
      return;
    }

    taskCtx.addTask(userTask);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">Task</label>
      <input type="text" id="text" ref={taskRef} />
      <button type="submit">Add</button>
    </form>
  );
};

export default LiveTasks;
