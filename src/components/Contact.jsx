export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24 md:py-36 flex flex-col items-center border-t border-slate-50">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Balanced 2-column Layout */}
        <div className="w-full grid lg:grid-cols-2 gap-16 lg:gap-20 items-center justify-center">
          
          {/* Left Info */}
          <div className="flex flex-col justify-center text-center lg:text-left mx-auto lg:mx-0 max-w-lg lg:max-w-none">
            <p className="text-xs font-black tracking-[0.2em] text-blue-600 uppercase mb-5">Get in Touch</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
              Let's Build Your Workspace
            </h2>
            <p className="mt-6 text-lg md:text-xl text-slate-500 leading-relaxed font-medium">
              Tell us about your requirements. Our corporate team is available to provide a comprehensive quotation and consultation.
            </p>

            <div className="mt-14 space-y-10 flex flex-col items-center lg:items-start w-full">
              <ContactInfo
                icon={<svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>}
                label="Email Support"
                value="info@srabhiyantra.com"
              />
              <ContactInfo
                icon={<svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>}
                label="Sales & Inquiries"
                value="+91 99999 99999"
              />
              <ContactInfo
                icon={<svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>}
                label="Corporate Office"
                value="Pune, Maharashtra, India"
              />
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full max-w-lg mx-auto lg:max-w-none">
            <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.03)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white via-transparent to-slate-50/50 -z-10" />
              
              <div className="space-y-8 relative z-10 w-full text-left" id="contact-form">
                <div className="grid sm:grid-cols-2 gap-8">
                  <FormField id="contact-phone" label="Phone Number" type="tel" placeholder="+91 XXXXX XXXXX" />
                  <FormField id="contact-email" label="Email Address" type="email" placeholder="john@company.com" />
                </div>
                
                <div>
                  <label htmlFor="contact-message" className="block text-[14px] font-extrabold tracking-wider text-slate-800 uppercase mb-3">Project Details</label>
                  <textarea id="contact-message" rows={5} placeholder="Describe your furniture requirements and estimated timeline..." className="w-full rounded-2xl border-2 border-slate-200 bg-slate-50 px-6 py-5 text-base text-slate-900 placeholder:text-slate-400 font-medium outline-none transition-all duration-300 hover:border-slate-300 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 resize-none shadow-sm" />
                </div>
                
                <div className="pt-4">
                  <a 
                    href="https://wa.me/919999999999" 
                    className="w-full flex items-center justify-center gap-3 rounded-2xl bg-emerald-600 px-8 py-5 text-lg font-extrabold text-white shadow-[0_10px_30px_rgba(5,150,105,0.2)] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(5,150,105,0.3)] hover:bg-emerald-700 hover:-translate-y-1"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function FormField({ id, label, type = 'text', placeholder }) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-[14px] font-extrabold tracking-wider text-slate-800 uppercase mb-3">
        {label}
      </label>
      <input id={id} type={type} placeholder={placeholder} className="w-full rounded-2xl border-2 border-slate-200 bg-slate-50 px-6 py-5 text-base text-slate-900 placeholder:text-slate-400 font-medium outline-none transition-all duration-300 hover:border-slate-300 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 shadow-sm" />
    </div>
  );
}

function ContactInfo({ icon, label, value }) {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-6 text-center lg:text-left">
      <div className="w-16 h-16 rounded-[1.25rem] bg-[#081a43] flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-blue-900/15">{icon}</div>
      <div className="pt-1">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">{label}</p>
        <p className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">{value}</p>
      </div>
    </div>
  );
}
