"use client";

import { useParams } from "next/navigation";
import tasks from "@/data/tasks";
import EditButton from "@/components/Editbutton.component";
import BackButton from "@/components/Backbutton.component";

export default function TaskDetailsPage() {
  const params = useParams();
  const id = params.id;
  const task = tasks.find((task) => String(task.id) === id);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 py-10 font-sans">
      <section className="w-full max-w-3xl rounded-lg bg-white p-8 shadow-sm border-2 border-zinc-900">
        {/* Header com título e botão voltar */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-zinc-200">
          <h1 className="uppercase tracking-widest text-zinc-400">
            Tarefa #{task?.id}
          </h1>
          <div>
            <BackButton href="/tasks" name="Tarefas" />
          </div>
        </div>

        {/* Detalhes abaixo */}
        <div className="flex flex-col gap-6">
          {/* Título */}
          <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-1">
                Título
              </p>
              <p className="text-lg font-medium text-zinc-800">
                {task?.title ?? "—"}
              </p>
            </div>
            <EditButton href={`/tasks/${id}/edit/title`} />
          </div>

          {/* Descrição */}
          <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-1">
                Descrição
              </p>
              <p className="text-lg font-medium text-zinc-800">
                {task?.description ?? "—"}
              </p>
            </div>
            <EditButton href={`/tasks/${id}/edit/description`} />
          </div>

          {/* Status */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2">
                Status
              </p>
              <span
                className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold ${
                  task?.completed
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    task?.completed ? "bg-emerald-500" : "bg-amber-500"
                  }`}
                />
                {task?.completed ? "Concluída" : "Pendente"}
              </span>
            </div>
            <EditButton href={`/tasks/${id}/edit/status`} />
          </div>
        </div>
      </section>
    </main>
  );
}
