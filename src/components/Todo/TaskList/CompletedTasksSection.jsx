import styles from "./TaskList.module.css";
import { useState } from "react";

const CompletedTasksSection = ({ tasks, renderTask }) => {
  const [isTwisted, setIsTwisted] = useState(false);

  if (tasks.length === 0) return null;

  return (
    <div className={styles.completed_task_sector}>
      <div
        className={styles.div_twisted_menu}
        onClick={() => setIsTwisted(!isTwisted)}
      >
        <span
          className={
            isTwisted
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
          Выполненные задачи ({tasks.length})
        </span>
      </div>

      {!isTwisted && tasks.map(renderTask)}
    </div>
  );
};

export default CompletedTasksSection;
