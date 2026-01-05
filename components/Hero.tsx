
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-3/5 text-center md:text-left z-10">
          <div className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping mr-2"></span>
            Software Developer & Project Manager
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[1.1] mb-8">
            Building the <br/>
            <span className="gradient-text">Future of Web.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-xl leading-relaxed">
            I am <span className="font-bold text-slate-900 underline decoration-emerald-400 decoration-4">Ankit Kumar</span>, orchestrating success at <span className="font-semibold text-emerald-600">softserv.in</span> through clean code and strategic management.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#projects" className="px-10 py-5 btn-primary text-white rounded-2xl font-bold text-lg hover:translate-y-[-4px] transition-all shadow-xl shadow-emerald-200">
              View My Work
            </a>
            <a href="#contact" className="px-10 py-5 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center">
              Let's Talk <i className="fa-solid fa-arrow-right-long ml-3"></i>
            </a>
          </div>
          
          <div className="mt-12 flex items-center justify-center md:justify-start space-x-8 text-slate-400">
             <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="client" />
                ))}
                <div className="w-10 h-10 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-emerald-600">+15</div>
             </div>
             <p className="text-sm font-medium">Trusted by 20+ businesses across Jaipur</p>
          </div>
        </div>
        
        <div className="md:w-2/5 mt-20 md:mt-0 relative">
          <div className="relative mx-auto w-72 h-96 md:w-96 md:h-[550px]">
            {/* Geometric Background Decorations */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-100 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute inset-0 border-2 border-slate-200 rounded-[3rem] -rotate-3 transition-transform hover:rotate-0 duration-500"></div>
            
            {/* User Profile Image */}
            <div className="absolute inset-0 z-10 w-full h-full rounded-[3rem] overflow-hidden shadow-2xl bg-slate-200 border-8 border-white">
                <img 
                    src="https://raw.githubusercontent.com/AnkitAkki01/images/main/ankit.jpg" 
                    alt="Ankit Kumar" 
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                    onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
                    }}
                />
            </div>
            
            {/* Experience Floating Badge */}
            <div className="absolute top-1/4 -left-10 glass p-5 rounded-3xl shadow-xl z-20 border-emerald-100 animate-bounce delay-1000" style={{animationDuration: '3s'}}>
                <div className="flex items-center mb-1">
                    <span className="text-3xl font-black text-emerald-600">5+</span>
                    <span className="text-xs text-slate-400 font-bold ml-2 leading-tight uppercase">Years<br/>Exp.</span>
                </div>
            </div>

            {/* Current Role Floating Badge */}
            <div className="absolute bottom-10 -right-8 bg-slate-900 text-white p-5 rounded-3xl shadow-xl z-20">
                <div className="text-emerald-400 font-bold text-sm mb-1 uppercase tracking-widest">At softserv.in</div>
                <div className="text-xs font-medium text-slate-300">Leading Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
