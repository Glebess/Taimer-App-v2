import Header from "./components/Header/Header";

import styles from "./App.module.css";
import Todo from "./components/Todo/Todo";
import { useEffect, useState } from "react";

function App() {
  const [allTasks, setAllTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      try {
        return JSON.parse(savedTasks);
      } catch (error) {
        console.error("Error load task", error);
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(allTasks));
  }, [allTasks]);
  return (
    <div className={styles.main_div}>
      <Header />
      <div className={styles.taimer_div}>
        <div className={styles.taimer}>
          <Todo allTasks={allTasks} setAllTasks={setAllTasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
