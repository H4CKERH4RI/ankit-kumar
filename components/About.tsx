
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="absolute -top-10 -left-10 text-[120px] font-black text-slate-200 opacity-40 select-none">ABOUT</div>
             <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
                    Dedicated to <span className="text-emerald-500">Excellence</span> in Every Line of Code.
                </h2>
                <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                    <p>
                        Based in the vibrant city of <span className="font-bold text-slate-900">Jaipur</span>, I am a multi-disciplinary professional with a focus on creating high-impact digital solutions. My journey at <span className="text-emerald-600 font-bold italic">softserv.in</span> has been defined by leading cross-functional teams and shipping robust products.
                    </p>
                    <p>
                        I bridge the gap between business vision and technical reality. As both a developer and a project manager, I understand the nuances of the software lifecycle, from the first line of code to the final deployment and stakeholder delivery.
                    </p>
                </div>
                
                <div className="mt-12 flex items-center space-x-12">
                   <div>
                      <div className="text-4xl font-black text-slate-900">50+</div>
                      <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Projects</div>
                   </div>
                   <div className="w-px h-12 bg-slate-200"></div>
                   <div>
                      <div className="text-4xl font-black text-slate-900">100%</div>
                      <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Success Rate</div>
                   </div>
                </div>
             </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              { title: 'Project Management', icon: 'fa-chess-king', desc: 'Strategy & Execution' },
              { title: 'Software Dev', icon: 'fa-code-branch', desc: 'Modern Tech Stacks' },
              { title: 'Team Leadership', icon: 'fa-crown', desc: 'Guidance & Mentoring' },
              { title: 'Jaipur Native', icon: 'fa-map-pin', desc: 'Local Expertise' }
            ].map((box) => (
              <div key={box.title} className="p-8 bg-white rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
                <i className={`fa-solid ${box.icon} text-3xl text-emerald-500 mb-6 group-hover:scale-110 transition-transform`}></i>
                <h4 className="font-bold text-slate-900 text-lg mb-2">{box.title}</h4>
                <p className="text-xs text-slate-400 font-bold uppercase">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
