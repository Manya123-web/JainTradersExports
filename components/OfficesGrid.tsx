
import React from 'react';

const ContactInfoSection: React.FC = () => {
  const cards = [
    {
      title: "Inquiries",
      desc: "Trade proposals & export logistics.",
      linkText: "Raja.lodha6261@gmail.com",
      linkHref: "mailto:Raja.lodha6261@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      )
    },
    {
      title: "Consultation",
      desc: "Immediate sourcing & pricing updates.",
      linkText: "+91 62613 54272",
      linkHref: "tel:+916261354272",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      )
    },
    {
      title: "Headquarters",
      desc: "Visit our operations hub in Bemetara.",
      linkText: "Bemetara, Chhattisgarh 491335",
      linkHref: "#",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-0 border border-gray-100 rounded-[2rem] overflow-hidden bg-white shadow-2xl">
        {cards.map((card, i) => (
          <div 
            key={i} 
            className={`group p-12 flex flex-col items-center text-center transition-all duration-700 hover:bg-[#fafafa] cursor-default ${i !== 2 ? 'lg:border-r border-gray-50' : ''}`}
          >
            <div className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center text-[#c5a059] mb-8 group-hover:scale-110 transition-transform">
              {card.icon}
            </div>
            
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2 serif tracking-tight">
              {card.title}
            </h3>
            
            <p className="text-gray-400 mb-8 font-light text-sm italic">
              {card.desc}
            </p>
            
            <a 
              href={card.linkHref} 
              className="text-sm font-bold text-[#1a1a1a] group-hover:text-[#c5a059] transition-colors border-b border-[#c5a059]/30 pb-1"
            >
              {card.linkText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactInfoSection;
