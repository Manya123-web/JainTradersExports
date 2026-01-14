
import React from 'react';

interface FooterProps {
  onNavigate: (page: 'home' | 'about' | 'contact', section?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white text-[#1a1a1a] pt-32 pb-12 relative overflow-hidden">
      {/* Large Background Text */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none select-none opacity-[0.03] translate-y-1/4">
        <h2 className="text-[30vw] font-black serif uppercase leading-none text-center">Jain Traders</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center text-white italic serif text-2xl">J</div>
              <h1 className="serif uppercase tracking-[0.2em] text-xl font-bold">Jain Traders</h1>
            </div>
            <p className="text-gray-400 font-light leading-relaxed max-w-sm">
              Providing premium grains to the world since 1997. From farm sourcing to global delivery, we redefine excellence in every grain.
            </p>
            {/* Badges removed as requested */}
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div className="space-y-6">
                <h5 className="text-sm font-bold text-[#1a1a1a]">Trade Operations</h5>
                <ul className="space-y-4 text-sm text-gray-500 font-light">
                  <li><button onClick={() => onNavigate('home', 'trade-mediation')} className="hover:text-[#c5a059] transition-colors text-left">Strategic Trade Mediation</button></li>
                  <li><button onClick={() => onNavigate('home', 'trade-mediation')} className="hover:text-[#c5a059] transition-colors text-left">Domestic Network</button></li>
                  <li><button onClick={() => onNavigate('home', 'trade-mediation')} className="hover:text-[#c5a059] transition-colors text-left">Global Logistics</button></li>
                  <li><button onClick={() => onNavigate('home', 'trade-mediation')} className="hover:text-[#c5a059] transition-colors text-left">Vetted Sourcing</button></li>
                </ul>
              </div>
              <div className="space-y-6">
                <h5 className="text-sm font-bold text-[#1a1a1a]">Products</h5>
                <ul className="space-y-4 text-sm text-gray-500 font-light">
                  <li><button onClick={() => onNavigate('home', 'portfolio')} className="hover:text-[#c5a059] transition-colors text-left">Basmati Rice</button></li>
                  <li><button onClick={() => onNavigate('home', 'portfolio')} className="hover:text-[#c5a059] transition-colors text-left">Parboiled Rice</button></li>
                  <li><button onClick={() => onNavigate('home', 'portfolio')} className="hover:text-[#c5a059] transition-colors text-left">Non-Basmati</button></li>
                  <li><button onClick={() => onNavigate('home', 'portfolio')} className="hover:text-[#c5a059] transition-colors text-left">Bulk Supply</button></li>
                </ul>
              </div>
              <div className="space-y-6">
                <h5 className="text-sm font-bold text-[#1a1a1a]">About Us</h5>
                <ul className="space-y-4 text-sm text-gray-500 font-light">
                  <li><button onClick={() => onNavigate('about', 'heritage-story')} className="hover:text-[#c5a059] transition-colors text-left">Our Heritage</button></li>
                  <li><button onClick={() => onNavigate('about', 'visionaries')} className="hover:text-[#c5a059] transition-colors text-left">Visionaries</button></li>
                  <li><button onClick={() => onNavigate('about', 'core-advantages')} className="hover:text-[#c5a059] transition-colors text-left">Core Advantages</button></li>
                  <li><button onClick={() => onNavigate('contact')} className="hover:text-[#c5a059] transition-colors text-left">Global Trading Desk</button></li>
                </ul>
              </div>
              <div className="space-y-6">
                <h5 className="text-sm font-bold text-[#1a1a1a]">Connect</h5>
                <ul className="space-y-4 text-sm text-gray-500 font-light">
                  <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#c5a059] transition-colors">LinkedIn</a></li>
                  <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#c5a059] transition-colors">Instagram</a></li>
                  <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#c5a059] transition-colors">Facebook</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-400 font-light italic">© 2024 Jain Traders. All rights reserved.</p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-[#1a1a1a]">
            <button onClick={() => onNavigate('contact')} className="hover:text-[#c5a059] transition-colors">Privacy Policy</button>
            <button onClick={() => onNavigate('contact')} className="hover:text-[#c5a059] transition-colors">Terms of Trade</button>
            <button onClick={() => onNavigate('contact')} className="hover:text-[#c5a059] transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
