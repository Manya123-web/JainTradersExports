
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-110"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')" }}
      />
      
      {/* Premium Blur Overlay Layer */}
      <div className="absolute inset-0 z-10 bg-black/40 backdrop-blur-sm transition-all duration-1000" />
      
      <div className="relative z-20 text-center px-6 max-w-5xl animate-reveal">
        <div className="inline-block mb-6">
          <span className="text-[#c5a059] uppercase tracking-[0.5em] text-xs font-bold py-2 px-4 border border-[#c5a059]/30 rounded-full bg-black/20 backdrop-blur-md">
            Premier Corporate Hub
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl text-white font-bold mb-8 leading-[1.1] drop-shadow-2xl">
          Let&apos;s Start a <br />
          <span className="italic serif font-normal text-[#c5a059]">Conversation</span>
        </h1>
        
        <div className="flex flex-col items-center gap-8">
          <div className="w-px h-24 bg-gradient-to-b from-[#c5a059] to-transparent"></div>
          <p className="text-white/80 text-lg md:text-xl font-light tracking-wide max-w-2xl">
            Excellence in trading, built on a foundation of trust and global connectivity. 
            We are here to bridge the gap between your vision and reality.
          </p>
        </div>
      </div>
      
      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-[#c5a059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
