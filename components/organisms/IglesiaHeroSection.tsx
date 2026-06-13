import Image from 'next/image';

export default function IglesiaHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden -mt-16">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat opacity-30" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-5xl mx-auto text-center">
          <div className="relative w-32 h-32 md:w-56 md:h-56 mx-auto mb-4 group">
            <div className="absolute inset-0 bg-yellow-400/20 blur-[60px] rounded-full group-hover:bg-yellow-400/30 transition-all duration-700" />
            <Image
              src="/images/logos-monte.png"
              alt="Logo Iglesia Monte Alto"
              fill
              className="object-contain relative z-10 drop-shadow-2xl transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>

          <h1 className="font-extrabold mb-6 tracking-tight leading-tight">
            <span className="block text-2xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-2 font-bold">
              Iglesia Cuartel General
            </span>
            <span className="block text-blue-200 text-sm md:text-lg lg:text-xl tracking-[0.2em] font-medium uppercase mb-3">
              de Jehová de los Ejércitos
            </span>
            <span className="block text-yellow-400 text-4xl md:text-6xl lg:text-7xl font-serif italic drop-shadow-lg">
              "Monte Alto"
            </span>
          </h1>

          <div className="flex items-center justify-center gap-4 text-blue-200 mb-8 text-xs md:text-lg font-light tracking-widest uppercase">
            <span>Sanidad</span>
            <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
            <span>Santidad</span>
            <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
            <span>Poder</span>
          </div>

          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed border-t border-white/10 pt-6">
            Una iglesia comprometida con la predicación del Evangelio puro,
            la sanidad divina y el poder transformador del Espíritu Santo.
          </p>
        </div>
      </div>
    </section>
  );
}