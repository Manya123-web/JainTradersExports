
import React, { useState } from 'react';

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Inquiry sent successfully. Our trade desk will contact you soon.');
  };

  const inputClass = "w-full bg-[#fdfdfd] border-2 border-gray-300 rounded-2xl py-6 px-8 focus:border-[#c5a059] outline-none transition-all text-2xl font-bold placeholder:text-gray-600 text-black serif";

  return (
    <div className="bg-white p-14 md:p-20 rounded-[4rem] shadow-[0_80px_160px_rgba(0,0,0,0.15)] border border-gray-100 relative">
      {/* Decorative Gold Corner */}
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#c5a059] rounded-[3rem] -z-10 rotate-12 opacity-40 shadow-2xl"></div>

      <div className="mb-14">
        <h3 className="text-6xl font-black serif text-black mb-4 italic leading-tight">Get in Touch</h3>
        <p className="text-black text-2xl font-bold serif italic opacity-70">Direct Channel to Excellence</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="grid grid-cols-2 gap-8">
          <input 
            type="text" 
            placeholder="First name"
            className={inputClass}
            required
            value={formData.firstName}
            onChange={e => setFormData({...formData, firstName: e.target.value})}
          />
          <input 
            type="text" 
            placeholder="Last name"
            className={inputClass}
            required
            value={formData.lastName}
            onChange={e => setFormData({...formData, lastName: e.target.value})}
          />
        </div>
        
        <div className="relative">
          <span className="absolute left-8 top-1/2 -translate-y-1/2 text-black">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          </span>
          <input 
            type="email" 
            placeholder="Your email address"
            className={inputClass + " pl-20"}
            required
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
          />
        </div>

        <div className="flex gap-8">
          <div className="w-48 relative">
             <select className={inputClass + " appearance-none cursor-pointer pr-12"}>
                <option>+91 (IN)</option>
                <option>+1 (US)</option>
                <option>+44 (UK)</option>
                <option>+971 (UAE)</option>
             </select>
             <svg className="w-6 h-6 absolute right-8 top-1/2 -translate-y-1/2 text-black pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
          </div>
          <input 
            type="tel" 
            placeholder="Phone number"
            className={inputClass}
            required
            value={formData.phone}
            onChange={e => setFormData({...formData, phone: e.target.value})}
          />
        </div>

        <div>
          <textarea 
            rows={5}
            placeholder="Describe your requirements in detail..."
            className={inputClass + " resize-none"}
            required
            value={formData.message}
            onChange={e => setFormData({...formData, message: e.target.value})}
          />
          <p className="text-sm text-right text-black mt-6 tracking-widest font-black uppercase opacity-60">Strictly Confidential Sourcing Dialogue</p>
        </div>

        <button 
          type="submit"
          className="group relative w-full py-9 bg-black text-white font-black uppercase tracking-[0.7em] text-sm rounded-[2rem] overflow-hidden transition-all shadow-2xl hover:bg-[#c5a059] active:scale-95"
        >
          <span className="relative z-10">Initiate Dialogue</span>
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>

        <p className="text-xs text-black text-center px-8 leading-relaxed font-black tracking-widest uppercase opacity-90">
          Global Partners trust Jain Traders for <span className="text-black border-b-4 border-[#c5a059]">Transparent Trade</span> and <span className="text-black border-b-4 border-[#c5a059]">Reliable Supply</span>
        </p>
      </form>
    </div>
  );
};

export default ContactFormSection;
