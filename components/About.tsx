
import React from 'react';

interface AboutProps {
  onNavigate?: (page: 'home' | 'about' | 'contact') => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <div className="animate-reveal bg-[#fcfcfc] overflow-hidden">
      {/* Luxury Hero Section with 27-Year Animation */}
      <section className="relative min-h-[85vh] flex items-center bg-[#0a0a0a] pt-20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#c5a059_0%,transparent_50%)] opacity-20" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,#c5a059_0%,transparent_50%)] opacity-10" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <span className="text-[#c5a059] uppercase tracking-[0.6em] text-[11px] font-bold py-2 px-4 border border-[#c5a059]/20 inline-block bg-black/40 backdrop-blur-md">
                Legacy of Excellence
              </span>
              <h1 className="text-7xl md:text-9xl text-white font-bold serif mb-8 leading-[1]">
                Heritage in <br />
                <span className="text-[#c5a059] italic font-normal">Every Grain.</span>
              </h1>
              <p className="text-gray-400 text-xl font-light max-w-xl leading-relaxed italic serif">
                "Founded in 1997, Jain Traders is a legacy built on the foundations of uncompromising quality and ethical transparency."
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative p-16 group cursor-pointer">
                {/* 27 Years Animated Badge Area */}
                <div className="absolute inset-0 border-2 border-[#c5a059]/20 rounded-full animate-[ping_4s_linear_infinite]" />
                <div className="absolute inset-4 border border-[#c5a059]/40 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-8 border border-[#c5a059]/60 rounded-full animate-[spin_10s_linear_reverse_infinite]" />
                
                <div className="w-80 h-80 rounded-full flex items-center justify-center backdrop-blur-3xl bg-white/5 border border-white/10 transition-all duration-700 group-hover:scale-110 group-hover:bg-[#c5a059]/10 shadow-[0_0_100px_rgba(197,160,89,0.1)]">
                   <div className="text-center">
                     <span className="text-[120px] font-bold text-[#c5a059] serif block tracking-tighter leading-none">27</span>
                     <div className="w-12 h-px bg-white/40 mx-auto my-4"></div>
                     <span className="text-white text-[10px] uppercase tracking-[0.5em] font-bold opacity-80 block">Years of Global Trust</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Story - Color to Grayscale Hover */}
      <section className="py-40 relative bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] relative">
                <img 
                  src="https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?q=80&w=2070" 
                  alt="Rice Sourcing Heritage" 
                  loading="lazy"
                  className="w-full h-full object-cover img-hover-bw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-[#1a1a1a] p-16 shadow-2xl rotate-2 transition-transform duration-700 group-hover:rotate-0 border-l-8 border-[#c5a059]">
                <span className="text-[#c5a059] text-7xl font-bold serif block mb-2 italic">1997</span>
                <span className="text-white text-[11px] uppercase tracking-[0.4em] font-bold opacity-60">The Foundation Year</span>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-12">
              <div className="space-y-4">
                <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#c5a059]">Our History</h2>
                <h3 className="text-6xl md:text-8xl font-bold serif text-[#1a1a1a] leading-none">The Heritage</h3>
              </div>
              <div className="space-y-8 text-gray-500 text-xl font-light leading-relaxed">
                <p>
                  Established in 1997, Jain Traders has built a strong and dependable presence in the domestic rice trading market through consistent performance and principled business practices.
                </p>
                <p>
                  Founded and led by Proprietor <span className="text-[#1a1a1a] font-semibold">Mr. Kamlesh Jain</span>, the firm began as a focused sourcing operation and steadily evolved into a reliable supply partner within the domestic market. 
                </p>
                <p>
                  Today, supplying approximately 1,000 kg of rice daily, we stand as a testament to reliability, credibility, and an unwavering commitment to quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - High Appeal Section */}
      <section className="py-40 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-px bg-white/10 rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl">
            <div className="p-24 bg-[#0f0f0f] hover:bg-[#151515] transition-all duration-700 relative group border-b lg:border-b-0 lg:border-r border-white/5">
              <div className="mb-12">
                <div className="w-20 h-20 rounded-full bg-[#c5a059]/10 flex items-center justify-center text-[#c5a059] group-hover:bg-[#c5a059] group-hover:text-white transition-all duration-700">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                </div>
              </div>
              <h3 className="text-6xl font-bold text-white serif mb-10 italic">Our Vision</h3>
              <p className="text-gray-400 text-2xl font-light leading-relaxed mb-8">
                To carry forward the timeless Indian tradition of <span className="text-white italic">purity and honesty</span> in food trade by becoming a trusted name in rice, delivering quality grains that uphold nourishment across generations.
              </p>
              <div className="w-16 h-[2px] bg-[#c5a059] transition-all duration-700 group-hover:w-full"></div>
            </div>
            
            <div className="p-24 bg-[#0a0a0a] hover:bg-[#101010] transition-all duration-700 relative group">
              <div className="mb-12">
                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-700">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
              </div>
              <h3 className="text-6xl font-bold text-white serif mb-10 italic">Our Mission</h3>
              <p className="text-gray-400 text-2xl font-light leading-relaxed mb-8">
                To operate with uncompromising integrity by systematically sourcing and supplying superior-quality grains for global markets while preserving our heritage.
              </p>
              <div className="w-16 h-[2px] bg-[#c5a059] transition-all duration-700 group-hover:w-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Visionaries - B&W Hover */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32 space-y-4">
             <h2 className="text-7xl md:text-9xl font-bold serif text-[#1a1a1a]">The Visionaries</h2>
             <p className="text-[#c5a059] font-bold tracking-[0.6em] text-[11px] uppercase">Heritage Meets Innovation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-32">
            <div className="group space-y-12">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[3rem] shadow-2xl transition-all duration-1000 group-hover:shadow-[#c5a059]/20">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974" 
                  alt="Mr. Kamlesh Jain" 
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-1000 img-hover-bw grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>
              <div className="text-center space-y-4">
                <h4 className="text-5xl font-bold text-[#1a1a1a] serif">Mr. Kamlesh Jain</h4>
                <p className="text-[#c5a059] text-[12px] font-black uppercase tracking-[0.5em] mb-6">Founder & Proprietor</p>
                <p className="text-gray-400 max-w-sm mx-auto text-lg font-light leading-relaxed italic">
                  "Building trust since 1997 through consistent local sourcing and ethical values."
                </p>
              </div>
            </div>
            
            <div className="group space-y-12">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[3rem] shadow-2xl transition-all duration-1000 group-hover:shadow-[#c5a059]/20">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974" 
                  alt="Mr. Raja Jain" 
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-1000 img-hover-bw grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>
              <div className="text-center space-y-4">
                <h4 className="text-5xl font-bold text-[#1a1a1a] serif">Mr. Raja Jain</h4>
                <p className="text-[#c5a059] text-[12px] font-black uppercase tracking-[0.5em] mb-6">Global Strategy Lead</p>
                <p className="text-gray-400 max-w-sm mx-auto text-lg font-light leading-relaxed italic">
                  "Expanding horizons with a modern vision while upholding our legacy of quality."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enlarged Core Advantages - Massive Appeal */}
      <section className="py-48 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-32 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-16 gap-8">
            <h2 className="text-7xl md:text-[10rem] font-bold serif text-white leading-[0.9]">Why Partners <br /><span className="text-[#c5a059] italic font-normal">Choose Us</span></h2>
            <p className="text-gray-400 max-w-sm text-xl font-light leading-relaxed italic border-l-2 border-[#c5a059] pl-8">
              "Nearly three decades of sustained performance stands as proof of our reliability."
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl">
            {[
              { title: "ESTABLISHED LEADERSHIP", desc: "Guided by deep local expertise and focused export management to ensure every shipment meets premium criteria.", icon: "01" },
              { title: "TRADING CAPABILITY", desc: "Consistent domestic supply of premium rice varieties at scale, handling over 1,000kg daily with flawless coordination.", icon: "02" },
              { title: "INTEGRITY AT CORE", desc: "Transparent, fair, and accountable trade practices define our firm's heritage and daily operations.", icon: "03" },
              { title: "EXPORT READY", desc: "A reliable supply chain built to support international markets with rigorous quality control and modern logistics.", icon: "04" }
            ].map((item, i) => (
              <div key={i} className="bg-[#111] p-24 group hover:bg-[#1a1a1a] transition-all duration-700 cursor-default flex flex-col justify-between h-full">
                <div>
                  <span className="text-[12rem] font-black text-[#c5a059]/10 group-hover:text-[#c5a059]/30 transition-all serif block mb-12 italic tracking-tighter leading-none">
                    {item.icon}
                  </span>
                  <h4 className="text-4xl font-bold text-white mb-8 serif tracking-[0.2em] transition-colors group-hover:text-[#c5a059]">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 group-hover:text-gray-300 text-2xl leading-relaxed font-light transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
