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

      {/* Floating Custom Card - Overlapping Google's default popup */}
      <div
        className="
          absolute z-[9999]
          top-2 sm:top-3 md:top-4
          left-2 sm:left-3 md:left-4
          w-[260px] sm:w-[280px] md:w-[300px]
        "
      >
        <div className="bg-white p-4 md:p-5 rounded-lg md:rounded-xl border border-gray-200 shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:scale-[1.02]">
          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-[#c5a059] serif italic text-xl font-bold shadow-sm">
              J
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="font-bold text-sm text-[#1a1a1a] truncate">
                Jain Traders
              </h4>
              <p className="text-[10px] uppercase tracking-[0.15em] font-black text-[#c5a059] truncate">
                Quality that ships
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="border-l-2 border-[#c5a059] pl-3 mb-3 space-y-0.5 text-xs font-medium text-gray-700">
            <p className="uppercase tracking-wide text-[10px] font-bold text-[#1a1a1a]">
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
            className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#1a1a1a] text-white text-[10px] uppercase tracking-[0.2em] font-black rounded-lg hover:bg-[#c5a059] transition-all duration-300 group"
          >
            <span>Navigate Now</span>
            <svg
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
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