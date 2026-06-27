import { useState } from "react";
import initialTasks from "@/data/tasks";
import Task from "@/types/tasks";
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
