import styles from "./TaskList.module.css";
import Button from "../../componentsShare/Button";

const TaskList = (props) => {
  const { allTasks, setAllTasks } = props;

  return (
    <div className={styles.div_task_all}>
      {allTasks.lenght !== 0 ? (
        allTasks.map((task) => {
          return (
            <div key={task.taskId} className={styles.div_task}>
              <input
                type="checkbox"
                className={styles.div_task_input_checkbox}
              />
              <div className={styles.div_task_text}>
                <p>{task.taskTitle}</p>
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
        <p>1</p>
      )}
    </div>
  );
};
export default TaskList;
