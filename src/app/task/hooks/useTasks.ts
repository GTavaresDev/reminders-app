import { useState } from "react";
import initialTasks from "@/app/data/tasks";
import Task from "@/app/types/tasks";
import { generateId } from "../utils/generateId";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const addTask = (title: string) => {
    if (!title.trim()) return;

    const newTask: Task = {
      id: generateId(),
      title,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
  };

  return { tasks, addTask };
}
