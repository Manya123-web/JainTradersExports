
import React from 'react';

const MapSection: React.FC = () => {
  // Coordinates for Bemetara, Chhattisgarh (approximate center for the business area)
  const lat = 21.7197;
  const lng = 81.5344;
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  return (
    <section className="relative w-full h-full bg-[#f4f4f4]">
      <div className="absolute inset-0 z-0">
        <iframe 
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.8!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQzJzExLjAiTiA4McKwMzInMDMuOCJF!5e0!3m2!1sen!2sin!4v1700000000000`}
          className="w-full h-full grayscale opacity-70"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
      {/* Reference Image Style Floating Card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[135%] z-10 w-full max-w-[360px]">
        <div className="bg-white p-10 rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.3)] border border-gray-100 transition-transform hover:scale-105 duration-500">
          <div className="flex items-center gap-5 mb-8">
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-[#c5a059] italic serif text-3xl font-bold shadow-xl">J</div>
            <div>
              <h4 className="text-xl font-black text-black leading-none">Jain Traders Inc.</h4>
              <p className="text-[12px] text-[#c5a059] font-black uppercase tracking-[0.2em] mt-1">Quality in Every Grain</p>
            </div>
          </div>
          
          <div className="text-lg text-black font-bold space-y-3 mb-10 border-l-4 border-[#c5a059] pl-6">
            <p className="font-black text-black uppercase tracking-wider text-xs opacity-50">Headquarters</p>
            <p>Janpad Complex, Main Road</p>
            <p>Bemetara, Chhattisgarh 491335</p>
          </div>
          
          <a 
            href={mapsUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 w-full py-5 bg-black text-white text-xs font-black uppercase tracking-[0.4em] rounded-2xl group hover:bg-[#c5a059] transition-all shadow-xl"
          >
            Open Google Maps
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </a>
        </div>
        {/* Pointer Triangle */}
        <div className="w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-t-[25px] border-t-white mx-auto filter drop-shadow-2xl"></div>
      </div>

      {/* Blue Dot Pin */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="absolute inset-0 w-16 h-16 -left-5 -top-5 bg-blue-500 rounded-full animate-ping opacity-30"></div>
          <div className="w-8 h-8 bg-blue-700 rounded-full border-4 border-white shadow-[0_0_30px_rgba(0,0,0,0.3)] relative z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
