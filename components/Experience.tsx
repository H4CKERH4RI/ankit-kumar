
import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">My Professional Timeline</h2>
          <div className="w-20 h-2 bg-emerald-500 mx-auto rounded-full mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 hidden md:block"></div>
          
          {/* Current Role */}
          <div className="relative mb-16 md:mb-24 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
               <div className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest mb-4">2021 — PRESENT</div>
               <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">Lead Developer & PM</h3>
               <div className="text-lg font-bold text-emerald-600 mb-4">softserv.in • Jaipur</div>
               <p className="text-slate-500 leading-relaxed italic">
                 "Driving innovation and project excellence at the heart of Rajasthan's tech ecosystem."
               </p>
            </div>
            <div className="absolute left-[-12px] md:left-1/2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-white shadow-lg -translate-x-1/2 z-10 hidden md:block"></div>
            <div className="md:w-1/2 md:pl-12">
               <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
                  <ul className="space-y-4 text-slate-600">
                    <li className="flex items-start">
                        <i className="fa-solid fa-circle-check text-emerald-500 mt-1 mr-3"></i>
                        <span>Managing full project lifecycles for international clients.</span>
                    </li>
                    <li className="flex items-start">
                        <i className="fa-solid fa-circle-check text-emerald-500 mt-1 mr-3"></i>
                        <span>Implementing Agile methodologies to improve team efficiency by 40%.</span>
                    </li>
                  </ul>
               </div>
            </div>
          </div>

          {/* Past Foundation */}
          <div className="relative flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
               <div className="inline-block px-4 py-1 bg-slate-200 text-slate-600 rounded-full text-xs font-black uppercase tracking-widest mb-4">EARLY CAREER</div>
               <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">Freelance Consultant</h3>
               <div className="text-lg font-bold text-slate-500 mb-4">Independent Contractor</div>
               <p className="text-slate-500 leading-relaxed italic">
                 "Building the foundation of technical expertise through diverse client challenges."
               </p>
            </div>
            <div className="absolute left-[-12px] md:left-1/2 w-6 h-6 bg-slate-300 rounded-full border-4 border-white shadow-lg -translate-x-1/2 z-10 hidden md:block"></div>
            <div className="md:w-1/2 md:pr-12">
               <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
                  <p className="text-slate-600 leading-relaxed">
                    Developed MVPs for over 15+ local startups, mastering various frontend and backend technologies while learning the art of client communication and project scope management.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
