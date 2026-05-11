import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Corporate Headquarters',
    category: 'Office Infrastructure',
    description: '200+ workstation deployment with complete electrical and networking setup',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
  },
  {
    title: 'Banking Operations Center',
    category: 'Financial Services',
    description: 'Secure workspace with Gunnebo storage solutions and structured cabling',
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&h=400&fit=crop',
  },
  {
    title: 'Co-working Space',
    category: 'Flexible Workspace',
    description: 'Modern collaborative environment with ergonomic Wipro furniture',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
  },
  {
    title: 'Government Office',
    category: 'Public Sector',
    description: 'Large-scale modular workstation installation with IT infrastructure',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-24 md:py-32">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-medium tracking-widest text-blue-600 uppercase mb-4">
            Our Work
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight">
            Project Showcase
          </h2>
          <p className="mt-4 text-neutral-500 leading-relaxed">
            Explore our portfolio of successfully delivered corporate infrastructure projects 
            across various industries.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-neutral-100 aspect-[4/3] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                crossOrigin="anonymous"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="inline-flex items-center self-start px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs font-medium text-white mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-white/70 max-w-md">
                  {project.description}
                </p>
              </div>

              {/* Hover Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
