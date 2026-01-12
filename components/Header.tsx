
import React from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: 'home' | 'about' | 'contact') => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white/90 backdrop-blur-xl border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="cursor-pointer group flex items-center gap-3" 
          onClick={() => onNavigate('home')}
        >
          <div className="relative overflow-hidden w-10 h-10 flex items-center justify-center bg-[#1a1a1a] rounded-sm transition-transform group-hover:rotate-12">
            <span className="text-white italic serif text-xl">J</span>
          </div>
          <h1 className="serif uppercase tracking-[0.2em] text-lg font-bold text-[#1a1a1a]">Jain Traders</h1>
        </div>

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
      </div>
    </header>
  );
};

export default Header;
