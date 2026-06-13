'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import PlayButton from '@/components/molecules/PlayButton';

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Programacion', href: '/programacion' },
  { name: 'Recursos', href: '/recursos' },
  {
    name: 'Nuestra Iglesia',
    href: '/nuestra-iglesia',
    submenu: [
      { name: 'Clínica Celestial', href: '/clinica-celestial' },
      { name: 'Cultos Dominicales', href: '/cultos-dominicales' },
      { name: 'Filiales', href: '/filiales' },
      { name: 'Contacto', href: '/contacto' },
    ]
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname(); // ✅ Navegación real de Next.js

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  const B = process.env.NEXT_PUBLIC_BASE_PATH || '';


  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const isActiveLink = (href: string) => pathname === href;
  const isParentActive = (submenu: { href: string }[]) => {
    return submenu.some(sub => pathname === sub.href);
  };

  // --- ESTILOS LUJOSOS ---
  const goldTextClass = "bg-gradient-to-b from-amber-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent";

  const activeItemClass = `
    text-amber-300 
    bg-gradient-to-t from-amber-900/30 to-transparent
    border-b-2 border-amber-400 
    shadow-[0_10px_20px_-5px_rgba(251,191,36,0.3)]
    font-bold tracking-widest
  `;

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-amber-500/10 shadow-2xl z-50 transition-all duration-300 font-sans">

      {/* Línea inferior dorada sutil */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="container mx-auto px-4">
        {/* ✅ ALTURA MÁS DELGADA: h-16 móvil, h-20 desktop */}
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* --- LOGO --- */}
          <Link href="/" className="group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]">

            {/* Logo más pequeño proporcionalmente */}
            <div className="relative w-10 h-10 md:w-14 md:h-14 flex-shrink-0">
              <div className="absolute inset-0 bg-amber-500/10 blur-xl rounded-full group-hover:bg-amber-400/20 transition-colors duration-500" />
              <Image
                src="/images/logo.png"
                alt="Radio Monte Alto"
                fill
                className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                priority
              />
            </div>

            <div className="hidden sm:block">
              <div className={`font-serif font-bold text-base md:text-lg leading-tight tracking-tight ${goldTextClass}`}>
                Radio Monte Alto
              </div>
              <div className="text-[10px] md:text-xs text-slate-400 font-serif italic tracking-wide flex items-center gap-1 opacity-80">
                El Portavoz del Reino
                <Sparkles className="w-2.5 h-2.5 text-amber-400 animate-pulse" />
              </div>
            </div>
          </Link>

          {/* --- NAV DESKTOP --- */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isDropdownParentActive = link.submenu && isParentActive(link.submenu);
              const isActive = isActiveLink(link.href) || isDropdownParentActive;

              return link.submenu ? (
                <div
                  key={link.name}
                  className="relative px-0.5"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={link.href}
                    className={`
                      relative px-5 py-2.5 rounded-t-lg text-xs font-medium tracking-wide uppercase transition-all duration-300 flex items-center gap-1 group
                      ${(dropdownOpen || isActive)
                        ? activeItemClass
                        : 'text-slate-300 hover:text-amber-200 hover:bg-white/5 border-b-2 border-transparent'
                      }
                    `}
                  >
                    {link.name}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${dropdownOpen ? 'rotate-180 text-amber-400' : ''}`} />

                    {/* Destello extra para el activo */}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-amber-300 blur-[2px]" />
                    )}
                  </Link>

                  {/* DROPDOWN MENU LUJOSO */}
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 w-60">
                      <div className="bg-slate-950/98 backdrop-blur-xl border border-amber-500/20 rounded-b-xl rounded-tr-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)] overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

                        <div className="py-2">
                          {link.submenu.map((sublink) => {
                            const isSubActive = isActiveLink(sublink.href);
                            return (
                              <Link
                                key={sublink.name}
                                href={sublink.href}
                                className={`
                                  block px-6 py-3 text-xs transition-all border-l-2 relative
                                  ${isSubActive
                                    ? 'text-amber-300 bg-amber-900/20 border-amber-400 font-bold tracking-wider'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5 border-transparent hover:border-amber-400/50'
                                  }
                                `}
                              >
                                {sublink.name}
                                {isSubActive && <Sparkles className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 text-amber-400" />}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`
                    relative px-5 py-2.5 rounded-t-lg text-xs font-medium tracking-wide uppercase transition-all duration-300
                    ${isActiveLink(link.href)
                      ? activeItemClass
                      : 'text-slate-300 hover:text-amber-200 hover:bg-white/5 border-b-2 border-transparent'
                    }
                  `}
                >
                  <span className="relative z-10">{link.name}</span>
                  {/* Luz ambiental para el activo */}
                  {isActiveLink(link.href) && (
                    <div className="absolute inset-0 bg-amber-400/5 blur-sm z-0" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* --- ACCIONES --- */}
          <div className="flex items-center gap-3 md:gap-5">
            <div className="hidden md:block transform hover:scale-105 transition-transform duration-300">
              <PlayButton variant="header" />
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-amber-400 hover:bg-white/10 rounded-full transition-all duration-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MENÚ MÓVIL --- */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-950/98 backdrop-blur-xl border-t border-amber-500/20 shadow-2xl animate-in slide-in-from-top-5 duration-300 max-h-[85vh] overflow-y-auto">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
            {navLinks.map((link) => {
              const isDropdownParentActive = link.submenu && isParentActive(link.submenu);
              const isLinkActive = isActiveLink(link.href);

              return (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className={`
                      block px-4 py-3 text-center font-medium text-lg rounded-xl transition-all font-serif relative overflow-hidden
                      ${(isLinkActive || isDropdownParentActive)
                        ? `${goldTextClass} bg-gradient-to-r from-transparent via-amber-900/20 to-transparent font-bold border-y border-amber-500/20`
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }
                    `}
                    onClick={() => !link.submenu && setMobileMenuOpen(false)}
                  >
                    {link.name}
                    {(isLinkActive || isDropdownParentActive) && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500 shadow-[0_0_10px_#f59e0b]" />
                    )}
                  </Link>

                  {link.submenu && (
                    <div className="bg-black/40 rounded-xl mt-1 py-2 border border-white/5 mx-4">
                      {link.submenu.map((sublink) => {
                        const isSubActive = isActiveLink(sublink.href);
                        return (
                          <Link
                            key={sublink.name}
                            href={sublink.href}
                            className={`
                              block px-4 py-3 text-center text-sm transition-colors
                              ${isSubActive
                                ? 'text-amber-300 font-bold bg-white/5'
                                : 'text-slate-400 hover:text-amber-200'
                              }
                            `}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sublink.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="mt-6 flex justify-center md:hidden pb-4">
              <PlayButton variant="header" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}