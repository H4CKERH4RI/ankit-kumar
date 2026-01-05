
import React from 'react';

const Skills: React.FC = () => {
  const technical = ['JavaScript/TypeScript', 'React & Next.js', 'Node.js', 'Python', 'PostgreSQL/MySQL', 'RESTful APIs', 'Cloud (AWS/Azure)'];
  const management = ['Agile/Scrum', 'Risk Assessment', 'Stakeholder Management', 'Sprint Planning', 'Resource Optimization', 'QA Management'];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Technical Prowess</h2>
          <div className="w-20 h-2 bg-emerald-500 mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-[#f8fafc] p-10 rounded-[3rem] border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-bold mb-8 flex items-center text-slate-900">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mr-4">
                <i className="fa-solid fa-code"></i>
              </div>
              Development Stack
            </h3>
            <div className="flex flex-wrap gap-4">
              {technical.map((skill) => (
                <span key={skill} className="px-5 py-3 bg-white text-slate-700 border border-slate-100 rounded-2xl text-sm font-bold shadow-sm hover:border-emerald-200 transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#f8fafc] p-10 rounded-[3rem] border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-bold mb-8 flex items-center text-slate-900">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mr-4">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              Management Expertise
            </h3>
            <div className="flex flex-wrap gap-4">
              {management.map((skill) => (
                <span key={skill} className="px-5 py-3 bg-white text-slate-700 border border-slate-100 rounded-2xl text-sm font-bold shadow-sm hover:border-blue-200 transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
