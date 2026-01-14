
import React from 'react';

interface AboutProps {
  onNavigate?: (page: 'home' | 'about' | 'contact') => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <div className="animate-reveal bg-[#fcfcfc] overflow-hidden">
      {/* Luxury Hero Section */}
      <section className="relative min-h-[70vh] lg:min-h-[85vh] flex items-center bg-[#0a0a0a] pt-20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#c5a059_0%,transparent_50%)] opacity-20" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,#c5a059_0%,transparent_50%)] opacity-10" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
              <span className="text-[#c5a059] uppercase tracking-[0.5em] text-[9px] md:text-[10px] font-bold py-2 px-4 border border-[#c5a059]/20 inline-block bg-black/40 backdrop-blur-md">
                Legacy of Excellence
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold serif mb-4 leading-tight">
                Heritage in <br />
                <span className="text-[#c5a059] italic font-normal">Every Grain.</span>
              </h1>
              <p className="text-gray-400 text-sm md:text-base lg:text-lg font-light max-w-lg mx-auto lg:mx-0 leading-relaxed italic serif opacity-80">
                "Founded in 1997, Jain Traders is a legacy built on the foundations of uncompromising quality and ethical transparency."
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative p-6 md:p-12 group cursor-pointer">
                <div className="absolute inset-0 border-2 border-[#c5a059]/10 rounded-full animate-[ping_4s_linear_infinite]" />
                <div className="absolute inset-2 border border-[#c5a059]/20 rounded-full animate-[spin_20s_linear_infinite]" />
                
                <div className="w-48 h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-full flex items-center justify-center backdrop-blur-3xl bg-white/5 border border-white/10 transition-all duration-700 group-hover:scale-105 group-hover:bg-[#c5a059]/10 shadow-[0_0_60px_rgba(197,160,89,0.1)]">
                   <div className="text-center">
                     <span className="text-6xl md:text-7xl font-bold text-[#c5a059] serif block tracking-tighter leading-none">27</span>
                     <div className="w-8 md:w-10 h-px bg-white/40 mx-auto my-2 md:my-3"></div>
                     <span className="text-white text-[7px] md:text-[9px] uppercase tracking-[0.3em] font-bold opacity-80 block px-4">Years of Global Trust</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Story - ID for Footer Navigation */}
      <section id="heritage-story" className="py-16 md:py-24 lg:py-32 relative bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="aspect-[4/3] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.05)] relative">
                <img 
                  src="https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?q=80&w=2070" 
                  alt="Rice Sourcing Heritage" 
                  loading="lazy"
                  className="w-full h-full object-cover grayscale transition-all duration-[1s] group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-700" />
              </div>
              {/* Tilted badge that straightens on hover */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-[#1a1a1a] p-6 md:p-10 shadow-2xl transition-all duration-700 rotate-6 group-hover:rotate-0 group-hover:scale-105 border-l-4 border-[#c5a059]">
                <span className="text-[#c5a059] text-3xl md:text-5xl font-bold serif block mb-1 italic">1997</span>
                <span className="text-white text-[10px] md:text-[12px] uppercase tracking-[0.4em] font-black opacity-100">The Foundation</span>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
              <div className="space-y-2">
                <h2 className="text-[9px] md:text-xs font-bold uppercase tracking-[0.4em] text-[#c5a059]">Our History</h2>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold serif text-[#1a1a1a] leading-tight">The Heritage</h3>
              </div>
              <div className="space-y-4 md:space-y-6 text-gray-500 text-base md:text-lg font-light leading-relaxed">
                <p>
                  Established in 1997, Jain Traders has built a strong and dependable presence in the domestic rice trading market through consistent performance and principled business practices.
                </p>
                <p>
                  Founded and led by Proprietor <span className="text-[#1a1a1a] font-semibold">Mr. Kamlesh Jain</span>, the firm began as a focused sourcing operation and steadily evolved into a reliable supply partner.
                </p>
                <p>
                  Today, supplying over <span className="text-[#1a1a1a] font-medium italic">1,000 kg</span> of rice daily, we stand as a testament to reliability and an unwavering commitment to quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Minimalist Scale */}
      <section className="py-16 md:py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-px bg-white/5 rounded-[1.5rem] md:rounded-[3rem] overflow-hidden border border-white/5 shadow-xl">
            <div className="p-8 md:p-14 lg:p-16 bg-[#0f0f0f] hover:bg-[#151515] transition-all duration-700 relative group border-b lg:border-b-0 lg:border-r border-white/5">
              <div className="mb-6 md:mb-8">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#c5a059]/10 flex items-center justify-center text-[#c5a059] group-hover:bg-[#c5a059] group-hover:text-white transition-all duration-700">
                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white serif mb-4 italic">Our Vision</h3>
              <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed mb-6">
                To carry forward the Indian tradition of purity and honesty in food trade by becoming a trusted global name in rice, delivering quality grains that uphold nourishment.
              </p>
              <div className="w-8 h-[2px] bg-[#c5a059] transition-all duration-700 group-hover:w-full"></div>
            </div>
            
            <div className="p-8 md:p-14 lg:p-16 bg-[#0a0a0a] hover:bg-[#101010] transition-all duration-700 relative group">
              <div className="mb-6 md:mb-8">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-700">
                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white serif mb-4 italic">Our Mission</h3>
              <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed mb-6">
                To operate with integrity by systematically sourcing and supplying superior-quality grains for global markets while preserving our heritage of transparency.
              </p>
              <div className="w-8 h-[2px] bg-[#c5a059] transition-all duration-700 group-hover:w-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Visionaries - ID for Footer Navigation */}
      <section id="visionaries" className="py-16 md:py-24 lg:py-32 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-20 space-y-2">
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold serif text-[#1a1a1a]">The Visionaries</h2>
             <p className="text-[#c5a059] font-bold tracking-[0.4em] text-[8px] md:text-[10px] uppercase">Heritage Meets Innovation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
            <div className="group space-y-6">
              <div className="relative aspect-square overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] shadow-lg transition-all duration-700 group-hover:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974" 
                  alt="Mr. Kamlesh Jain" 
                  loading="lazy"
                  className="w-full h-full object-cover grayscale brightness-90 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
                <div className="absolute inset-4 border border-white/0 group-hover:border-white/20 rounded-[1.2rem] md:rounded-[2.2rem] transition-all duration-700" />
              </div>
              <div className="text-center space-y-2 px-4">
                <h4 className="text-xl md:text-2xl font-bold text-[#1a1a1a] serif">Mr. Kamlesh Jain</h4>
                <p className="text-[#c5a059] text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-2">Founder & Proprietor</p>
                <p className="text-gray-800 max-w-xs mx-auto text-sm font-semibold italic">
                  "Building trust since 1997 through ethical values."
                </p>
              </div>
            </div>
            
            <div className="group space-y-6">
              <div className="relative aspect-square overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] shadow-lg transition-all duration-700 group-hover:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974" 
                  alt="Mr. Raja Jain" 
                  loading="lazy"
                  className="w-full h-full object-cover grayscale brightness-90 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
                <div className="absolute inset-4 border border-white/0 group-hover:border-white/20 rounded-[1.2rem] md:rounded-[2.2rem] transition-all duration-700" />
              </div>
              <div className="text-center space-y-2 px-4">
                <h4 className="text-xl md:text-2xl font-bold text-[#1a1a1a] serif">Mr. Raja Jain</h4>
                <p className="text-[#c5a059] text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-2">Global Strategy Lead</p>
                <p className="text-gray-800 max-w-xs mx-auto text-sm font-semibold italic">
                  "Expanding horizons while upholding our legacy of quality."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Advantages - ID for Footer Navigation */}
      <section id="core-advantages" className="py-16 md:py-32 bg-[#0a0a0a] relative overflow-hidden scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-12 md:mb-20 flex flex-col lg:flex-row justify-between lg:items-end border-b border-white/5 pb-8 lg:pb-12 gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold serif text-white leading-tight">Why Partners <br /><span className="text-[#c5a059] italic font-normal">Choose Us</span></h2>
            <p className="text-gray-400 max-w-xs text-sm md:text-base font-light italic border-l-2 border-[#c5a059] pl-4 lg:pl-6">
              "Nearly three decades of proof stands as reliability."
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl">
            {[
              { title: "ESTABLISHED LEADERSHIP", desc: "Guided by deep local expertise and focused export management criteria.", icon: "01" },
              { title: "TRADING CAPABILITY", desc: "Consistent domestic supply handling over 1,000kg daily with coordination.", icon: "02" },
              { title: "INTEGRITY AT CORE", desc: "Transparent and fair trade practices define our firm's operations.", icon: "03" },
              { title: "EXPORT READY", desc: "A reliable supply chain built to support international markets with control.", icon: "04" }
            ].map((item, i) => (
              <div key={i} className="bg-[#111] p-8 md:p-14 lg:p-16 group hover:bg-[#1a1a1a] transition-all duration-700 cursor-default">
                <span className="text-5xl md:text-7xl font-black text-[#c5a059]/10 group-hover:text-[#c5a059]/20 transition-all serif block mb-4 italic leading-none">
                  {item.icon}
                </span>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4 serif tracking-widest transition-colors group-hover:text-[#c5a059]">
                  {item.title}
                </h4>
                <p className="text-gray-500 group-hover:text-gray-400 text-sm md:text-base leading-relaxed font-light transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
