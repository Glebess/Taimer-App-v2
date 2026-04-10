import styles from "./TaskList.module.css";

const TaskSection = ({ title, count, tasks, renderTask }) => {
  if (tasks.length === 0) return null;

  return (
    <>
      <div className={styles.section_header}>
        <span className={styles.span_info_count_task}>
          {title} {count}
        </span>
      </div>
      {tasks.map(renderTask)}
    </>
  );
};
export default TaskSection;
