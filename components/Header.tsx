
import React, { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: 'home' | 'about' | 'contact') => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { id: 'home', label: 'Home', num: '01' },
    { id: 'about', label: 'About Us', num: '02' },
    { id: 'contact', label: 'Contact Us', num: '03' },
  ];

  const handleNavigate = (id: 'home' | 'about' | 'contact') => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white/90 backdrop-blur-xl border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="cursor-pointer group flex items-center gap-3" 
            onClick={() => handleNavigate('home')}
          >
            <div className="relative overflow-hidden w-10 h-10 flex items-center justify-center bg-[#1a1a1a] rounded-sm transition-transform group-hover:rotate-12">
              <span className="text-white italic serif text-xl">J</span>
            </div>
            <h1 className="serif uppercase tracking-[0.2em] text-lg font-bold text-[#1a1a1a]">Jain Traders</h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id as any)}
                className={`relative py-1 text-[11px] uppercase tracking-[0.3em] font-bold transition-all ${
                  currentPage === item.id ? 'text-[#c5a059]' : 'text-gray-400 hover:text-[#1a1a1a]'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-[#c5a059] transition-all duration-500 ${currentPage === item.id ? 'w-full' : 'w-0'}`} />
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden flex flex-col gap-1.5 p-2 z-[110] relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2 bg-white' : 'bg-[#1a1a1a]'}`} />
            <span className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0 bg-white' : 'bg-[#1a1a1a]'}`} />
            <span className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2 bg-white' : 'bg-[#1a1a1a]'}`} />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 z-[105] md:hidden transition-all duration-700 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Backdrop glass */}
        <div className={`absolute inset-0 bg-[#0a0a0a]/98 backdrop-blur-2xl transition-opacity duration-700 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Pattern Background Overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]" />

        <div className="relative flex flex-col h-full pt-32 pb-12 px-10 overflow-y-auto">
          {/* Top Logo in Sidebar */}
          <div className="mb-16">
            <div className="w-12 h-12 bg-[#c5a059] flex items-center justify-center rounded-sm mb-4">
              <span className="text-black italic serif text-2xl font-bold">J</span>
            </div>
            <h2 className="text-white serif uppercase tracking-[0.2em] text-sm font-bold">Jain Traders</h2>
          </div>

          <div className="flex flex-col gap-10">
            <span className="text-[#c5a059] uppercase tracking-[0.5em] text-[10px] font-black border-l-2 border-[#c5a059] pl-4">Menu</span>
            
            <div className="flex flex-col gap-6">
              {navItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id as any)}
                  className={`group flex items-baseline gap-4 text-left transition-all duration-500 ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <span className="text-[#c5a059] serif italic text-sm">{item.num}</span>
                  <span className={`text-4xl md:text-5xl font-bold serif transition-all duration-300 ${
                    currentPage === item.id ? 'text-[#c5a059]' : 'text-white group-hover:text-[#c5a059]'
                  }`}>
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className={`mt-auto pt-12 border-t border-white/10 transition-all duration-700 delay-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid grid-cols-1 gap-8">
              <div>
                <p className="text-[#c5a059] text-[9px] tracking-[0.4em] font-black uppercase mb-4">Direct Communication</p>
                <div className="space-y-3">
                  <a 
                    href="mailto:Raja.lodha6261@gmail.com" 
                    className="flex items-center gap-3 text-white/80 hover:text-[#c5a059] transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#c5a059] group-hover:text-black transition-all">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    </div>
                    <span className="text-sm font-medium">Raja.lodha6261@gmail.com</span>
                  </a>
                  <a 
                    href="tel:+916261354272" 
                    className="flex items-center gap-3 text-white/80 hover:text-[#c5a059] transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#c5a059] group-hover:text-black transition-all">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </div>
                    <span className="text-sm font-medium">+91 62613 54272</span>
                  </a>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-full h-px bg-white/10 my-4" />
              </div>
              
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">© 2024 Jain Traders • Heritage Since 1997</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
