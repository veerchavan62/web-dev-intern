const footerLinks = {
  Company: ['About Us', 'Testimonials', 'Careers', 'Contact'],
  Support: ['Get a Quote', 'Bulk Orders', 'Installation Support', 'Warranty Info', 'FAQs'],
};

export default function Footer() {
  return (
    <footer className="bg-[#030914] text-blue-100/60 pt-24 pb-10" id="site-footer">
      <div className="max-w-[85rem] mx-auto px-6 md:px-12 w-full">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="max-w-md">
            <div className="flex items-center gap-4 mb-6">
              <img src="/logo-srabhiyantra.png" alt="SR Abhiyantra Systems Pvt Ltd" className="h-12 w-12 rounded-xl object-contain bg-white p-1" />
              <div>
                <p className="text-white font-black text-xl leading-tight tracking-wide">SR ABHIYANTRA</p>
                <p className="text-blue-200/50 text-xs tracking-[0.2em] font-bold mt-1 uppercase">SYSTEM PVT LTD</p>
              </div>
            </div>
            <p className="text-[15px] leading-relaxed font-medium">
              Authorized dealer of premium office furniture and workspace solutions for corporate & institutional clients across India. Building better workspaces since 2012.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[15px] font-black text-white mb-6 tracking-widest uppercase">{title}</h4>
              <ul className="space-y-4">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-[15px] hover:text-white hover:underline underline-offset-4 transition-all duration-300 font-medium">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 text-sm font-medium text-blue-200/40">
          <p>&copy; {new Date().getFullYear()} SR Abhiyantra System Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
