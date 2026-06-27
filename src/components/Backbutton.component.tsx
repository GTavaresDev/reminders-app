import Link from "next/link";

interface BackButtonProps {
  href: string;
  name: string;
}

export default function BackButton({ href, name }: BackButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex h-10 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 transition-colors"
    >
      Voltar para {name}
    </Link>
  );
}
