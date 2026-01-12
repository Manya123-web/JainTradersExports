
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-[#1a1a1a] pt-32 pb-12 relative overflow-hidden">
      {/* Large Background Text */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none select-none opacity-[0.03] translate-y-1/4">
        <h2 className="text-[30vw] font-black serif uppercase leading-none text-center">Jain Traders</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center text-white italic serif text-2xl">J</div>
              <h1 className="serif uppercase tracking-[0.2em] text-xl font-bold">Jain Traders</h1>
            </div>
            <p className="text-gray-400 font-light leading-relaxed max-w-sm">
              Providing premium grains to the world since 1997. From farm sourcing to global delivery, we redefine excellence in every grain.
            </p>
            <div className="flex gap-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" className="h-10 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" alt="App Store" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" className="h-10 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" alt="Play Store" />
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div className="space-y-6">
                <h5 className="text-sm font-bold text-[#1a1a1a]">What we do</h5>
                <ul className="space-y-4 text-sm text-gray-500 font-light">
                  <li><a href="#" className="hover:text-[#c5a059] transition-colors">Sourcing</a></li>
                  <li><a href="#" className="hover:text-[#c5a059] transition-colors">Processing</a></li>
                  <li><a href="#" className="hover:text-[#c5a059] transition-colors">Exporting</a></li>
                  <li><a href="#" className="hover:text-[#c5a059] transition-colors">Logistics</a></li>
                </ul>
              </div>
              <div className="space-y-6">
                <h5 className="text-sm font-bold text-[#1a1a1a]">Products</h5>
                <ul className="space-y-4 text-sm text-gray-500 font-light">
                  <li><a href="#" className="hover:text-[#c5a059] transition-colors">Basmati Rice</a></li>
                  <li><a href="#" className="hover:text-[#c5a059] transition-colors">Parboiled Rice</a></li>
                  <li><a href="#" className="hover:text-[#c5a059] transition-colors">Non-Basmati</a></li>
                  <li><a href="#" className="hover:text-[#c5a059] transition-colors">Bulk Supply</a></li>
                </ul>
              </div>
              <div className="space-y-6">
                <h5 className="text-sm font-bold text-[#1a1a1a]">Company</h5>
                <ul className="space-y-4 text-sm text-gray-500 font-light">
                  <li><a href="#" className="hover:text-[#c5a059] transition-colors">Our Story</a></li>
                  <li><a href="#" className="hover:text-[#c5a059] transition-colors">Our Team</a></li>
                  <li><a href="#" className="hover:text-[#c5a059] transition-colors">Certifications</a></li>
                  <li><a href="#" className="hover:text-[#c5a059] transition-colors">Careers</a></li>
                </ul>
              </div>
              <div className="space-y-6">
                <h5 className="text-sm font-bold text-[#1a1a1a]">Connect</h5>
                <ul className="space-y-4 text-sm text-gray-500 font-light">
                  <li><a href="#" className="hover:text-[#c5a059] transition-colors">Twitter</a></li>
                  <li><a href="#" className="hover:text-[#c5a059] transition-colors">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-[#c5a059] transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-[#c5a059] transition-colors">GitHub</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-400 font-light italic">© 2024 Jain Traders. All rights reserved.</p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-[#1a1a1a]">
            <a href="#" className="hover:text-[#c5a059] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#c5a059] transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-[#c5a059] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
