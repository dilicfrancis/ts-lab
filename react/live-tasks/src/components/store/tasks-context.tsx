import React, { useState } from "react";
import Task from "../../models/task";

type TaskContextObj = {
  tasks: Task[];
  addTask: (arg: string) => void;
  removeTask: (arg: string) => void;
};

export const TaskContext = React.createContext<TaskContextObj>({
  tasks: [],
  addTask: (arg: string) => {},
  removeTask: (arg: string) => {},
});

const TaskContextProvider: React.FC = (props) => {
  const [liveTasks, setLiveTasks] = useState<Task[]>([]);

  const liveTaskHandler = (task: string) => {
    const newTask = new Task(task);
    setLiveTasks((prev) => prev.concat(newTask));
  };

  const removeTaskHandler = (taskId: string) => {
    setLiveTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  const taskContextValues: TaskContextObj = {
    tasks: liveTasks,
    addTask: liveTaskHandler,
    removeTask: removeTaskHandler,
  };

  return (
    <TaskContext.Provider value={taskContextValues}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
