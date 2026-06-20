import tasks from "./data/tasks";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 py-10 font-sans dark:bg-black">
      <section className="w-full max-w-3xl rounded-lg bg-white p-8 dark:bg-black">
        <h1 className="mb-6 text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Tarefas
        </h1>

        <div className="flex flex-col gap-2">
          {tasks.map((task) => (
            <div key={task.id}>{task.title}</div>
          ))}
        </div>
      </section>
    </main>
  );
}
