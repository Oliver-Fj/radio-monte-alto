/**
 * Costura entre un hero y la sección siguiente: sin fundidos, sin curvas,
 * sin adornos. Solo un hilo de luz dorado, finísimo, que se desvanece
 * hacia los bordes. El corte entre secciones queda limpio y nítido.
 */
export default function SectionDivider({
  className = '',
}: {
  fillClass?: string;
  className?: string;
}) {
  return (
    <div className={`absolute bottom-0 inset-x-0 z-20 pointer-events-none ${className}`} aria-hidden="true">
      <div className="h-px bg-gradient-to-r from-transparent via-amber-400/80 to-transparent mx-[10%] md:mx-[16%]" />
    </div>
  );
}
