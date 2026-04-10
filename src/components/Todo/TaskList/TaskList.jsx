import styles from "./TaskList.module.css";
import TaskItem from "./TaskItem";
import EmptyTaskList from "./EmptyTaskList";
import CompletedTasksSection from "./CompletedTasksSection";
import { useTasks } from "..//..//hooks//useTasks";

const TaskList = ({ allTasks, setAllTasks }) => {
  const {
    activeTasks,
    completedTasks,
    editingTaskId,
    taskEditText,
    setTaskEditText,
    startEditTask,
    saveEditTask,
    cancelEditTask,
    toggleTaskComplete,
    changeTaskPriority,
    pinTask,
    skipTask,
    deleteTask,
  } = useTasks(allTasks, setAllTasks);

  if (activeTasks.length === 0 && completedTasks.length === 0) {
    return <EmptyTaskList />;
  }

  const renderTask = (task) => (
    <TaskItem
      key={task.taskId}
      task={task}
      isEditing={editingTaskId === task.taskId}
      editText={taskEditText}
      onEditTextChange={setTaskEditText}
      onSaveEdit={saveEditTask}
      onCancelEdit={cancelEditTask}
      onStartEdit={startEditTask}
      onToggleComplete={toggleTaskComplete}
      onChangePriority={changeTaskPriority}
      onPin={pinTask}
      onSkip={skipTask}
      onDelete={deleteTask}
    />
  );

  return (
    <div className={styles.div_task_all}>
      {activeTasks.map(renderTask)}

      {/* Выполенные задачи */}
      <CompletedTasksSection tasks={completedTasks} renderTask={renderTask} />
    </div>
  );
};

export default TaskList;
