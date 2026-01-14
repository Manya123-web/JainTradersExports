import React from "react";

const MapSection: React.FC = () => {
  const query = encodeURIComponent(
    "JAIN TRADERS, PARPODI, Bemetara, Chhattisgarh 491993"
  );

  const embedUrl = `https://www.google.com/maps?q=${query}&output=embed&z=15&iwloc=near&disableDefaultUI=1`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;

  return (
    <section className="relative w-full h-full bg-[#f4f4f4] overflow-hidden">
      {/* Google Map (background only) */}
      <div className="absolute inset-0 z-0">
        <iframe
          src={embedUrl}
          title="Jain Traders Location"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0 pointer-events-none"
        />
      </div>

      {/* Floating Custom Card */}
      <div
        className="
          absolute z-20
          top-4 sm:top-6 md:top-8
          left-1/2 md:left-6 lg:left-8
          -translate-x-1/2 md:translate-x-0
          w-[92%] sm:w-[85%] md:w-[320px]
          max-w-[360px]
        "
      >
        <div className="bg-white p-5 md:p-6 lg:p-8 rounded-xl md:rounded-2xl lg:rounded-[2rem] border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:scale-[1.03]">
          {/* Header */}
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center text-[#c5a059] serif italic text-2xl font-bold shadow-md">
              J
            </div>
            <div className="min-w-0">
              <h4 className="font-bold text-[#1a1a1a] truncate">
                Jain Traders
              </h4>
              <p className="text-[11px] uppercase tracking-[0.15em] font-black text-[#c5a059] truncate">
                Quality that ships
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="border-l-2 border-[#c5a059] pl-4 mb-6 space-y-1 text-sm font-medium text-gray-800">
            <p className="uppercase tracking-widest text-[11px] font-bold text-[#1a1a1a]">
              Parpodi Facility
            </p>
            <p>Main Market Area</p>
            <p>Bemetara, Chhattisgarh 491993</p>
          </div>

          {/* CTA */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 py-4 bg-[#1a1a1a] text-white text-[11px] uppercase tracking-[0.25em] font-black rounded-xl hover:bg-[#c5a059] transition-all duration-300"
          >
            <span>Navigate Now</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
