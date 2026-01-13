
import React, { useState } from 'react';

const ContactFormSection: React.FC = () => {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
      <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-2 serif">Get in Touch</h3>
      <p className="text-gray-500 text-sm md:text-base mb-6 md:mb-8">Direct Channel to Excellence</p>
      
      <form className="space-y-5 md:space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="text"
              id="firstName"
              className="w-full bg-transparent border-2 border-gray-100 rounded-xl px-4 py-3 md:py-4 text-[#1a1a1a] placeholder-transparent peer focus:border-[#c5a059] transition-all duration-200 outline-none"
              placeholder="First name"
              required
            />
            <label 
              htmlFor="firstName"
              className="absolute left-4 top-3.5 md:top-4.5 text-sm md:text-base text-gray-400 transition-all duration-200 ease-in-out pointer-events-none 
                         peer-focus:-top-2.5 peer-focus:text-xs peer-focus:bg-white peer-focus:px-2 peer-focus:text-[#c5a059] 
                         peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
            >
              First name
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              id="lastName"
              className="w-full bg-transparent border-2 border-gray-100 rounded-xl px-4 py-3 md:py-4 text-[#1a1a1a] placeholder-transparent peer focus:border-[#c5a059] transition-all duration-200 outline-none"
              placeholder="Last name"
              required
            />
            <label 
              htmlFor="lastName"
              className="absolute left-4 top-3.5 md:top-4.5 text-sm md:text-base text-gray-400 transition-all duration-200 ease-in-out pointer-events-none 
                         peer-focus:-top-2.5 peer-focus:text-xs peer-focus:bg-white peer-focus:px-2 peer-focus:text-[#c5a059] 
                         peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
            >
              Last name
            </label>
          </div>
        </div>

        <div className="relative">
          <input
            type="email"
            id="email"
            className="w-full bg-transparent border-2 border-gray-100 rounded-xl px-4 py-3 md:py-4 text-[#1a1a1a] placeholder-transparent peer focus:border-[#c5a059] transition-all duration-200 outline-none"
            placeholder="Your email address"
            required
          />
          <label 
            htmlFor="email"
            className="absolute left-4 top-3.5 md:top-4.5 text-sm md:text-base text-gray-400 transition-all duration-200 ease-in-out pointer-events-none 
                       peer-focus:-top-2.5 peer-focus:text-xs peer-focus:bg-white peer-focus:px-2 peer-focus:text-[#c5a059] 
                       peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
          >
            Your email address
          </label>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="relative col-span-1">
            <select className="w-full bg-transparent border-2 border-gray-100 rounded-xl px-3 py-3 md:py-4 text-[#1a1a1a] focus:border-[#c5a059] transition-all duration-200 outline-none appearance-none cursor-pointer">
              <option value="+91">+91 (IN)</option>
              <option value="+1">+1 (US)</option>
              <option value="+44">+44 (UK)</option>
            </select>
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </div>

          <div className="relative col-span-2">
            <input
              type="tel"
              id="phone"
              className="w-full bg-transparent border-2 border-gray-100 rounded-xl px-4 py-3 md:py-4 text-[#1a1a1a] placeholder-transparent peer focus:border-[#c5a059] transition-all duration-200 outline-none"
              placeholder="Phone number"
              required
            />
            <label 
              htmlFor="phone"
              className="absolute left-4 top-3.5 md:top-4.5 text-sm md:text-base text-gray-400 transition-all duration-200 ease-in-out pointer-events-none 
                         peer-focus:-top-2.5 peer-focus:text-xs peer-focus:bg-white peer-focus:px-2 peer-focus:text-[#c5a059] 
                         peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
            >
              Phone number
            </label>
          </div>
        </div>

        <div className="relative">
          <textarea
            id="message"
            rows={4}
            className="w-full bg-transparent border-2 border-gray-100 rounded-xl px-4 py-3 md:py-4 text-[#1a1a1a] placeholder-transparent peer focus:border-[#c5a059] transition-all duration-200 outline-none resize-none"
            placeholder="Describe your requirements"
            required
          />
          <label 
            htmlFor="message"
            className="absolute left-4 top-3.5 md:top-4.5 text-sm md:text-base text-gray-400 transition-all duration-200 ease-in-out pointer-events-none 
                       peer-focus:-top-2.5 peer-focus:text-xs peer-focus:bg-white peer-focus:px-2 peer-focus:text-[#c5a059] 
                       peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
          >
            Describe your requirements
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-4 md:py-5 bg-[#1a1a1a] hover:bg-[#c5a059] text-white font-black text-xs md:text-sm uppercase tracking-[0.3em] rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.01] flex items-center justify-center gap-3"
        >
          <span>Initiate Dialogue</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
        </button>

        <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest font-bold">
          Strictly Confidential Sourcing Dialogue
        </p>
      </form>
    </div>
  );
};

const MapSection: React.FC = () => {
  // Using a search-based embed with iwloc=near to suppress default info windows
  const query = encodeURIComponent("JAIN TRADERS, PARPODI, Bemetara, Chhattisgarh 491993");
  const embedUrl = `https://www.google.com/maps?q=${query}&output=embed&z=15&iwloc=near`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
  
  return (
    <section className="relative w-full h-full bg-[#f4f4f4]">
      <div className="absolute inset-0 z-0">
        <iframe 
          src={embedUrl}
          className="w-full h-full transition-opacity duration-500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Jain Traders Location"
        ></iframe>
      </div>
      
      {/* Floating Info Card - Positioned carefully to stay visible */}
      <div className="absolute top-8 left-1/2 md:left-8 -translate-x-1/2 md:translate-x-0 z-10 w-[90%] max-w-[280px] md:max-w-[320px]">
        <div className="bg-white p-5 md:p-6 rounded-xl md:rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] md:shadow-[0_40px_80px_rgba(0,0,0,0.2)] border border-gray-100 transition-all hover:scale-[1.02] duration-300">
          <div className="flex items-center gap-3 md:gap-4 mb-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1a1a1a] rounded-lg md:rounded-xl flex items-center justify-center text-[#c5a059] italic serif text-xl md:text-2xl font-bold shadow-md flex-shrink-0">J</div>
            <div className="min-w-0">
              <h4 className="text-sm md:text-base font-bold text-[#1a1a1a] truncate">Jain Traders</h4>
              <p className="text-[10px] md:text-[11px] text-[#c5a059] font-black uppercase tracking-[0.1em] truncate">Quality that ships</p>
            </div>
          </div>
          
          <div className="text-xs md:text-sm text-gray-800 font-medium space-y-1 md:space-y-2 mb-5 border-l-2 border-[#c5a059] pl-3 md:pl-4">
            <p className="font-bold text-[#1a1a1a] uppercase tracking-wider text-[10px] md:text-[11px]">Parpodi Facility</p>
            <p className="leading-relaxed">Main Market Area</p>
            <p>Bemetara, Chhattisgarh 491993</p>
          </div>
          
          <a 
            href={mapsUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 md:gap-3 w-full py-3 md:py-4 bg-[#1a1a1a] text-white text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] rounded-lg md:rounded-xl group hover:bg-[#c5a059] transition-all duration-300"
          >
            <span>Navigate Now</span>
            <svg className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

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
                <a href="mailto:Raja.lodha6261@gmail.com" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-5 md:p-6 hover:bg-white/10 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#c5a059]/20 flex items-center justify-center group-hover:bg-[#c5a059]/30 group-hover:scale-110 transition-all duration-300">
                      <svg className="w-5 h-5 text-[#c5a059] group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <span className="text-xs uppercase tracking-wider font-bold text-[#c5a059]">Email</span>
                  </div>
                  <span className="text-white text-sm md:text-base font-medium group-hover:text-[#c5a059] transition-colors break-all block">
                    Raja.lodha6261@gmail.com
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
                    <p>Parpodi, Main Market Area</p>
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
              
              <div className="relative group max-w-sm">
                <input 
                  type="email" 
                  placeholder="Official Email" 
                  className="w-full bg-white border-2 border-transparent border-b-gray-400 py-4 md:py-6 px-3 md:px-4 outline-none focus:border-b-[#c5a059] transition-all duration-300 text-lg md:text-xl font-medium serif text-[#1a1a1a]"
                />
                <button className="mt-6 md:mt-8 px-8 md:px-12 py-4 md:py-5 bg-[#1a1a1a] text-white text-[9px] md:text-[10px] uppercase font-black tracking-[0.3em] md:tracking-[0.4em] rounded-full hover:bg-[#c5a059] transition-all duration-300 shadow-xl">
                  Quick Inquiry
                </button>
              </div>
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
