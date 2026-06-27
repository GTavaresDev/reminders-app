"use client";
import React, { useState } from "react";

type AddTaskFormProps = {
  onAddTask: (title: string) => void;
};

export function AddTaskForm({ onAddTask }: AddTaskFormProps) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!title.trim()) return;
    onAddTask(title);
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full items-center gap-3 mb-6"
    >
      <input
        id="task-title"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Digite o nome da tarefa"
        className="flex-1 h-10 rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-zinc-500 bg-white text-black"
      />
      <button
        type="submit"
        className="h-10 rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 transition-colors"
      >
        Adicionar
      </button>
    </form>
  );
}
