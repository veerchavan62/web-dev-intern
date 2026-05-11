import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-2'
          : 'py-4'
      }`}
    >
      <div className={`section-container transition-all duration-500 ${
        scrolled ? '' : ''
      }`}>
        <div className={`flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border border-neutral-200/60 shadow-sm rounded-full px-4 py-2'
            : 'bg-transparent'
        }`}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group relative z-50">
            <div className={`flex items-center justify-center rounded-full transition-all duration-300 ${
              scrolled 
                ? 'w-10 h-10 bg-slate-900' 
                : 'w-11 h-11 bg-white/10 backdrop-blur-sm border border-white/20'
            }`}>
              <span className={`font-bold text-sm ${scrolled ? 'text-white' : 'text-white'}`}>SR</span>
            </div>
            <div className="hidden sm:block">
              <p className={`font-semibold text-sm tracking-tight transition-colors leading-tight ${
                scrolled ? 'text-slate-900' : 'text-white'
              }`}>
                SR Abhiyantra System Pvt Ltd
              </p>
              <p className={`text-[10px] tracking-wide transition-colors ${
                scrolled ? 'text-slate-500' : 'text-white/60'
              }`}>
                Govt. Licensed Electrical Contractor
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-3 py-1.5 text-[13px] font-medium transition-colors duration-200 ${
                  scrolled 
                    ? 'text-slate-600 hover:text-slate-900'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-2 relative z-50">
            <a
              href="#contact"
              className={`hidden md:inline-flex items-center px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-300 ${
                scrolled
                  ? 'bg-slate-900 text-white hover:bg-slate-800'
                  : 'bg-white text-slate-900 hover:bg-white/90'
              }`}
            >
              Get Quote
            </a>

            <button
              className={`lg:hidden p-2 rounded-full transition-colors ${
                scrolled 
                  ? 'text-slate-700 hover:bg-slate-100' 
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-0 z-40 bg-white"
          >
            <div className="flex flex-col items-center justify-center min-h-screen px-8">
              <nav className="flex flex-col items-center gap-1 w-full max-w-xs">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="w-full text-center py-3 text-lg font-medium text-slate-800 hover:text-slate-600 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.04 }}
                  className="w-full mt-8 flex items-center justify-center py-3 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Quote
                </motion.a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
