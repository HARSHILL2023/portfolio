import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const RESUME_URL = "https://drive.google.com/file/d/1fY528YIw2HERsLX2stcFgaSFXrPOv8q_/view?usp=sharing";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all fields before sending.');
      return;
    }

    setIsSubmitting(true);
    setStatus(null);
    setErrorMessage('');

    // EmailJS Credentials
    const SERVICE_ID = 'service_8ll3v9u';
    const TEMPLATE_ID = 'template_6mly7jn';
    const PUBLIC_KEY = 'dzlyz-rysoAExUJmu';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('Email Transmission Error:', error);
        setStatus('error');
        setErrorMessage('Message transmission failed. Please try again.');
        setIsSubmitting(false);
      });
  };

  const socialBadges = [
    { label: 'GITHUB ->', href: 'https://github.com/HARSHILL2023', bg: 'bg-[#FF5733]' },
    { label: 'LINKEDIN ->', href: 'https://www.linkedin.com/in/harshil-patel-b00063395/', bg: 'bg-[#2EC4B6]' },
    { label: 'LEETCODE ->', href: 'https://leetcode.com/u/harshilPatel2301/', bg: 'bg-[#FFC72C]' },
    { label: 'YOUTUBE ->', href: 'https://youtube.com/@harshilpatel-20?si=L9HrbJJDXA0dCqUG', bg: 'bg-[#8B5CF6]' },
    { label: 'RESUME ->', href: RESUME_URL, bg: 'bg-[#FF5733]' },
  ];

  return (
    <section id="contact" className="py-20 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero CTA Banner */}
        <div className="bg-white dark:bg-[#161616] border-[3px] border-black dark:border-[#3A3A3A] shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#3A3A3A] p-8 sm:p-14 text-center mb-16 relative overflow-hidden">
          <span className="font-mono text-xs font-bold tracking-widest text-black/60 dark:text-[#A1A1A1] uppercase block mb-4">
            START A CONVERSATION
          </span>

          <h2 className="font-bebas text-6xl sm:text-8xl md:text-9xl text-black dark:text-[#F7F4EB] leading-none uppercase tracking-tight mb-4">
            READY TO <span className="text-[#FF5733]">BUILD SOMETHING?</span>
          </h2>

          <p className="font-sans text-base sm:text-xl font-medium text-black/80 dark:text-[#A1A1A1] max-w-2xl mx-auto leading-relaxed mb-8">
            Interested in collaborating on web projects, open-source ideas, or tech discussions? Reach out directly or drop a message below.
          </p>

          <a
            href="#contact-form"
            className="brutal-btn inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-[#FF5733] text-black font-bebas text-3xl sm:text-4xl tracking-wider uppercase shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#3A3A3A]"
          >
            GET IN TOUCH
            <ArrowUpRight size={32} />
          </a>

          {/* Social Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-10 pt-8 border-t-2 border-black dark:border-[#2A2A2A]">
            {socialBadges.map((badge) => (
              <a
                key={badge.label}
                href={badge.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`brutal-btn px-4 py-2 border-2 border-black dark:border-[#3A3A3A] font-mono text-xs font-bold text-black uppercase ${badge.bg}`}
              >
                {badge.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form & Direct Signals */}
        <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Signals */}
          <div className="lg:col-span-5 bg-white dark:bg-[#161616] border-[3px] border-black dark:border-[#3A3A3A] shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#3A3A3A] p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-bebas text-4xl text-black dark:text-[#F7F4EB] tracking-wide mb-2">
                DIRECT CONTACT
              </h3>
              <p className="font-sans text-sm font-medium text-black/70 dark:text-[#A1A1A1] leading-relaxed mb-8 pb-4 border-b-2 border-black dark:border-[#2A2A2A]">
                Have a project, hackathon collaboration, or technical query? Send a message directly.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#FF5733] border-2 border-black dark:border-[#3A3A3A] text-black">
                    <Mail size={22} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold text-black/50 dark:text-[#A1A1A1] uppercase block">EMAIL ADDRESS</span>
                    <a href="mailto:harshil.hkptael@gmail.com" className="font-mono text-sm font-bold text-black dark:text-[#F7F4EB] hover:text-[#FF5733]">
                      harshil.hkptael@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#2EC4B6] border-2 border-black dark:border-[#3A3A3A] text-black">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold text-black/50 dark:text-[#A1A1A1] uppercase block">LOCATION</span>
                    <span className="font-mono text-sm font-bold text-black dark:text-[#F7F4EB]">
                      Gujarat, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t-2 border-black dark:border-[#2A2A2A] font-mono text-xs font-bold text-black/60 dark:text-[#A1A1A1] uppercase flex items-center justify-between">
              <span>STATUS</span>
              <span className="text-[#FF5733]">OPEN FOR PROJECTS</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#161616] border-[3px] border-black dark:border-[#3A3A3A] shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#3A3A3A] p-8">
            <h3 className="font-bebas text-4xl text-black dark:text-[#F7F4EB] tracking-wide mb-6 pb-2 border-b-2 border-black dark:border-[#2A2A2A]">
              SEND A MESSAGE
            </h3>

            <form onSubmit={sendEmail} className="space-y-5">
              <div>
                <label className="font-mono text-xs font-bold text-black dark:text-[#F7F4EB] uppercase block mb-2">
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full bg-[#F7F4EB] dark:bg-[#0D0D0D] border-2 border-black dark:border-[#3A3A3A] p-3.5 font-sans font-bold text-black dark:text-[#F7F4EB] placeholder:text-black/40 dark:placeholder:text-[#A1A1A1] focus:outline-none focus:bg-white dark:focus:bg-[#161616] transition-colors"
                />
              </div>

              <div>
                <label className="font-mono text-xs font-bold text-black dark:text-[#F7F4EB] uppercase block mb-2">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="name@company.com"
                  className="w-full bg-[#F7F4EB] dark:bg-[#0D0D0D] border-2 border-black dark:border-[#3A3A3A] p-3.5 font-sans font-bold text-black dark:text-[#F7F4EB] placeholder:text-black/40 dark:placeholder:text-[#A1A1A1] focus:outline-none focus:bg-white dark:focus:bg-[#161616] transition-colors"
                />
              </div>

              <div>
                <label className="font-mono text-xs font-bold text-black dark:text-[#F7F4EB] uppercase block mb-2">
                  MESSAGE *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full bg-[#F7F4EB] dark:bg-[#0D0D0D] border-2 border-black dark:border-[#3A3A3A] p-3.5 font-sans font-bold text-black dark:text-[#F7F4EB] placeholder:text-black/40 dark:placeholder:text-[#A1A1A1] focus:outline-none focus:bg-white dark:focus:bg-[#161616] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="brutal-btn w-full py-4 bg-[#FF5733] text-black font-bebas text-2xl tracking-wider uppercase flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#3A3A3A]"
              >
                {isSubmitting ? (
                  <span className="font-mono text-sm font-bold animate-pulse">TRANSMITTING...</span>
                ) : (
                  <>
                    SEND MESSAGE
                    <Send size={20} />
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-[#2EC4B6] border-2 border-black dark:border-[#3A3A3A] font-mono text-xs font-bold text-black flex items-center gap-2">
                  <CheckCircle2 size={18} />
                  MESSAGE SENT SUCCESSFULLY! I WILL GET BACK TO YOU SOON.
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-400 border-2 border-black dark:border-[#3A3A3A] font-mono text-xs font-bold text-black flex items-center gap-2">
                  <AlertCircle size={18} />
                  {errorMessage || 'TRANSMISSION FAILED. PLEASE TRY AGAIN.'}
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
