
import React, { useState, useEffect } from 'react';

interface HomeProps {
  onNavigate: (page: 'home' | 'about' | 'contact') => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070',
      title: 'Legacy of Purity',
      tagline: 'ESTABLISHED 1997',
      subtitle: 'Strategic trade facilitation built on nearly three decades of market trust.'
    },
    {
      url: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=2070',
      title: 'Supply Chain Mastery',
      tagline: 'GLOBAL REACH',
      subtitle: 'Expertly bridging the gap between premium producers and global demand.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const riceVarieties = [
    {
      type: 'Parboiled Rice',
      image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=2070',
      features: [
        'Controlled steaming to retain vital nutrients',
        'Strong, firm grains with zero breakage',
        'Non-sticky texture after precision cooking',
        'Extended shelf life and consistent quality'
      ]
    },
    {
      type: 'Basmati Rice',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070',
      features: [
        'Long, slender grains with natural elongation',
        'Rich, aged aroma and superior flavor profile',
        'Fluffy texture ideal for premium cuisines',
        'Strictly sourced from vetted partner mills'
      ]
    },
    {
      type: 'Non-Basmati',
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/11/467106589/HC/GK/QM/223264842/indian-non-basmati-rice.jpg',
      features: [
        'Uniform grain size and dependable yield',
        'Soft texture suitable for regional dishes',
        'Cost-effective high-volume supply',
        'Reliable household and commercial utility'
      ]
    }
  ];

  const tradeSteps = [
    { 
      title: "Domestic Network", 
      desc: "Deeply rooted domestic supply chain handling over 1,000kg daily with unmatched reliability.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      title: "Strategic Sourcing", 
      desc: "Vetting top-tier partner mills to bridge local production with international quality standards.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    { 
      title: "Export Mediation", 
      desc: "Facilitating the transition from domestic mastery to global market acquisition and fulfillments.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    { 
      title: "Global Supply", 
      desc: "Seamless end-to-end logistics from Indian processing hubs to international port destinations.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2.5" />
        </svg>
      )
    }
  ];

  return (
    <div className="animate-reveal">
      {/* Hero Slider - Zoom restricted to background image layer ONLY */}
      <section className="relative h-[85vh] min-h-[600px] max-h-[1080px] overflow-hidden bg-[#050505]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Zoom strictly on image layer */}
            <div className="absolute inset-0 overflow-hidden">
                <div 
                  className={`absolute inset-0 bg-cover bg-center transition-transform duration-[12000ms] ease-linear ${
                    index === currentSlide ? 'scale-110' : 'scale-100'
                  }`}
                  style={{ backgroundImage: `url('${slide.url}')` }}
                />
            </div>
            
            {/* Non-scaling Overlays */}
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
            
            {/* Stable Content - Typography adjusted for laptop screen height */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 transform-none">
              <div className={`mb-4 transition-all duration-[1200ms] delay-300 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <span className="text-[#c5a059] uppercase tracking-[0.8em] text-[10px] md:text-[11px] font-black bg-black/50 backdrop-blur-md py-3 px-8 md:px-10 border border-[#c5a059]/40 rounded-sm inline-block">
                  {slide.tagline}
                </span>
              </div>
              
              <h2 className={`text-4xl md:text-7xl lg:text-8xl xl:text-[10rem] text-white font-bold mb-4 md:mb-6 leading-[1] md:leading-[0.9] serif drop-shadow-2xl transition-all duration-[1500ms] delay-500 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                {slide.title.split(' ')[0]} <br />
                <span className="italic font-normal text-[#c5a059]">{slide.title.split(' ').slice(1).join(' ')}</span>
              </h2>
              
              <p className={`text-white/80 text-sm md:text-lg lg:text-xl font-light tracking-[0.1em] max-w-2xl mb-8 md:mb-12 transition-all duration-[1800ms] delay-700 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {slide.subtitle}
              </p>
              
              <div className={`transition-all duration-[2000ms] delay-[900ms] ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="px-10 md:px-14 py-4 md:py-5 bg-[#c5a059] text-white text-[10px] md:text-[11px] uppercase tracking-[0.5em] font-black hover:bg-white hover:text-black transition-all rounded-sm shadow-[0_20px_50px_rgba(197,160,89,0.3)]"
                >
                  Initiate Trade
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* The Portfolio - ID added for footer navigation */}
      <section id="portfolio" className="py-24 md:py-32 bg-[#fcfcfc] relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-[#c5a059] text-[11px] font-black uppercase tracking-[0.6em] mb-4 block">Market Availability</span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold serif italic text-[#1a1a1a] leading-none">The Portfolio</h2>
            </div>
            <div className="hidden md:block">
              <p className="text-gray-400 text-sm font-medium border-l border-[#c5a059] pl-6 py-2 italic max-w-[240px]">
                "Premium mediation ensuring the finest grades reach global markets."
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {riceVarieties.map((rice, idx) => (
              <div key={idx} className="group h-[340px] md:h-[380px] [perspective:2000px]">
                <div className="relative h-full w-full transition-all duration-[900ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer">
                  
                  {/* Front Side */}
                  <div className="absolute inset-0 [backface-visibility:hidden]">
                    <div className="h-full w-full rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 bg-white">
                      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <img 
                        src={rice.image} 
                        alt={rice.type} 
                        className="h-full w-full object-cover transition-transform duration-[4s] group-hover:scale-110"
                      />
                      <div className="absolute bottom-12 left-12 z-20">
                        <h3 className="text-3xl md:text-4xl text-white serif font-bold italic drop-shadow-md">{rice.type}</h3>
                        <div className="flex items-center gap-3 mt-4">
                           <div className="w-10 h-[1px] bg-[#c5a059]"></div>
                           <p className="text-[#c5a059] text-[10px] font-black uppercase tracking-[0.4em]">Details</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 h-full w-full rounded-[2.5rem] bg-white border border-gray-100 shadow-2xl p-10 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center">
                    <div className="mb-6">
                      <h4 className="text-2xl font-bold serif italic text-[#1a1a1a] mb-2">{rice.type}</h4>
                      <div className="w-12 h-[2px] bg-[#c5a059]"></div>
                    </div>
                    
                    <ul className="space-y-4">
                      {rice.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex gap-4 items-start">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#c5a059] flex-shrink-0" />
                          <span className="text-[13px] font-medium leading-relaxed text-gray-600">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 pt-6 border-t border-gray-50">
                       <button onClick={() => onNavigate('contact')} className="text-[10px] font-black uppercase tracking-[0.4em] text-[#c5a059] hover:text-[#1a1a1a] transition-all">
                         Inquire Bulk Trade
                       </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Trade Mediation - ID added for footer navigation */}
      <section id="trade-mediation" className="py-24 md:py-40 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            
            {/* Visual Step Flow */}
            <div className="space-y-12 lg:pr-12">
              <div className="mb-16">
                <span className="text-[#c5a059] text-[11px] font-black uppercase tracking-[0.6em] mb-6 block">Trade Operations</span>
                <h2 className="text-5xl md:text-7xl font-bold serif text-white italic leading-tight">Strategic Trade <br /><span className="text-[#c5a059]">Mediation.</span></h2>
                <p className="text-gray-400 mt-6 text-sm font-light leading-relaxed max-w-lg">
                  Leveraging a dominant domestic supply chain established since 1997, Jain Traders is now seamlessly bridging local excellence with global export requirements.
                </p>
              </div>

              <div className="relative">
                {/* Vertical Line Connector */}
                <div className="absolute left-[31px] top-4 bottom-4 w-px bg-gradient-to-b from-[#c5a059] via-[#c5a059]/20 to-transparent hidden sm:block" />
                
                <div className="space-y-12">
                  {tradeSteps.map((step, i) => (
                    <div key={i} className="flex items-start gap-8 relative group">
                      {/* Interactive Point with 3D feel */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-[#1a1a1a] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] shadow-2xl transition-all duration-500 group-hover:bg-[#c5a059] group-hover:text-black group-hover:scale-110 group-hover:rotate-6">
                          {step.icon}
                        </div>
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-[#c5a059]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>

                      <div className="flex-grow pt-2">
                        <h4 className="text-white text-xl font-bold serif tracking-wider mb-2 group-hover:text-[#c5a059] transition-colors">{step.title}</h4>
                        <p className="text-gray-400 text-[13px] font-light leading-relaxed max-w-sm group-hover:text-gray-200 transition-colors">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Logistics Map Image Section (Colorful as requested) */}
            <div className="relative lg:sticky lg:top-32">
              <div className="aspect-[16/9] md:aspect-[4/3] lg:aspect-[4/5] overflow-hidden rounded-[3rem] md:rounded-[4rem] shadow-2xl group cursor-crosshair border border-white/5 bg-[#1a1a1a]">
                <img 
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070" 
                  alt="Global Supply Chain Logistics Network" 
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                {/* Visual Accent Layer */}
                <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 p-6 md:p-10 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl md:rounded-3xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                   <p className="text-[#c5a059] text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-2">Global Trade Infrastructure</p>
                   <p className="text-white text-lg md:text-xl font-bold serif italic leading-relaxed">Scaling from India's heartland to international ports with nearly 30 years of operational mastery.</p>
                </div>
              </div>
              
              {/* Floating Mediation Badge */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#c5a059] rounded-full hidden xl:flex flex-col items-center justify-center p-8 text-center shadow-2xl rotate-12 hover:rotate-0 transition-transform duration-700">
                 <p className="text-black font-black uppercase text-[10px] tracking-widest leading-tight">Established <br /> Domestic <br /> Giant</p>
                 <div className="w-8 h-px bg-black/30 my-4" />
                 <span className="text-black/80 text-[8px] font-bold uppercase tracking-widest">Global Exporter</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation of Trust Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
             <h2 className="text-5xl md:text-6xl font-bold serif text-[#1a1a1a] mb-4">Foundation of Trust</h2>
             <div className="flex items-center justify-center gap-4">
               <div className="w-12 h-[px] bg-gray-200"></div>
               <p className="text-gray-400 text-xs tracking-[0.5em] uppercase font-black">Heritage Since 1997</p>
               <div className="w-12 h-[px] bg-gray-200"></div>
             </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
             {[
               { title: "27+ Years", label: "Industry Standing" },
               { title: "Global", label: "Trade Routes" },
               { title: "Vetted", label: "Network" },
               { title: "Premium", label: "Sourcing" }
             ].map((stat, i) => (
               <div key={i} className="bg-[#fcfcfc] border border-gray-100 p-10 md:p-14 rounded-[2.5rem] text-center group hover:bg-[#1a1a1a] hover:border-[#1a1a1a] transition-all duration-700">
                  <h3 className="text-3xl lg:text-5xl font-black serif italic text-[#1a1a1a] mb-4 group-hover:text-[#c5a059] transition-colors">{stat.title}</h3>
                  <p className="text-gray-400 text-[9px] font-black uppercase tracking-[0.3em] group-hover:text-white/40 transition-colors">{stat.label}</p>
               </div>
             ))}
          </div>

          {/* CTA Banner Section */}
          <div className="mt-32 relative group overflow-hidden rounded-[3rem] md:rounded-[4rem] shadow-2xl bg-[#0a0a0a]">
            <div 
              className="absolute inset-0 bg-cover bg-center grayscale opacity-20 transition-transform duration-[4s] group-hover:scale-105"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=2070')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
            
            <div className="relative z-10 p-12 md:p-24 lg:p-32 flex flex-col items-center md:items-start text-center md:text-left space-y-10">
              <div className="space-y-4">
                <span className="text-[#c5a059] text-[10px] font-black uppercase tracking-[0.8em] block">Empowering Excellence</span>
                <h3 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white serif italic leading-[1.1] max-w-4xl">
                  Empowering international <br /> trade through expertise.
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-8 justify-center md:justify-start">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="px-12 md:px-16 py-6 md:py-7 bg-[#c5a059] text-white text-[12px] md:text-[13px] font-black uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all rounded-sm shadow-2xl active:scale-95"
                >
                  Start Inquiry
                </button>
                <div className="flex items-center gap-6 border-l border-white/20 pl-8 hidden sm:flex">
                  <div>
                    <p className="text-white text-sm font-bold serif">Established Network</p>
                    <p className="text-gray-400 text-[10px] uppercase tracking-widest mt-1">Global Trade Desk</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#c5a059] via-white to-[#c5a059] opacity-30" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
