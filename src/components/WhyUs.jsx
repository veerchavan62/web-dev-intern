const reasons = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Certified OEM Partner',
    description: 'Authorized procurement channel for industry-leading manufacturers, ensuring authentic products backed by comprehensive OEM warranties.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: 'End-to-End Execution',
    description: 'Turnkey project delivery from spatial planning to final installation, managed entirely by our dedicated infrastructure specialists.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Precision Logistics',
    description: 'Strict adherence to deployment schedules driven by optimized supply chain workflows and centralized distribution management.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: 'Enterprise Pricing',
    description: 'Direct-to-business pricing models offering transparent cost structures and optimized capital expenditure for bulk acquisitions.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.385 3.375a.75.75 0 01-1.16-.627V6.78a.75.75 0 01.377-.648l5.385-3.375a.75.75 0 01.796 0l5.385 3.375a.75.75 0 01.377.648v11.138a.75.75 0 01-1.16.627l-5.385-3.375a.75.75 0 00-.796 0z" />
      </svg>
    ),
    title: 'Lifecycle Support',
    description: 'Dedicated post-deployment service level agreements (SLAs) ensuring rapid-response maintenance and asset longevity.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    title: 'Tailored Integration',
    description: 'Custom infrastructure configurations engineered to align precisely with your architectural constraints and corporate identity.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-24 md:py-32 flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-xs font-black tracking-[0.2em] text-blue-600 uppercase mb-4">
            Operational Excellence
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.2] tracking-tight">
            Built on Trust, Engineered for Scale
          </h2>
          <p className="mt-6 text-lg text-slate-500 leading-relaxed font-medium">
            SR Abhiyantra serves as a strategic infrastructure partner for enterprises, combining rigorous execution with top-tier asset procurement.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {reasons.map((item, i) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-slate-100 bg-white p-8 md:p-10 transition-all duration-300 hover:border-slate-200 hover:shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 flex flex-col items-center text-center h-full w-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 text-blue-600 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-lg md:text-xl font-extrabold text-slate-900 mb-4 tracking-tight">{item.title}</h3>
              <p className="text-[15px] text-slate-500 leading-relaxed font-medium flex-grow">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
