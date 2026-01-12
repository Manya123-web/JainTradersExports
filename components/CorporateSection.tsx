
import React from 'react';

const CorporateSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-8 leading-tight">
              Corporate Headquarters
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Jain Traders stands at the intersection of tradition and modern commerce. Our headquarters in Bemetara serves as the heartbeat of our global logistics and sourcing operations.
              </p>
              <div className="border-l-4 border-[#c5a059] pl-6 py-2">
                <p className="font-semibold text-[#1a1a1a]">Registered Office:</p>
                <p>Jain Traders, Janpad Complex, Main Road</p>
                <p>Near Post Office, Bemetara</p>
                <p>Chhattisgarh - 491335, India</p>
              </div>
              <div className="flex flex-col gap-4 pt-4">
                <a href="tel:+916261354272" className="flex items-center gap-4 text-[#1a1a1a] hover:text-[#c5a059] transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#c5a059] group-hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <span className="font-medium">+91 62613 54272</span>
                </a>
                <a href="mailto:Raja.lodha6261@gmail.com" className="flex items-center gap-4 text-[#1a1a1a] hover:text-[#c5a059] transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#c5a059] group-hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <span className="font-medium">Raja.lodha6261@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-[4/5] bg-gray-200 overflow-hidden shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                 alt="Modern Office Interior" 
                 className="w-full h-full object-cover"
               />
             </div>
             <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#c5a059] p-8 hidden md:block">
                <p className="text-white text-3xl font-bold leading-tight uppercase">Est. 1995</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateSection;
