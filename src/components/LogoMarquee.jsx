const brands = [
  { name: 'Wipro', logo: '/logo-wipro.webp' },
  { name: 'Godrej', logo: '/logo-godrej.png' },
  { name: 'Gunnebo', logo: '/logo-gunnebo.svg' },
  { name: 'Digisol', logo: '/logo-digisol.svg' },
  { name: 'R&M', logo: '/logo-rm.png' },
  { name: 'D-Link', logo: '/logo-dlink.png' },
  { name: 'Cisco', logo: '/logo-cisco.png' },
  { name: 'CommScope', logo: '/logo-commscope.png' },
];

// Triple the array for seamless infinite loop
const doubled = [...brands, ...brands, ...brands];

export default function LogoMarquee() {
  return (
    <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-200" id="brand-partners">
      <div className="max-w-[90rem] mx-auto w-full">
        <div className="text-center mb-10 md:mb-14 px-6">
          <p className="text-sm font-black tracking-[0.2em] text-slate-400 uppercase">
            Authorized Dealers &amp; Partners
          </p>
        </div>

        <div className="relative overflow-hidden group">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 md:w-40 bg-gradient-to-r from-slate-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 md:w-40 bg-gradient-to-l from-slate-50 to-transparent" />

          <div 
            className="marquee-track flex items-center gap-5 md:gap-7 group-hover:[animation-play-state:paused]"
            style={{ animationDuration: '60s' }}
          >
            {doubled.map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="flex-shrink-0 flex items-center justify-center w-[150px] md:w-[180px] h-[72px] md:h-[88px] bg-white rounded-2xl border border-slate-100 shadow-[0_1px_4px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-0.5"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-7 md:h-9 w-auto object-contain max-w-[110px] md:max-w-[130px] px-3"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}