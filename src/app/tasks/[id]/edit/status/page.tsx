"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import tasks from "@/data/tasks";
import BackButton from "@/components/Backbutton.component";

const statusOptions = [
  { label: "Pendente", value: false },
  { label: "Concluída", value: true },
];

export default function StatusBadgePage() {
  const params = useParams();
  const task = tasks.find((t) => String(t.id) === params.id);

  const [completed, setCompleted] = useState(task?.completed ?? false);
  const [open, setOpen] = useState(false);

  const current = statusOptions.find((s) => s.value === completed);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 py-10 font-sans">
      <section className="w-full max-w-3xl rounded-lg bg-white p-8 shadow-sm border-2 border-zinc-900">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-zinc-200">
          <h1 className="uppercase tracking-widest text-zinc-400">
            Editar Status #{task?.id}
          </h1>
          <BackButton href={`/tasks/${task?.id}`} name="Voltar" />
        </div>

        {/* Status dropdown */}
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2">
          Status
        </p>
        <div className="relative">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold cursor-pointer hover:opacity-80 ${completed
                ? "bg-emerald-100 text-emerald-700"
                : "bg-amber-100 text-amber-700"
              }`}
          >
            <span className={`h-2 w-2 rounded-full ${completed ? "bg-emerald-500" : "bg-amber-500"}`} />
            {current?.label}
          </button>

          {open && (
            <div className="absolute left-0 mt-2 w-40 rounded-lg border border-zinc-200 bg-white shadow-md z-10">
              {statusOptions.map((option) => (
                <button
                  key={String(option.value)}
                  onClick={() => {
                    setCompleted(option.value);
                    setOpen(false);
                  }}
                  className="flex w-full items-center gap-2 px-4 py-2.5 text-sm hover:bg-zinc-50 first:rounded-t-lg last:rounded-b-lg"
                >
                  <span className={`h-2 w-2 rounded-full ${option.value ? "bg-emerald-500" : "bg-amber-500"}`} />
                  <span className={option.value ? "text-emerald-700" : "text-amber-700"}>
                    {option.label}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}