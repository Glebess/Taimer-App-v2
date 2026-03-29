import styles from "./TaskList.module.css";
import Button from "../../componentsShare/Button";
import TaskSettingsModal from "..//TaskSettingsModal/TaskSettingsModal";
import { useEffect, useMemo, useRef, useState } from "react";

const TaskList = (props) => {
  const { allTasks, setAllTasks } = props;

  const inputRef = useRef(null);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [taskEditText, setTaskEditText] = useState("");
  const [isTaskSettingsModal, setIsTaskSettingsModal] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [isCompletedTaskstwisted, setIsCompletedTaskstwisted] = useState(false);

  // Фокус при появлении input
  useEffect(() => {
    if (editingTaskId && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editingTaskId]);
  const handleOpenSettings = (taskId) => {
    setSelectedTaskId(taskId);
    setIsTaskSettingsModal(!isTaskSettingsModal);
  };

  const handleEditPriorityTask = (taskId, priority) => {
    setAllTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.taskId === taskId ? { ...task, taskPriority: priority } : task,
      ),
    );
  };

  // Редактирование заголовка задачи задачи
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

  const renderTask = (task) => {
    const isEditing = editingTaskId === task.taskId;
    return (
      <div
        key={task.taskId}
        className={
          task.taskIsCompleted ? styles.div_completed_task : styles.div_task
        }
      >
        <input
          type="checkbox"
          className={`${styles.div_task_input_checkbox} ${styles[task.taskPriority]}`}
          checked={task.taskIsCompleted}
          onChange={() => handleTaskComplete(task.taskId)}
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
        <div className={styles.div_task_more}>
          <Button
            onClick={() => handleOpenSettings(task.taskId)}
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
          <TaskSettingsModal
            isOpen={isTaskSettingsModal && selectedTaskId === task.taskId}
            handleEditPriorityTask={handleEditPriorityTask}
            taskId={task.taskId}
          />
        </div>
      </div>
    );
  };

  // Обработка нажатия клавиш
  const handleKeyDown = (e, taskId) => {
    if (e.key === "Enter") {
      handleSaveTask(taskId);
    } else if (e.key === "Escape") {
      setEditingTaskId(null);
    }
  };

  const handleTaskComplete = (taskId) => {
    setAllTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.taskId === taskId
          ? { ...task, taskIsCompleted: !task.taskIsCompleted }
          : task,
      ),
    );
  };
  const { activeTaskList, completedTasksList } = useMemo(() => {
    const active = [];
    const completed = [];

    allTasks.forEach((task) => {
      if (task.taskIsCompleted) {
        completed.push(task);
      } else {
        active.push(task);
      }
    });
    return { activeTaskList: active, completedTasksList: completed };
  }, [allTasks]);
  return (
    <div className={styles.div_task_all}>
      {allTasks.length === 0 ? (
        <div className={styles.div_no_tasks}>
          <p>Ни одной задачи</p>
          <p>Это скучно</p>
        </div>
      ) : (
        <>
          {activeTaskList.length > 0 && (
            <>
              <div className={styles.section_header}>
                <span className={styles.span_info_count_task}>
                  Активные задачи ({activeTaskList.length})
                </span>
              </div>
              {activeTaskList.map((task) => renderTask(task))}
            </>
          )}

          {completedTasksList.length > 0 && (
            <>
              <div className={styles.completed_task_sector}>
                <div
                  className={styles.div_twisted_menu}
                  onClick={() =>
                    setIsCompletedTaskstwisted(!isCompletedTaskstwisted)
                  }
                >
                  <span
                    className={
                      isCompletedTaskstwisted
                        ? styles.span_twisted_more
                        : styles.span_twisted_more_active
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1024"
                      height="1024"
                      viewBox="0 0 1024 1024"
                    >
                      <path
                        fill="currentColor"
                        d="M488.8 344.3L149 701a32 32 0 0 0 0 44.2l.4.3a29.4 29.4 0 0 0 42.7 0l320-335.8l319.8 335.8a29.4 29.4 0 0 0 42.7 0l.4-.3a32 32 0 0 0 0-44.2L535.2 344.3a32 32 0 0 0-46.4 0"
                      />
                    </svg>
                  </span>
                  <span className={styles.span_info_count_task}>
                    Выполненные задачи ({completedTasksList.length})
                  </span>
                </div>

                {!isCompletedTaskstwisted &&
                  completedTasksList.map((task) => renderTask(task))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default TaskList;
