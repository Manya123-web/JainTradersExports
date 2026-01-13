
import React from 'react';

const MapSection: React.FC = () => {
  // Using a search-based query for reliability
  const query = encodeURIComponent("JAIN TRADERS, PARPODI, Bemetara, Chhattisgarh 491993");
  const embedUrl = `https://www.google.com/maps?q=${query}&output=embed&z=15`;
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
      
      {/* Custom Floating Card */}
      <div className="absolute top-8 left-1/2 md:left-8 -translate-x-1/2 md:translate-x-0 z-10 w-[90%] max-w-[280px] md:max-w-[320px]">
        <div className="bg-white p-5 md:p-6 lg:p-8 rounded-xl md:rounded-2xl lg:rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.15)] md:shadow-[0_40px_80px_rgba(0,0,0,0.2)] border border-gray-100 transition-transform hover:scale-105 duration-500">
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1a1a1a] rounded-lg md:rounded-xl flex items-center justify-center text-[#c5a059] italic serif text-xl md:text-2xl font-bold shadow-md flex-shrink-0">J</div>
            <div className="min-w-0">
              <h4 className="text-sm md:text-base font-bold text-[#1a1a1a] truncate">Jain Traders</h4>
              <p className="text-[10px] md:text-[11px] text-[#c5a059] font-black uppercase tracking-[0.1em] truncate">Quality that ships</p>
            </div>
          </div>
          
          <div className="text-xs md:text-sm text-gray-800 font-medium space-y-1 md:space-y-2 mb-5 md:mb-8 border-l-2 border-[#c5a059] pl-3 md:pl-4">
            <p className="font-bold text-[#1a1a1a] uppercase tracking-wider text-[10px] md:text-[11px]">Parpodi Facility</p>
            <p className="leading-relaxed">Main Market Area</p>
            <p>Bemetara, Chhattisgarh 491993</p>
          </div>
          
          <a 
            href={mapsUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 md:gap-3 w-full py-3 md:py-4 bg-[#1a1a1a] text-white text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] rounded-lg md:rounded-xl group hover:bg-[#c5a059] transition-all"
          >
            <span className="truncate">Open Google Maps</span>
            <svg className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
