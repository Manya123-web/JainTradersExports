
import React, { useState } from 'react';

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [activeField, setActiveField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Inquiry sent successfully. Our trade desk will contact you soon.');
  };

  const inputContainerClass = "relative mb-4";
  const labelClass = (field: string) => `absolute left-4 transition-all duration-200 pointer-events-none text-[10px] font-black uppercase tracking-widest ${
    activeField === field || formData[field as keyof typeof formData]
      ? "-top-2 bg-white px-2 text-[#c5a059] z-10"
      : "top-4 text-gray-400"
  }`;

  const inputClass = "w-full bg-white border border-gray-200 rounded-xl py-4 px-4 focus:border-[#c5a059] outline-none transition-all text-sm font-bold text-black serif";

  return (
    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.08)] border border-gray-50 w-full max-w-lg">
      <div className="mb-10">
        <h3 className="text-3xl font-bold text-black serif italic mb-2">Get in Touch</h3>
        <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Global Partner Inquiries</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="grid grid-cols-2 gap-4">
          <div className={inputContainerClass}>
            <label className={labelClass('firstName')}>First Name</label>
            <input 
              type="text" 
              className={inputClass}
              required
              onFocus={() => setActiveField('firstName')}
              onBlur={() => setActiveField(null)}
              value={formData.firstName}
              onChange={e => setFormData({...formData, firstName: e.target.value})}
            />
          </div>
          <div className={inputContainerClass}>
            <label className={labelClass('lastName')}>Last Name</label>
            <input 
              type="text" 
              className={inputClass}
              required
              onFocus={() => setActiveField('lastName')}
              onBlur={() => setActiveField(null)}
              value={formData.lastName}
              onChange={e => setFormData({...formData, lastName: e.target.value})}
            />
          </div>
        </div>
        
        <div className={inputContainerClass}>
          <label className={labelClass('email')}>Email Address</label>
          <input 
            type="email" 
            className={inputClass}
            required
            onFocus={() => setActiveField('email')}
            onBlur={() => setActiveField(null)}
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
          />
        </div>

        <div className="flex gap-4">
          <div className="w-24 relative mb-4">
             <label className="absolute left-4 -top-2 bg-white px-2 text-[8px] font-black uppercase tracking-widest text-gray-400 z-10">Ext</label>
             <select className={inputClass + " appearance-none cursor-pointer pr-10"}>
                <option>+91</option>
                <option>+1</option>
                <option>+44</option>
             </select>
             <svg className="w-3 h-3 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
          </div>
          <div className={inputContainerClass + " flex-1"}>
            <label className={labelClass('phone')}>Phone Number</label>
            <input 
              type="tel" 
              className={inputClass}
              required
              onFocus={() => setActiveField('phone')}
              onBlur={() => setActiveField(null)}
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
            />
          </div>
        </div>

        <div className={inputContainerClass}>
          <label className={labelClass('message')}>Requirements</label>
          <textarea 
            rows={4}
            className={inputClass + " resize-none"}
            required
            onFocus={() => setActiveField('message')}
            onBlur={() => setActiveField(null)}
            value={formData.message}
            onChange={e => setFormData({...formData, message: e.target.value})}
          />
        </div>

        <button 
          type="submit"
          className="w-full py-5 bg-black text-white font-black uppercase tracking-[0.4em] text-[10px] rounded-xl hover:bg-[#c5a059] transition-all shadow-xl active:scale-95"
        >
          Submit Inquiry
        </button>

        <p className="text-[9px] text-gray-400 text-center uppercase font-black tracking-widest mt-6">
          © Secure Trade Access Point
        </p>
      </form>
    </div>
  );
};

export default ContactFormSection;
