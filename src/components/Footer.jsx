import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'ACADEMICS', href: '#academics' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <footer className="bg-white dark:bg-[#161616] border-t-[3px] border-black dark:border-[#3A3A3A] py-10 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <a href="#" className="flex items-center gap-1 group">
            <span className="font-bebas text-3xl tracking-wider text-black dark:text-[#F7F4EB] group-hover:text-[#FF5733] transition-colors">
              HARSHIL
            </span>
            <span className="w-2 h-2 bg-[#FF5733] border border-black dark:border-[#3A3A3A] inline-block mt-2"></span>
          </a>
          <p className="font-mono text-xs font-bold text-black/60 dark:text-[#A1A1A1] uppercase">
            &copy; {new Date().getFullYear()} HARSHIL PATEL. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Center: Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs font-bold tracking-widest text-black dark:text-[#F7F4EB]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#FF5733] dark:hover:text-[#FF5733] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Side: Back To Top Button */}
        <button
          onClick={scrollToTop}
          className="brutal-btn px-4 py-2 bg-[#2EC4B6] text-black font-mono text-xs font-bold tracking-wider uppercase flex items-center gap-1"
          title="Scroll Back To Top"
        >
          TOP <ArrowUp size={16} />
        </button>

      </div>
    </footer>
  );
}
