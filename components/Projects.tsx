
import React from 'react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Global ERP Enterprise',
      description: 'A massive multi-tenant ERP system for industrial scaling, featuring real-time logistics and financial reporting.',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '2',
      title: 'E-Commerce Engine',
      description: 'A high-conversion retail platform with custom search algorithms and seamless multi-gateway payments.',
      tech: ['Next.js', 'Tailwind', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '3',
      title: 'Analytics Dashboard',
      description: 'Enterprise data visualization suite for monitoring cross-departmental KPIs with ML insights.',
      tech: ['TypeScript', 'D3.js', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Showcasing Excellence</h2>
          <div className="w-20 h-2 bg-emerald-500 mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="group bg-[#f8fafc] rounded-[3rem] overflow-hidden border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="p-10">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-900">{project.title}</h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                  {project.description}
                </p>
                <a href="#contact" className="inline-flex items-center text-emerald-600 font-black text-sm hover:translate-x-2 transition-transform">
                  Project Inquiry <i className="fa-solid fa-chevron-right ml-2 text-xs"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
