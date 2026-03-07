import styles from "./TaskList.module.css";
import Button from "../../componentsShare/Button";
import { useEffect, useRef, useState } from "react";

const TaskList = (props) => {
  const { allTasks, setAllTasks } = props;

  const inputRef = useRef(null);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [taskEditText, setTaskEditText] = useState("");

  // Устанавливаем фокус при появлении input
  useEffect(() => {
    if (editingTaskId && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editingTaskId]);

  // Редактирование задачи
  const handleTaskEdit = (task) => {
    setEditingTaskId(task.taskId);
    setTaskEditText(task.taskTitle);
  };

  // Сохранение изменений
  const handleSaveTask = (taskId) => {
    setAllTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.taskId === taskId ? { ...task, taskTitle: taskEditText } : task,
      ),
    );
    setEditingTaskId(null);
  };

  // Обработка нажатия клавиш
  const handleKeyDown = (e, taskId) => {
    if (e.key === "Enter") {
      handleSaveTask(taskId);
    } else if (e.key === "Escape") {
      setEditingTaskId(null);
    }
  };

  const handleTaskComplate = (taskId) => {
    setAllTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.taskId === taskId
          ? { ...task, taskIsСompleted: !task.taskIsСompleted }
          : task,
      ),
    );
  };

  return (
    <div className={styles.div_task_all}>
      {allTasks.length !== 0 ? (
        allTasks.map((task) => {
          const isEditing = editingTaskId === task.taskId;

          return (
            <div key={task.taskId} className={styles.div_task}>
              <input
                type="checkbox"
                className={styles.div_task_input_checkbox}
                id="task-complate"
                checked={task.taskIsСompleted}
                onChange={() => handleTaskComplate(task.taskId)}
              />
              <div
                className={styles.div_task_text}
                onClick={() => !isEditing && handleTaskEdit(task)}
              >
                {isEditing ? (
                  <input
                    className={styles.input_edit_task}
                    ref={inputRef}
                    value={taskEditText}
                    onChange={(e) => setTaskEditText(e.target.value)}
                    onBlur={() => handleSaveTask(task.taskId)}
                    onKeyDown={(e) => handleKeyDown(e, task.taskId)}
                    name="editTask"
                  />
                ) : task.taskTitle === "" ? (
                  <p className={styles.p_title_task_none}>Нет заголовка</p>
                ) : (
                  <p className={styles.p_title_task}>{task.taskTitle}</p>
                )}
              </div>
              <Button
                className={styles.button_task_more}
                children={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#7c7b7b"
                  >
                    <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
                  </svg>
                }
              />
            </div>
          );
        })
      ) : (
        <div className={styles.div_no_tasks}>
          <p>Ни одной задачи</p>
          <p>Это скучно</p>
        </div>
      )}
    </div>
  );
};

export default TaskList;
