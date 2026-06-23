"use client";

import { AddTaskForm } from "./Label.component";
import TaskList from "./List.component";
import { useTasks } from "../hooks/useTasks";

export default function AddTask() {
  const { tasks, addTask } = useTasks();

  return (
    <div className="mb-8">
      <AddTaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}
