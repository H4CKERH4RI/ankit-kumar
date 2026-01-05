
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3 glass shadow-lg' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-extrabold tracking-tighter text-slate-900 flex items-center">
            <span className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center mr-2 text-white text-base">AK</span>
            ANKIT<span className="text-emerald-500">.</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
            >
              {item.name}
            </a>
          ))}
          <a href="#contact" className="ml-4 px-5 py-2 btn-primary text-white text-sm font-bold rounded-lg hover:scale-105 transition-all">
            Hire Me
          </a>
        </div>

        <div className="md:hidden">
            <button className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm">
                <i className="fa-solid fa-bars-staggered text-slate-900"></i>
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
