import React, { useState } from 'react';

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+91',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [activeField, setActiveField] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
  };

  const validateField = (name: string, value: string) => {
    let error = '';
    
    switch(name) {
      case 'firstName':
      case 'lastName':
        if (!value.trim()) {
          error = 'This field is required';
        } else if (value.length < 2) {
          error = 'Must be at least 2 characters';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!validateEmail(value)) {
          error = 'Please enter a valid email';
        }
        break;
      case 'phone':
        if (!value.trim()) {
          error = 'Phone number is required';
        } else if (!validatePhone(value)) {
          error = 'Please enter a valid phone number (10-15 digits)';
        }
        break;
      case 'message':
        if (!value.trim()) {
          error = 'Message is required';
        } else if (value.length < 10) {
          error = 'Message must be at least 10 characters';
        }
        break;
    }
    
    setErrors(prev => ({ ...prev, [name]: error }));
    return error === '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof typeof errors]) {
      validateField(name, value);
    }
  };

  const handleBlur = (name: string, value: string) => {
    setActiveField(null);
    validateField(name, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const fields = ['firstName', 'lastName', 'email', 'phone', 'message'];
    let isValid = true;
    
    fields.forEach(field => {
      if (!validateField(field, formData[field as keyof typeof formData] as string)) {
        isValid = false;
      }
    });
    
    if (isValid) {
      const subject = encodeURIComponent('New Inquiry from Jain Traders Website');
      const body = encodeURIComponent(
        `New Contact Form Submission\n\n` +
        `Name: ${formData.firstName} ${formData.lastName}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.countryCode} ${formData.phone}\n\n` +
        `Requirements:\n${formData.message}\n\n` +
        `---\n` +
        `This inquiry was submitted through the Jain Traders contact form.`
      );
      
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=Raja.lodha6261@gmail.com&su=${subject}&body=${body}`, '_blank');
    }
  };

  const inputContainerClass = "relative mb-4";
  const labelClass = (field: string) => `absolute left-4 transition-all duration-200 pointer-events-none text-[10px] font-black uppercase tracking-widest ${
    activeField === field || formData[field as keyof typeof formData]
      ? "-top-2 bg-white px-2 text-[#c5a059] z-10"
      : "top-4 text-gray-400"
  }`;

  const inputClass = (hasError: boolean) => `w-full bg-white border ${hasError ? 'border-red-400' : 'border-gray-200'} rounded-xl py-4 px-4 focus:border-[#c5a059] outline-none transition-all text-sm font-bold text-black serif`;

  return (
    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.08)] border border-gray-50 w-full max-w-lg">
      <div className="mb-10">
        <h3 className="text-3xl font-bold text-black serif italic mb-2">Get in Touch</h3>
        <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Global Partner Inquiries</p>
      </div>

      <div className="space-y-2">
        <div className="grid grid-cols-2 gap-4">
          <div className={inputContainerClass}>
            <label className={labelClass('firstName')}>First Name</label>
            <input 
              type="text"
              name="firstName"
              className={inputClass(!!errors.firstName)}
              onFocus={() => setActiveField('firstName')}
              onBlur={(e) => handleBlur('firstName', e.target.value)}
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className="text-red-500 text-[9px] mt-1 ml-1">{errors.firstName}</p>}
          </div>
          <div className={inputContainerClass}>
            <label className={labelClass('lastName')}>Last Name</label>
            <input 
              type="text"
              name="lastName"
              className={inputClass(!!errors.lastName)}
              onFocus={() => setActiveField('lastName')}
              onBlur={(e) => handleBlur('lastName', e.target.value)}
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className="text-red-500 text-[9px] mt-1 ml-1">{errors.lastName}</p>}
          </div>
        </div>
        
        <div className={inputContainerClass}>
          <label className={labelClass('email')}>Email Address</label>
          <input 
            type="email"
            name="email"
            className={inputClass(!!errors.email)}
            onFocus={() => setActiveField('email')}
            onBlur={(e) => handleBlur('email', e.target.value)}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-[9px] mt-1 ml-1">{errors.email}</p>}
        </div>

        <div className="flex gap-4">
          <div className="w-24 relative mb-4">
             <label className="absolute left-4 -top-2 bg-white px-2 text-[8px] font-black uppercase tracking-widest text-gray-400 z-10">Ext</label>
             <select 
               name="countryCode"
               value={formData.countryCode}
               onChange={handleChange}
               className={inputClass(false) + " appearance-none cursor-pointer pr-10"}
             >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
             </select>
             <svg className="w-3 h-3 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
          </div>
          <div className={inputContainerClass + " flex-1"}>
            <label className={labelClass('phone')}>Phone Number</label>
            <input 
              type="tel"
              name="phone"
              className={inputClass(!!errors.phone)}
              onFocus={() => setActiveField('phone')}
              onBlur={(e) => handleBlur('phone', e.target.value)}
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="text-red-500 text-[9px] mt-1 ml-1">{errors.phone}</p>}
          </div>
        </div>

        <div className={inputContainerClass}>
          <label className={labelClass('message')}>Requirements</label>
          <textarea 
            rows={4}
            name="message"
            className={inputClass(!!errors.message) + " resize-none"}
            onFocus={() => setActiveField('message')}
            onBlur={(e) => handleBlur('message', e.target.value)}
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="text-red-500 text-[9px] mt-1 ml-1">{errors.message}</p>}
        </div>

        <button 
          onClick={handleSubmit}
          type="button"
          className="w-full py-5 bg-black text-white font-black uppercase tracking-[0.4em] text-[10px] rounded-xl hover:bg-[#c5a059] transition-all shadow-xl active:scale-95"
        >
          Submit Inquiry
        </button>

        <p className="text-[9px] text-gray-400 text-center uppercase font-black tracking-widest mt-6">
          © Secure Trade Access Point
        </p>
      </div>
    </div>
  );
};

export default ContactFormSection;