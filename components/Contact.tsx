
import React, { useState } from 'react';
import MapSection from './MapSection';
import ContactFormSection from './ContactFormSection';


const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-6 md:py-8 group cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex justify-between items-center gap-4">
        <h4 className="text-lg md:text-2xl font-bold text-[#1a1a1a] group-hover:text-[#c5a059] transition-colors duration-200 serif tracking-tight">{question}</h4>
        <svg 
          className={`w-5 h-5 md:w-6 md:h-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#c5a059]' : 'text-gray-400'}`} 
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 mt-4 md:mt-6' : 'max-h-0'}`}>
        <p className="text-gray-700 text-base md:text-xl font-medium leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <div className="animate-reveal bg-[#fcfcfc]">
      {/* Hero Section with Gradient Background */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#2a2a2a]">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a059] rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c5a059] rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070" 
            className="w-full h-full object-cover opacity-20"
            alt="Premium Rice Grains"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#1a1a1a]/70 to-[#0a0a0a]/98"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-block mb-6 md:mb-8">
                <span className="text-[#c5a059] uppercase tracking-[0.4em] text-xs font-black py-3 px-6 border-2 border-[#c5a059]/30 rounded-full bg-white/5 backdrop-blur-sm">
                  Contact Channel
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold serif text-white mb-6 md:mb-8 leading-[1.1]">
                Let's <span className="text-[#c5a059] italic font-light">Connect</span>
              </h1>
              
              <p className="text-gray-300 text-lg md:text-xl lg:text-2xl font-light max-w-2xl mx-auto lg:mx-0 mb-12 md:mb-16 leading-relaxed">
                Direct communication is the cornerstone of trust in global trade. Our team is ready to assist your supply requirements.
              </p>
              
              {/* Contact Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto lg:mx-0">
                <a href="mailto:jaintradersexports@gmail.com" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-5 md:p-6 hover:bg-white/10 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#c5a059]/20 flex items-center justify-center group-hover:bg-[#c5a059]/30 group-hover:scale-110 transition-all duration-300">
                      <svg className="w-5 h-5 text-[#c5a059] group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <span className="text-xs uppercase tracking-wider font-bold text-[#c5a059]">Email</span>
                  </div>
                  <span className="text-white text-sm md:text-base font-medium group-hover:text-[#c5a059] transition-colors break-all block">
                    jaintradersexports@gmail.com
                  </span>
                </a>

                <a href="tel:+916261354272" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-5 md:p-6 hover:bg-white/10 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#c5a059]/20 flex items-center justify-center group-hover:bg-[#c5a059]/30 group-hover:scale-110 transition-all duration-300">
                      <svg className="w-5 h-5 text-[#c5a059] group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <span className="text-xs uppercase tracking-wider font-bold text-[#c5a059]">Phone</span>
                  </div>
                  <span className="text-white text-sm md:text-base font-medium group-hover:text-[#c5a059] transition-colors block">
                    +91 62613 54272
                  </span>
                </a>
              </div>
            </div>

            {/* Right Content - Form */}
            <div className="w-full max-w-xl mx-auto lg:mx-0">
              <ContactFormSection />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Adjusted Height and Width Ratio */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Wider Map Section with lesser height */}
            <div className="lg:col-span-7 relative h-[450px] md:h-[550px] rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-gray-100">
              <MapSection />
            </div>
            
            {/* Narrower Content Section beside the map */}
            <div className="lg:col-span-5 flex flex-col justify-center px-4 lg:px-8">
              <span className="text-[#c5a059] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[11px] font-black mb-4 md:mb-6 block">Global Presence</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold serif text-[#1a1a1a] mb-6 md:mb-10 leading-none">Heritage <br />Headquarters.</h2>
              
              <div className="space-y-8 md:space-y-10">
                <div className="group">
                  <h4 className="text-xl md:text-2xl font-bold text-[#1a1a1a] mb-4 md:mb-5 serif border-b border-[#c5a059]/20 pb-2 inline-block">Registered Office</h4>
                  <div className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed space-y-1">
                    <p className="text-[#1a1a1a]">Jain Traders</p>
                    <p>Parpodi, Parpodi</p>
                    <p>Bemetara, Chhattisgarh 491993</p>
                    <p className="font-bold text-[#c5a059] mt-2">India</p>
                  </div>
                </div>
                
                <div className="flex gap-5 md:gap-6 items-center bg-[#fcfcfc] p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-full bg-white flex items-center justify-center text-[#c5a059] shadow-inner border border-gray-50">
                    <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-[#1a1a1a] mb-0.5 serif">Availability</h4>
                    <p className="text-gray-500 text-sm md:text-base font-medium">Mon-Sat: 09:00 — 18:00 IST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (Preserved as requested) */}
      <section className="py-16 md:py-24 lg:py-40 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-12 md:gap-20 lg:gap-32">
            <div className="lg:col-span-5">
              <span className="text-[#c5a059] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">Insight Center</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold serif text-[#1a1a1a] mb-4 md:mb-8 leading-[1.1]">Common <br />Queries.</h2>
              <p className="text-gray-700 text-lg md:text-xl lg:text-2xl font-medium mb-8 md:mb-12 leading-relaxed italic serif">Explore details about our trade standards and supply chain logistics.</p>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-2 md:space-y-4">
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

      {/* CTA Section */}
      <section className="py-32 md:py-48 lg:py-72 relative bg-[#0a0a0a] overflow-hidden text-center">
        <div className="absolute inset-0 opacity-50 md:opacity-60">
           <img 
            src="https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?q=80&w=2070" 
            className="w-full h-full object-cover grayscale"
            alt="Golden Harvest"
           />
           <div className="absolute inset-0 bg-[#c5a059]/30 mix-blend-multiply" />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-bold text-white serif mb-8 md:mb-16 leading-none tracking-tight">
            Heritage <br /><span className="italic font-normal text-[#c5a059]">Awaits.</span>
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Contact;
