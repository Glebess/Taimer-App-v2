import Header from "./components/Header/Header";

import styles from "./App.module.css";
import TasksSector from "./components/TasksSector/TasksSector";
import { useState } from "react";
function App() {
  const [allTasks, setAllTasks] = useState([
    {
      taskId: 1,
      taskTitle: "1212",
      taskPriority: "base",
      taskСompleted: false,
    },
  ]);
  return (
    <div className={styles.main_div}>
      <Header />
      <div className={styles.taimer_div}>
        <div className={styles.taimer}>
          <TasksSector allTasks={allTasks} setAllTasks={setAllTasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
