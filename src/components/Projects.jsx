const projects = [
  {
    title: 'Corporate HQ — 200 Seats',
    client: 'Leading IT Company',
    location: 'Pune, Maharashtra',
    scope: 'Complete office fit-out including workstations, executive cabins, conference rooms, and cafeteria furniture.',
    tags: ['Workstations', 'Executive Chairs', 'Conference'],
  },
  {
    title: 'Bank Branch Network',
    client: 'National Bank',
    location: 'Pan India',
    scope: 'Standardized furniture rollout across 25+ branches including counters, visitor seating, and storage solutions.',
    tags: ['Storage', 'Seating', 'Counters'],
  },
  {
    title: 'Government Office Complex',
    client: 'State Government',
    location: 'Nagpur, Maharashtra',
    scope: 'Bulk supply of steel lockers, file cabinets, and modular desks for a 500+ seat government facility.',
    tags: ['Lockers', 'Desks', 'File Storage'],
  },
  {
    title: 'Co-Working Space Setup',
    client: 'Startup Hub',
    location: 'Mumbai, Maharashtra',
    scope: 'Flexible workspace furniture with hot-desking stations, phone booths, and collaborative area seating.',
    tags: ['Hot Desks', 'Collaborative', 'Modular'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gradient-to-b from-slate-50 to-white py-20 sm:py-28 lg:py-32">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-20">
          <p className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-3">Our Projects</p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-slate-900 leading-tight">
            Trusted Across Industries
          </h2>
          <p className="mt-4 text-base text-slate-500 leading-relaxed">
            From corporate offices to government complexes — we have delivered workspace solutions at scale.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              id={`project-${i}`}
              className="group rounded-2xl border border-slate-200/60 bg-white p-7 sm:p-8 transition-all duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/40"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-[#0d3080] transition-colors">{project.title}</h3>
                  <p className="text-sm text-slate-400 mt-0.5">{project.client} · {project.location}</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-400 group-hover:bg-[#081a43] group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
                  </svg>
                </div>
              </div>

              <p className="text-sm text-slate-500 leading-relaxed mb-5">{project.scope}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-[11px] font-medium tracking-wide bg-slate-100 text-slate-500 border border-slate-200/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
