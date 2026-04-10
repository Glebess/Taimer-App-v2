import TaskList from "./TaskList/TaskList";
import NewTaskPanel from "./NewTaskPanel/NewTaskPanel";

const Todo = (props) => {
  const { allTasks, setAllTasks } = props;

  return (
    <div style={{ padding: "20px" }}>
      <NewTaskPanel setAllTasks={setAllTasks} allTasks={allTasks} />
      <TaskList allTasks={allTasks} setAllTasks={setAllTasks} />
    </div>
  );
};
export default Todo;
