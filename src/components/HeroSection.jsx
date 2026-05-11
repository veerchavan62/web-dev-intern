export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-[100svh] overflow-hidden bg-[#05101e] text-white pt-36"
    >
      {/* Background ambient light effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Core dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#05101e] via-[#07173b] to-[#0a1e4a]" />
        
        {/* Ambient Glows */}
        <div className="absolute left-1/2 top-[20%] -translate-x-1/2 h-[800px] w-[800px] rounded-full bg-blue-600/10 blur-[180px]" style={{ animation: 'pulse-glow 8s ease-in-out infinite' }} />
        <div className="absolute left-[20%] top-[40%] h-[500px] w-[500px] rounded-full bg-cyan-400/5 blur-[150px]" style={{ animation: 'pulse-glow 10s ease-in-out infinite 2s' }} />
        <div className="absolute right-[20%] top-[30%] h-[600px] w-[600px] rounded-full bg-indigo-500/5 blur-[150px]" style={{ animation: 'pulse-glow 9s ease-in-out infinite 1s' }} />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative w-full max-w-[100rem] mx-auto px-6 z-10 flex flex-col items-center justify-center text-center">
        {/* Main Content */}
        <div className="animate-fade-in-up flex flex-col items-center w-full max-w-5xl mx-auto">
          
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-400/30 bg-blue-500/10 px-7 py-3 mb-14 backdrop-blur-md shadow-lg shadow-blue-500/5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
            </span>
            <span className="text-sm font-extrabold tracking-[0.25em] text-blue-100 uppercase">
              Authorized Dealer For Leading Brands
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold leading-[1.08] tracking-tight">
            Premium Workspace
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-indigo-300 bg-clip-text text-transparent sm:px-4">
              Solutions
            </span>
            {' '}for Modern
            <br className="hidden sm:block" />
            Businesses
          </h1>

          <p className="mt-12 max-w-3xl text-xl sm:text-2xl text-blue-100/70 leading-relaxed font-medium">
            India's trusted source for ergonomic seating, intelligent storage, and complete corporate workspace infrastructure.
          </p>

          {/* CTA Button */}
          <div className="mt-16 w-full flex items-center justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-4 rounded-[1.25rem] bg-white px-14 py-6 text-xl font-extrabold text-slate-900 shadow-[0_15px_50px_rgba(255,255,255,0.15)] transition-all duration-300 hover:shadow-[0_20px_60px_rgba(255,255,255,0.25)] hover:-translate-y-1"
            >
              Get Free Quote
              <svg className="w-6 h-6 transition-transform group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-28 flex flex-wrap items-center justify-center gap-16 md:gap-32 pt-14 border-t border-white/10 w-full">
            {[
              { value: '500+', label: 'Projects Delivered' },
              { value: '50+', label: 'Corporate Clients' },
              { value: '10+', label: 'Years Experience' },
            ].map(stat => (
              <div key={stat.label} className="flex flex-col items-center">
                <p className="text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-md">{stat.value}</p>
                <p className="text-sm text-blue-200/50 font-extrabold tracking-[0.2em] uppercase mt-3">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}