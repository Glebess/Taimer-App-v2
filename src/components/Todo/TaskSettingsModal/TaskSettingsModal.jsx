import styles from "./TaskSettingsModal.module.css";
import Button from "../../../componentsShare/Button";
import priorities from "../../Configs/Config";
import { PriorityIcon } from "../../Configs/Icon";
import { useRef } from "react";

const TaskSettingsModal = ({
  isSettingsOpen,
  setIsSettingsOpen,
  handleEditPriorityTask,
  taskId,
  onDelete,
  togglePinTask,
  onSkip,
  onTag,
}) => {
  if (!isSettingsOpen) return null;

  const handleOverlayClick = (e) => {
    if (!e.currentTarget.contains(e.target)) {
      setIsSettingsOpen(false);
    }
  };

  // Типы иконок календаря
  const calendarTypes = ["default", "arrow", "dots", "search"];

  return (
    <div className={styles.div_modal_container}>
      <div className={styles.div_modal_content}>
        <p>Приоритет</p>
        <div className={styles.div_priority_task}>
          {priorities.map(({ id, colors }) => (
            <Button
              key={id}
              onClick={() => {
                handleEditPriorityTask(taskId, id);
                setIsSettingsOpen(false);
              }}
            >
              <PriorityIcon colors={colors} />
            </Button>
          ))}
        </div>

        <div className={styles.div_line}></div>

        {/* Нижние кнопки */}
        <div className={styles.div_bottom_panel}>
          <button
            onClick={() => {
              togglePinTask();
              setIsSettingsOpen(false);
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M16 12V4H17V2H7V4H8V12L6 14V16H11V21L12 22L13 21V16H18V14L16 12Z"
                fill="currentColor"
              />
            </svg>
            <p>Закрепить</p>
          </button>

          <button
            onClick={() => {
              onSkip();
              setIsSettingsOpen(false);
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 14H22V6H19V14Z" fill="currentColor" />
              <path
                d="M15 14L12 22H10V14L6 12V4H14L17 6V14H15Z"
                fill="currentColor"
              />
            </svg>
            <p>Не буду делать</p>
          </button>

          <button
            onClick={() => {
              onTag();
              setIsSettingsOpen(false);
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                fill="currentColor"
                d="M5.5 7A1.5 1.5 0 0 1 4 5.5A1.5 1.5 0 0 1 5.5 4A1.5 1.5 0 0 1 7 5.5A1.5 1.5 0 0 1 5.5 7m15.91 4.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.11 0-2 .89-2 2v7c0 .55.22 1.05.59 1.41l8.99 9c.37.36.87.59 1.42.59s1.05-.23 1.41-.59l7-7c.37-.36.59-.86.59-1.41c0-.56-.23-1.06-.59-1.42"
              />
            </svg>
            <p>Метки</p>
          </button>

          <button
            onClick={() => {
              onDelete();
              setIsSettingsOpen(false);
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"
                fill="currentColor"
              />
            </svg>
            <p>Удалить</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskSettingsModal;
