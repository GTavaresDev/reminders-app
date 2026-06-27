import { useRouter } from "next/navigation";
import { Pencil } from "lucide-react";
import { use } from "react";

interface EditButtonProps {
  href: string;
}

export default function EditButton({ href }: EditButtonProps) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(href)}
      className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 transition-colors"
    >
      <Pencil size={14} />
    </button>
  );
}
