const baseTestimonials = [
  {
    quote: 'SR Abhiyantra delivered our entire 200-seat office setup within the committed timeline. The quality is excellent and their team was extremely professional throughout the process.',
    name: 'Rajesh Menon',
    role: 'Admin Head',
    company: 'IT Solutions Pvt Ltd',
  },
  {
    quote: 'We have been working with them for 3 years for our branch network furniture. Competitive pricing and prompt after-sales service. Highly recommended for bulk procurement.',
    name: 'Sneha Patil',
    role: 'Procurement Manager',
    company: 'National Finance Corp',
  },
  {
    quote: 'The ergonomic chairs transformed our co-working space. Clean installation, zero hassle, and top-notch furniture quality. Our members absolutely love the new seating.',
    name: 'Amit Sharma',
    role: 'Operations Director',
    company: 'WorkHub Spaces',
  },
  {
    quote: 'Fantastic experience from start to finish. Their consultation helped us optimize our floor plan, and the delivered Godrej products were exactly as promised.',
    name: 'Priya Desai',
    role: 'HR Director',
    company: 'TechFlow Analytics',
  },
  {
    quote: 'We ordered custom executive seating for our boardrooms. The premium feel and sturdy build quality of the Wipro chairs exceeded our expectations. Great partner to work with.',
    name: 'Vikram Singh',
    role: 'Managing Director',
    company: 'Apex Logistics Group',
  }
];

// Double the array for seamless infinite marquee loop
const marqueeTestimonials = [...baseTestimonials, ...baseTestimonials];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#05101e] py-24 md:py-36 flex flex-col items-center relative overflow-hidden">
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 px-6">
          <p className="text-xs font-black tracking-[0.2em] text-blue-400 uppercase mb-4">Client Feedback</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.2] tracking-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-6 text-lg text-blue-100/60 leading-relaxed font-medium">
            Hear what our corporate partners have to say about our workspace solutions and delivery excellence.
          </p>
        </div>

        {/* Marquee Track Container */}
        <div className="relative overflow-hidden group w-full flex items-center">
          {/* Edge fade gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 md:w-56 bg-gradient-to-r from-[#05101e] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 md:w-56 bg-gradient-to-l from-[#05101e] to-transparent" />

          {/* Marquee Content */}
          <div className="marquee-track group-hover:[animation-play-state:paused] flex w-max gap-6 md:gap-8 px-6">
            {marqueeTestimonials.map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className="w-[320px] md:w-[400px] flex-shrink-0 rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.04] hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] text-center flex flex-col items-center"
              >
                {/* Star Rating */}
                <div className="flex gap-1.5 mb-6 md:mb-8 justify-center">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-amber-400 drop-shadow-[0_2px_4px_rgba(251,191,36,0.3)]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-base md:text-lg text-blue-50/80 leading-relaxed font-medium mb-10 min-h-[120px]">
                  "{t.quote}"
                </p>

                {/* Profile Block */}
                <div className="flex flex-col items-center pt-8 border-t border-white/5 w-full mt-auto">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xl font-black shadow-lg shadow-blue-900/30 mb-4">
                    {t.name.charAt(0)}
                  </div>
                  <p className="text-lg font-extrabold text-white tracking-tight">{t.name}</p>
                  <p className="text-sm text-blue-200/50 font-bold tracking-wide mt-1">{t.role}</p>
                  <p className="text-xs text-blue-200/40 font-medium mt-0.5">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
