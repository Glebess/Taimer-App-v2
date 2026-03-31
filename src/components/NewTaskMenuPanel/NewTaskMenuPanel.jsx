import Button from "../../componentsShare/Button";
import styles from "./NewTaskMenuPanel.module.css";

const NewTaskMenuPanel = (props) => {
  const { onShowNewTaskPanel, newPriorityTask, setNewPriorityTask } = props;

  const getButtonClass = (priority) => {
    return newPriorityTask === priority
      ? `${styles.active} ${styles[priority]}`
      : "";
  };
  return (
    <div>
      {onShowNewTaskPanel ? (
        <div className={styles.div_new_task_panel}>
          <div className={styles.div_priority_task}>
            <p>Приоритет</p>
            <div className={styles.div_priority_task_svg}>
              <Button
                onClick={() => setNewPriorityTask("high")}
                className={getButtonClass("high")}
                children={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="4" y="4" width="4" height="16" fill="#ff0202" />
                    <rect x="10" y="8" width="4" height="12" fill="#ff0202" />
                    <rect x="16" y="12" width="4" height="8" fill="#ff0202" />
                  </svg>
                }
              />
              <Button
                onClick={() => setNewPriorityTask("normal")}
                className={getButtonClass("normal")}
                children={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="4" y="4" width="4" height="16" fill="#fbff00" />
                    <rect x="10" y="8" width="4" height="12" fill="#fbff00" />
                    <rect x="16" y="12" width="4" height="8" fill="grey" />
                  </svg>
                }
              />
              <Button
                onClick={() => setNewPriorityTask("small")}
                className={getButtonClass("small")}
                children={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="4" y="4" width="4" height="16" fill="#0066ff" />
                    <rect x="10" y="8" width="4" height="12" fill="grey" />
                    <rect x="16" y="12" width="4" height="8" fill="grey" />
                  </svg>
                }
              />

              <Button
                onClick={() => setNewPriorityTask("base")}
                className={getButtonClass("base")}
                children={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="4" y="4" width="4" height="16" fill="grey" />
                    <rect x="10" y="8" width="4" height="12" fill="grey" />
                    <rect x="16" y="12" width="4" height="8" fill="grey" />
                  </svg>
                }
              />
            </div>
          </div>
          <div className={styles.div_line}></div>
          <div className={styles.div_secure}>
            <p>Закрепить</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default NewTaskMenuPanel;
