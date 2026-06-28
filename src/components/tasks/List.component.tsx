import Task from "@/types/tasks";
import { Information } from "./Information.component";

type TaskListProps = {
  tasks: Task[];
};

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-semibold tracking-tight text-black">
        Tarefas 1
      </h1>
      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-3 rounded-lg border border-zinc-100 px-4 py-3"
          >
            <Information
              href={`/tasks/${task.id}`}
              size={24}
              ariaLabel="Ver detalhes"
            />
            <span className="flex-1 text-sm text-zinc-800">{task.title}</span>
            <div className="h-4 w-4 flex-shrink-0 rounded border border-zinc-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
