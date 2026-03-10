import Button from "../../componentsShare/Button.JSX";
import Field from "../../componentsShare/Field";

import styles from "./TasksSector.module.css";
import NewTaskMenuPanel from "../NewTaskMenuPanel/NewTaskMenuPanel";

import { useState } from "react";
import TaskList from "../TaskList/TaskList";

const TasksSector = (props) => {
  const { allTasks, setAllTasks } = props;

  const [newPriorityTask, setNewPriorityTask] = useState("base");
  const [onShowNewTaskPanel, setOnShowNewTaskPanel] = useState(false);
  {
    console.log(allTasks);
  }
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleClickAddTaskPanel = () => {
    setOnShowNewTaskPanel(!onShowNewTaskPanel);
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
      setOnShowNewTaskPanel(false);
    }
  };

  return (
    <div className={styles.div_task_sector_container}>
      <div className={styles.div_fields_container}>
        <div className={styles.div_field_add_task}>
          <Field
            className={styles.div_field_add_task_input}
            placeHolder={"+ Добавить задачу"}
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />
          <div className={styles.div_add_task_more}>
            <Button
              className={styles.div_add_task_more_button}
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

            <NewTaskMenuPanel
              onShowNewTaskPanel={onShowNewTaskPanel}
              setNewPriorityTask={setNewPriorityTask}
              newPriorityTask={newPriorityTask}
            />
          </div>
          <Button
            disabled={newTaskTitle.length === 0}
            children={"Добавить"}
            className={styles.div_field_add_task_button}
            onClick={handleNewTask}
            title={!newTaskTitle.trim() ? "Поле задачи пустое" : ""}
          />
        </div>
      </div>
      <TaskList
        allTasks={allTasks}
        setAllTasks={setAllTasks}
        setNewPriorityTask={setNewPriorityTask}
        newPriorityTask={newPriorityTask}
      />
    </div>
  );
};
export default TasksSector;
