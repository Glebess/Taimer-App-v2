import styles from "./TaskList.module.css";
import Button from "../../../componentsShare/Button";
import TaskSettingsModal from "../TaskSettingsModal/TaskSettingsModal";
import { useState, useRef, useEffect } from "react";

const TaskItem = ({
  task,
  isEditing,
  editText,
  onEditTextChange,
  onSaveEdit,
  onCancelEdit,
  onStartEdit,
  onToggleComplete,
  onChangePriority,
  onPin,
  onSkip,
  onDelete,
  onTag,
}) => {
  const inputRef = useRef(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Фокус при редактировании
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  //
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSaveEdit(task.taskId);
    } else if (e.key === "Escape") {
      onCancelEdit();
    }
  };

  return (
    <div
      className={
        task.taskIsCompleted ? styles.div_completed_task : styles.div_task
      }
    >
      <input
        type="checkbox"
        className={`${styles.div_task_input_checkbox} ${styles[task.taskPriority]}`}
        checked={task.taskIsCompleted}
        onChange={() => onToggleComplete(task.taskId)}
      />
      <div
        className={styles.div_task_text}
        onClick={() => !isEditing && onStartEdit(task)}
      >
        {isEditing ? (
          <input
            className={styles.input_edit_task}
            ref={inputRef}
            value={editText}
            onChange={(e) => onEditTextChange(e.target.value)}
            onBlur={() => onSaveEdit(task.taskId)}
            onKeyDown={handleKeyDown}
          />
        ) : task.taskTitle === "" ? (
          <p className={styles.p_title_task_none}>Нет заголовка</p>
        ) : (
          <p className={styles.p_title_task}>{task.taskTitle}</p>
        )}
      </div>
      <div className={styles.div_task_more}>
        <Button
          onClick={() => setIsSettingsOpen(!isSettingsOpen)}
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
          isSettingsOpen={isSettingsOpen}
          setIsSettingsOpen={setIsSettingsOpen}
          handleEditPriorityTask={onChangePriority}
          taskId={task.taskId}
          onDelete={() => {
            onDelete(task.taskId);
          }}
          onPin={() => {
            onPin(task.taskId);
          }}
          onSkip={() => {
            onSkip(task.taskId);
          }}
          onTag={() => {
            onTag(task.taskId);
          }}
        />
      </div>
    </div>
  );
};

export default TaskItem;
