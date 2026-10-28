import ArcoirisCarga from '@/components/atoms/ArcoirisCarga';

export default function Loading() {
  return (
    <div role="status" className="flex min-h-screen flex-col items-center justify-center gap-5 bg-slate-950">
      <ArcoirisCarga tamano={14} />
      <span className="text-sm font-medium text-slate-400">Cargando…</span>
    </div>
  );
}
