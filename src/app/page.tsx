import AddTask from "./task";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 py-10 font-sans">
      <section className="w-full max-w-3xl rounded-lg bg-white p-8">
        <AddTask />
      </section>
    </main>
  );
}
