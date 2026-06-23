import Task from "@/app/types/tasks";

type TaskListProps = {
  tasks: Task[];
};

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-semibold tracking-tight text-black">
        Tarefas
      </h1>
      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-3 rounded-lg border border-zinc-100 px-4 py-3"
          >
            <div className="h-4 w-4 flex-shrink-0 rounded border border-zinc-300" />
            <span className="text-sm text-zinc-800">{task.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
