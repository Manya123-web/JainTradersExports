
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
      subtitle: 'Sourcing the finest grains since 1997'
    },
    {
      url: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?q=80&w=2070',
      title: 'Global Connectivity',
      subtitle: 'Excellence in international supply chains'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const riceVarieties = [
    {
      type: 'Parboiled Rice',
      image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=2070',
      features: [
        'Processed through controlled steaming to retain nutrients',
        'Strong and firm grains with minimal breakage',
        'Non-sticky texture after cooking',
        'Longer shelf life and consistent quality',
        'Suitable for daily consumption and bulk cooking'
      ]
    },
    {
      type: 'Basmati Rice',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070',
      features: [
        'Long, slender, and uniform grains',
        'Naturally rich aroma and superior taste',
        'Excellent elongation and fluffiness after cooking',
        'Ideal for biryanis, festive dishes, and premium cuisines',
        'High purity and carefully sourced quality'
      ]
    },
    {
      type: 'Non-Basmati Rice',
      image: 'https://images.unsplash.com/photo-1527324688151-0e627063f2b1?q=80&w=2070',
      features: [
        'Uniform grain size and dependable quality',
        'Soft and balanced texture after cooking',
        'Versatile use for everyday and regional dishes',
        'Cost-effective with good yield',
        'Suitable for household and commercial consumption'
      ]
    }
  ];

  return (
    <div className="animate-reveal">
      {/* Dynamic Hero Slider */}
      <section className="relative h-[95vh] overflow-hidden bg-black">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[15s] scale-110"
              style={{ backgroundImage: `url('${slide.url}')` }}
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
          </div>
        ))}
        
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="overflow-hidden mb-12">
             <div className="flex items-center gap-6 animate-reveal">
                <div className="w-16 h-[1px] bg-[#c5a059]"></div>
                <span className="text-[#c5a059] uppercase tracking-[1em] text-[10px] font-black py-3 px-10 border-2 border-[#c5a059]/40 bg-black/40 backdrop-blur-2xl">
                  Quality that ships
                </span>
                <div className="w-16 h-[1px] bg-[#c5a059]"></div>
             </div>
          </div>
          <h2 className="text-7xl md:text-[10rem] text-white font-bold mb-12 leading-[0.9] serif drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            Global Grain <br />
            <span className="italic font-normal text-[#c5a059]">Solutions.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <button 
              onClick={() => onNavigate('about')}
              className="px-16 py-6 bg-[#c5a059] text-white text-[12px] uppercase tracking-[0.5em] font-black hover:bg-white hover:text-[#111] transition-all shadow-[0_20px_50px_rgba(197,160,89,0.3)] rounded-sm"
            >
              Our Heritage
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="px-16 py-6 border-2 border-white/20 text-white text-[12px] uppercase tracking-[0.5em] font-black hover:bg-white hover:text-[#111] transition-all rounded-sm backdrop-blur-md"
            >
              Partner With Us
            </button>
          </div>
          
          <div className="absolute bottom-16 flex gap-6">
            {slides.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentSlide(i)}
                className={`w-20 h-[3px] transition-all duration-1000 ${i === currentSlide ? 'bg-[#c5a059] scale-x-125' : 'bg-white/10'}`} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Rice Varieties Showcase */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32 max-w-4xl mx-auto">
            <h2 className="text-7xl md:text-9xl font-bold mb-10 serif italic text-[#1a1a1a]">The Selection</h2>
            <div className="w-32 h-1.5 bg-[#c5a059] mx-auto mb-10"></div>
            <p className="text-gray-400 text-2xl font-light leading-relaxed italic serif">
              "Discover our range of superior Indian rice varieties, meticulously processed to meet world-class benchmarks."
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-16">
            {riceVarieties.map((rice, idx) => (
              <div key={idx} className="group flex flex-col h-full bg-[#fcfcfc] border border-gray-100 rounded-[3rem] overflow-hidden hover:shadow-[0_80px_120px_rgba(0,0,0,0.1)] transition-all duration-1000">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    src={rice.image} 
                    alt={rice.type} 
                    loading="lazy"
                    className="w-full h-full object-cover img-hover-bw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-12 left-12">
                    <h3 className="text-6xl font-bold text-white serif italic">{rice.type}</h3>
                  </div>
                </div>
                <div className="p-16 flex-grow">
                  <h4 className="text-[#c5a059] text-[12px] font-black uppercase tracking-[0.5em] mb-10 border-b border-[#c5a059]/20 pb-6">Core Features</h4>
                  <ul className="space-y-8">
                    {rice.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex gap-6 text-lg text-gray-500 leading-relaxed group/item transition-all hover:text-[#1a1a1a]">
                        <span className="text-[#c5a059] font-black italic">/</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
