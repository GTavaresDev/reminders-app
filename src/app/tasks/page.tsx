"use client";

import { AddTaskForm } from "@/components/tasks/Label.component";
import TaskList from "@/components/tasks/List.component";
import { useTasks } from "@/hooks/useTasks";
import Tasks from "@/components/tasks/Index.component";

export default function AddTask() {
  const { tasks, addTask } = useTasks();

  return (
    <Tasks>
      <AddTaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </Tasks>
  );
}
