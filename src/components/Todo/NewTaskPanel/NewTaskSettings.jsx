import Button from "../../../componentsShare/Button";
import styles from "./NewTaskPanel.module.css";
import { priorities } from "../../Configs/Config";
import { PriorityIcon } from "../../Configs/Icon";

const NewTaskSettings = ({
  onShowNewTaskSettings,
  setNewPriorityTask,
  newPriorityTask,
}) => {
  if (!onShowNewTaskSettings) return null;

  return (
    <div className={styles.div_settings_task_container}>
      <div className={styles.div_settings_task}>
        <p>Приоритет</p>
        <div className={styles.div_settings_task_svg}>
          {priorities.map(({ id, colors }) => (
            <Button
              key={id}
              onClick={() => setNewPriorityTask(id)}
              className={`${styles.priority_btn} ${newPriorityTask === id ? styles.active : ""}`}
            >
              <PriorityIcon colors={colors} />
            </Button>
          ))}
        </div>
      </div>

      <div className={styles.div_line} />

      {/* <div className={styles.div_secure}>
        <p>Закрепить</p>
      </div> */}
    </div>
  );
};
export default NewTaskSettings;
