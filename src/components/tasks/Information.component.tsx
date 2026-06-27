import { useRouter } from "next/navigation";

interface InformationProps {
  href: string;
  size?: number;
  ariaLabel?: string;
}

export function Information({ href, size, ariaLabel }: InformationProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(href)}
      aria-label={ariaLabel}
      style={{ width: size, height: size }}
      className="flex items-center justify-center rounded-md border border-blue-300 bg-blue-50 text-blue-600 font-semibold text-sm select-none cursor-pointer transition-all duration-150 hover:bg-blue-100 hover:border-blue-400 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
    >
      i
    </button>
  );
}
