import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex items-center ${
        scrolled
          ? 'bg-[#05101e]/85 backdrop-blur-2xl shadow-xl shadow-black/20 h-28 border-b border-white/5'
          : 'bg-gradient-to-b from-[#05101e]/90 to-transparent h-36'
      }`}
    >
      <div className="section-container flex items-center justify-between w-full">
        {/* Branding Area */}
        <a href="#" className="flex items-center gap-5 group z-50 relative h-full">
          <img
            src="/logo-srabhiyantra.png"
            alt="SR Abhiyantra Systems Pvt Ltd"
            className="h-[4.5rem] w-[4.5rem] md:h-[5.5rem] md:w-[5.5rem] rounded-2xl object-contain bg-white p-1.5 transition-transform duration-500 group-hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.15)] flex-shrink-0"
          />
          <div className="hidden sm:flex flex-col justify-center h-full pt-1">
            <p className="text-white font-black text-2xl md:text-3xl leading-none tracking-tight transition-colors group-hover:text-blue-50 drop-shadow-md">
              SR ABHIYANTRA
            </p>
            <p className="text-blue-200/80 text-[11px] md:text-sm tracking-[0.3em] font-bold mt-1.5 uppercase">
              System Pvt Ltd
            </p>
            <p className="text-amber-300/70 text-[9px] md:text-[10px] tracking-[0.15em] font-semibold mt-1 uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
              Govt. Licensed Electrical Contractor
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-10 xl:gap-14 h-full" id="desktop-nav">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-lg xl:text-[19px] font-bold !text-white hover:!text-blue-100 relative group transition-colors duration-300 drop-shadow-md flex items-center h-full"
            >
              {link.label}
              <span className="absolute bottom-1 left-1/2 w-0 h-[3px] bg-blue-400 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA + Mobile Toggle */}
        <div className="flex items-center gap-6 z-50 relative h-full">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-9 py-4 text-lg font-extrabold text-slate-900 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_35px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-300"
            id="nav-cta"
          >
            Get Quote
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <button
            className="lg:hidden p-3.5 rounded-xl text-white bg-white/10 border border-white/20 hover:bg-white/20 backdrop-blur-md transition-all duration-300 flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            {mobileOpen ? (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Full Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-0 z-40 bg-[#05101e]/98 backdrop-blur-3xl transition-all duration-500 ease-in-out flex flex-col items-center justify-center ${
          mobileOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-8 pointer-events-none'
        }`}
        id="mobile-menu"
      >
        <div className="flex flex-col items-center gap-10 px-6 w-full max-w-sm">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-4xl font-extrabold text-white w-full text-center py-4 rounded-3xl hover:bg-white/10 transition-all"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-8 w-full rounded-2xl bg-white py-6 text-center text-2xl font-extrabold text-[#081a43] shadow-[0_10px_40px_rgba(255,255,255,0.15)]"
            onClick={() => setMobileOpen(false)}
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </header>
  );
}
