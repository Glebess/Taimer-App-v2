import Button from "../../../componentsShare/Button";
import Field from "../../../componentsShare/Field";

import styles from "./NewTaskPanel.module.css";
import { useState } from "react";

import NewTaskSettings from "./NewTaskSettings";

const NewTaskPanel = (props) => {
  const { allTasks, setAllTasks } = props;

  const [newPriorityTask, setNewPriorityTask] = useState("base");
  const [onShowNewTaskSettings, setOnShowNewTaskSettings] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleClickAddTaskPanel = () => {
    setOnShowNewTaskSettings(!onShowNewTaskSettings);
  };

  const handleNewTask = () => {
    if (newTaskTitle.trim() === "") {
      alert("Поле задачи не может быть пустым!");
    } else {
      const newTask = {
        taskId: Date.now(),
        taskTitle: newTaskTitle,
        taskPriority: newPriorityTask,
        taskCompleted: false,
      };

      setAllTasks([...allTasks, newTask]);
      setNewTaskTitle("");
      setOnShowNewTaskSettings(false);
    }
  };

  return (
    <div className={styles.div_new_task_panel_container}>
      <Field
        className={styles.field_new_task_panel}
        placeHolder={"+ Создать задачу"}
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      />
      <div className={styles.div_add_task_more}>
        <Button
          className={styles.button_new_task_settings}
          onClick={handleClickAddTaskPanel}
          children={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#FFFFFF"
            >
              <path d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z" />
            </svg>
          }
        />
        <NewTaskSettings
          onShowNewTaskSettings={onShowNewTaskSettings}
          setNewPriorityTask={setNewPriorityTask}
          newPriorityTask={newPriorityTask}
        />
      </div>
      <Button
        disabled={newTaskTitle.length === 0}
        children={"Создать"}
        className={styles.button_new_task}
        onClick={handleNewTask}
        title={!newTaskTitle.trim() ? "Поле задачи пустое" : ""}
      />
    </div>
  );
};
export default NewTaskPanel;
