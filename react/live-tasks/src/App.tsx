import LiveTasks from "./components/LiveTasks";
import TaskContextProvider from "./components/store/tasks-context";
import Tasks from "./components/Tasks";

function App() {
  return (
    <TaskContextProvider>
      <LiveTasks />
      <Tasks />
    </TaskContextProvider>
  );
}

export default App;
