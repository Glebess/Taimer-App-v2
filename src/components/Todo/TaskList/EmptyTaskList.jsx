import styles from "./TaskList.module.css";

const EmptyTaskList = () => {
  return (
    <div className={styles.div_no_tasks}>
      <p>Ни одной задачи</p>
      <p>Это скучно</p>
    </div>
  );
};

export default EmptyTaskList;
