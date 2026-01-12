
import React, { useState } from 'react';
import ContactFormSection from './ContactFormSection';
import MapSection from './MapSection';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-300 py-8 group cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex justify-between items-center">
        <h4 className="text-2xl font-bold text-black group-hover:text-[#c5a059] transition-colors serif tracking-tight">{question}</h4>
        <svg 
          className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#c5a059]' : 'text-black'}`} 
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 mt-6' : 'max-h-0'}`}>
        <p className="text-gray-900 text-xl font-semibold leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <div className="animate-reveal bg-[#fcfcfc]">
      {/* Immersive Hero Section with High-Res Background */}
      <section className="relative min-h-[95vh] flex items-center pt-32 pb-24 overflow-hidden">
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070" 
            className="w-full h-full object-cover scale-105"
            alt="Premium Rice Grains"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="lg:pr-12">
              <div className="inline-block mb-6">
                <span className="text-[#c5a059] uppercase tracking-[0.6em] text-xs font-black py-2 px-6 border border-[#c5a059]/40 rounded-full bg-black/60 backdrop-blur-xl">
                  Get in Touch
                </span>
              </div>
              
              <h1 className="text-7xl md:text-[10rem] font-bold serif text-white mb-10 leading-[0.9] drop-shadow-2xl">
                Start a <br />
                <span className="italic font-normal text-[#c5a059]">Dialogue.</span>
              </h1>
              
              <p className="text-white text-3xl font-semibold max-w-xl mb-16 leading-relaxed italic serif">
                "Direct communication is the cornerstone of trust in global trade. Our team is ready to assist your supply requirements."
              </p>
              
              <div className="grid md:grid-cols-2 gap-12 border-t border-white/30 pt-16">
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-[0.3em] font-black text-[#c5a059]">Email Strategy Desk</span>
                  <a href="mailto:Raja.lodha6261@gmail.com" className="block text-3xl font-bold text-white hover:text-[#c5a059] transition-colors serif italic underline decoration-[#c5a059]/30">Raja.lodha6261@gmail.com</a>
                </div>
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-[0.3em] font-black text-[#c5a059]">Direct Hotline</span>
                  <a href="tel:+916261354272" className="block text-3xl font-bold text-white hover:text-[#c5a059] transition-colors serif italic underline decoration-[#c5a059]/30">+91 62613 54272</a>
                </div>
              </div>
            </div>

            <div className="w-full transform lg:translate-y-12">
              <ContactFormSection />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section with Side Info - Enlarged Layout */}
      <section className="py-48 bg-white">
        <div className="max-w-[1500px] mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-32 items-center">
            <div className="order-2 lg:order-1 lg:col-span-3 relative h-[850px] rounded-[4rem] overflow-hidden shadow-[0_80px_160px_rgba(0,0,0,0.2)] border border-gray-100">
              <MapSection />
            </div>
            
            <div className="order-1 lg:order-2 lg:col-span-2">
              <span className="text-[#c5a059] uppercase tracking-[0.5em] text-[12px] font-black mb-6 block">Global Presence</span>
              <h2 className="text-6xl md:text-9xl font-bold serif text-black mb-12 leading-tight">Heritage <br />Headquarters.</h2>
              
              <div className="space-y-20">
                <div className="group">
                  <h4 className="text-3xl font-bold text-black mb-8 serif border-b-4 border-[#c5a059]/40 pb-4 inline-block">Registered Office</h4>
                  <div className="text-black text-3xl font-bold leading-relaxed space-y-4 group-hover:text-black transition-colors">
                    <p>Jain Traders Inc.</p>
                    <p>Janpad Complex, Main Road</p>
                    <p>Bemetara, Chhattisgarh 491335</p>
                    <p className="text-[#c5a059] italic serif">India</p>
                  </div>
                </div>
                
                <div className="flex gap-12 items-center bg-[#f2f1ee] p-14 rounded-[4rem] border border-gray-300 shadow-md">
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-[#c5a059] shadow-xl border border-gray-100">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-black mb-2 serif">Availability</h4>
                    <p className="text-gray-950 text-2xl font-semibold">Mon-Sat: 09:00 — 18:00 IST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - High Contrast */}
      <section className="py-48 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-32">
            <div className="lg:col-span-5">
              <span className="text-[#c5a059] uppercase tracking-[0.5em] text-[12px] font-black mb-6 block">Insight Center</span>
              <h2 className="text-5xl md:text-8xl font-bold serif text-black mb-8 leading-[1.1]">Common <br />Queries.</h2>
              <p className="text-gray-950 text-2xl font-bold mb-12 leading-relaxed italic serif">Explore details about our trade standards and supply chain logistics.</p>
              
              <div className="relative group max-w-sm">
                <input 
                  type="email" 
                  placeholder="Official Email" 
                  className="w-full bg-white border-2 border-transparent border-b-black py-6 px-4 outline-none focus:border-b-[#c5a059] transition-all text-2xl font-bold serif text-black placeholder:text-gray-400"
                />
                <button className="mt-8 px-14 py-6 bg-black text-white text-xs uppercase font-black tracking-[0.4em] rounded-full hover:bg-[#c5a059] transition-all shadow-2xl">
                  Quick Inquiry
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-4">
                <FAQItem 
                  question="What makes Jain Traders the preferred choice?" 
                  answer="A combination of 27 years of sourcing expertise, mill-direct pricing, and a rigorous multi-stage quality control process for every batch."
                />
                <FAQItem 
                  question="How do you handle international shipments?" 
                  answer="We partner with tier-1 shipping lines to ensure reliable transit. Every container is sealed and tracked from our hub in Chhattisgarh to the final port."
                />
                <FAQItem 
                  question="Can you customize parboiling and aging?" 
                  answer="Absolutely. We tailor grain aging (up to 2 years) and parboiling degrees to meet specific regional culinary standards across the globe."
                />
                <FAQItem 
                  question="What is the minimum trade volume?" 
                  answer="We primarily serve bulk procurement needs starting from 20ft container loads for exports, and 1,000kg daily loads for domestic supply."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Heritage Awaits */}
      <section className="py-80 relative bg-[#0a0a0a] overflow-hidden text-center">
        <div className="absolute inset-0 opacity-70">
           <img 
            src="https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?q=80&w=2070" 
            className="w-full h-full object-cover grayscale"
            alt="Golden Harvest"
           />
           <div className="absolute inset-0 bg-[#c5a059]/40 mix-blend-multiply" />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="text-6xl md:text-[11rem] font-bold text-white serif mb-16 leading-none tracking-tight">
            Heritage <br /><span className="italic font-normal text-[#c5a059]">Awaits.</span>
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Contact;
