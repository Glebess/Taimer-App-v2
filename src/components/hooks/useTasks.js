import { useState, useMemo, useCallback } from "react";

export const useTasks = (allTasks, setAllTasks) => {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [taskEditText, setTaskEditText] = useState("");

  // Редактирование
  const startEditTask = useCallback((task) => {
    setEditingTaskId(task.taskId);
    setTaskEditText(task.taskTitle);
  }, []);

  const saveEditTask = useCallback(
    (taskId) => {
      setAllTasks((prev) =>
        prev.map((task) =>
          task.taskId === taskId ? { ...task, taskTitle: taskEditText } : task,
        ),
      );
      setEditingTaskId(null);
    },
    [taskEditText, setAllTasks],
  );

  const cancelEditTask = useCallback(() => {
    setEditingTaskId(null);
  }, []);

  // Выполена | не выполнена задача
  const toggleTaskComplete = useCallback(
    (taskId) => {
      setAllTasks((prev) =>
        prev.map((task) =>
          task.taskId === taskId
            ? { ...task, taskIsCompleted: !task.taskIsCompleted }
            : task,
        ),
      );
    },
    [setAllTasks],
  );

  // Закрепить задачу
  const togglePinTask = (taskId) => {
    setAllTasks((prev) =>
      prev.map((task) =>
        task.taskId === taskId ? { ...task, isPinned: !task.isPinned } : task,
      ),
    );
  };

  //Удалить задачу
  const handleDeleteTask = (taskId) => {
    setAllTasks((prev) =>
      prev.filter((task) =>
        task.taskId === taskId ? { ...task, ispinned: !task.ispinned } : task,
      ),
    );
  };

  //  Приоритет
  const changeTaskPriority = useCallback(
    (taskId, priority) => {
      setAllTasks((prev) =>
        prev.map((task) =>
          task.taskId === taskId ? { ...task, taskPriority: priority } : task,
        ),
      );
    },
    [setAllTasks],
  );

  // сортировка активных и выполненных задач
  const { activeTasks, completedTasks } = useMemo(() => {
    const active = [];
    const completed = [];

    allTasks.forEach((task) => {
      if (task.taskIsCompleted) {
        completed.push(task);
      } else {
        active.push(task);
      }
    });

    return { activeTasks: active, completedTasks: completed };
  }, [allTasks]);

  return {
    allTasks,
    activeTasks,
    completedTasks,
    editingTaskId,
    taskEditText,
    handleDeleteTask,
    togglePinTask,
    setTaskEditText,
    startEditTask,
    saveEditTask,
    cancelEditTask,
    toggleTaskComplete,
    changeTaskPriority,
  };
};
