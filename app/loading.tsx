export default function Loading() {
  return (
    <div role="status" className="flex flex-col items-center justify-center gap-3 min-h-screen bg-slate-950">
      <div
        aria-hidden="true"
        className="w-8 h-8 border-2 border-yellow-500 border-t-transparent rounded-full motion-safe:animate-spin"
      />
      <span className="text-sm text-slate-400">Cargando…</span>
    </div>
  );
}
