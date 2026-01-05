
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: "fa-code",
      title: "Custom Software Dev",
      desc: "Tailored web applications built with React, Node.js, and modern cloud architectures.",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      icon: "fa-users",
      title: "Project Management",
      desc: "End-to-end execution of complex projects using Agile, Scrum, and efficient resource planning.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: "fa-database",
      title: "System Architecture",
      desc: "Designing scalable database structures and API ecosystems for enterprise growth.",
      color: "bg-amber-50 text-amber-600"
    },
    {
      icon: "fa-chart-line",
      title: "Business Strategy",
      desc: "Consulting on digital transformation to help businesses automate and scale faster.",
      color: "bg-rose-50 text-rose-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4">What I Offer</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Expert Services for Modern Businesses</h3>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Combining technical mastery with management precision to deliver excellence at softserv.in.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group p-10 bg-[#f8fafc] rounded-[2.5rem] border border-slate-100 hover:border-emerald-200 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 text-2xl group-hover:scale-110 transition-transform`}>
                <i className={`fa-solid ${service.icon}`}></i>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-500 leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
