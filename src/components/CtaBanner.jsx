export default function CtaBanner() {
  return (
    <section className="bg-gradient-to-b from-[#05101e] to-[#081a43] py-24 md:py-32 flex flex-col items-center relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 w-[300px] h-[300px] rounded-full bg-cyan-400/5 blur-[100px]" />
        <div className="absolute right-1/4 bottom-0 w-[200px] h-[200px] rounded-full bg-blue-300/5 blur-[80px]" />
      </div>

      <div className="w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.2] tracking-tight">
          Ready to Transform Your Workspace?
        </h2>
        <p className="mt-6 text-lg text-blue-100/60 max-w-2xl font-medium leading-relaxed">
          Get a free consultation and detailed quotation for your corporate office furniture requirements. Let's build something great together.
        </p>
        
        <div className="mt-12 w-full flex items-center justify-center">
          <a
            href="#contact"
            id="cta-banner-primary"
            className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-10 py-5 text-[17px] font-extrabold text-slate-900 shadow-[0_10px_30px_rgba(255,255,255,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(255,255,255,0.2)] hover:bg-slate-50"
          >
            Get Free Quote
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
