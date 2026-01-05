
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#0f172a] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
              Ready to start your <span className="gradient-text">next big thing?</span>
            </h2>
            <p className="text-slate-400 text-xl mb-12 max-w-lg">
              Whether you have a specific project in mind or just want to explore possibilities, I'm here to help.
            </p>
            
            <div className="grid gap-10">
              <div className="flex items-start">
                <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center mr-8 border border-emerald-500/30 flex-shrink-0">
                  <i className="fa-solid fa-paper-plane text-emerald-400 text-xl"></i>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-black mb-1">Direct Email</div>
                  <a href="mailto:officialakki555@gmail.com" className="text-xl md:text-2xl font-bold hover:text-emerald-400 transition-colors">officialakki555@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mr-8 border border-blue-500/30 flex-shrink-0">
                  <i className="fa-solid fa-mobile-screen-button text-blue-400 text-xl"></i>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-black mb-1">Let's Call</div>
                  <a href="tel:+918290039141" className="text-xl md:text-2xl font-bold hover:text-blue-400 transition-colors">+91 82900 39141</a>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-slate-800 flex items-center space-x-8">
                <a href="#" className="text-slate-500 hover:text-white transition-colors"><i className="fa-brands fa-linkedin text-3xl"></i></a>
                <a href="#" className="text-slate-500 hover:text-white transition-colors"><i className="fa-brands fa-github text-3xl"></i></a>
                <a href="#" className="text-slate-500 hover:text-white transition-colors"><i className="fa-brands fa-square-x-twitter text-3xl"></i></a>
            </div>
          </div>
          
          <div className="bg-slate-800/30 p-12 rounded-[3rem] border border-slate-700/50 backdrop-blur-md">
            <h3 className="text-3xl font-bold mb-10">Send a Brief</h3>
            <form className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest">Full Name</label>
                  <input type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-all text-white" placeholder="Ankit Kumar" />
                </div>
                <div className="space-y-3">
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest">Work Email</label>
                  <input type="email" className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-all text-white" placeholder="ankit@softserv.in" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest">Project Vision</label>
                <textarea rows={5} className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-all text-white resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              <button className="w-full py-5 btn-primary rounded-2xl font-black text-lg hover:translate-y-[-4px] transition-all shadow-2xl shadow-emerald-500/20">
                Initiate Project
              </button>
            </form>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-slate-800 text-center flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} ANKIT KUMAR. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
             <a href="#" className="hover:text-emerald-400">Privacy</a>
             <a href="#" className="hover:text-emerald-400">Terms</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
