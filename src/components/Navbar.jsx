import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sun, Moon } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'ACADEMICS', href: '#academics' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const RESUME_URL = "https://drive.google.com/file/d/1fY528YIw2HERsLX2stcFgaSFXrPOv8q_/view?usp=sharing";

  const handleThemeToggle = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#F7F4EB]/95 dark:bg-[#0D0D0D]/95 border-b-[3px] border-black dark:border-[#3A3A3A] py-3 shadow-md backdrop-blur-md' 
        : 'bg-[#F7F4EB] dark:bg-[#0D0D0D] py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-1 group">
          <span className="font-bebas text-3xl md:text-4xl tracking-wider text-black dark:text-[#F7F4EB] group-hover:text-[#FF5733] transition-colors">
            HARSHIL
          </span>
          <span className="w-2.5 h-2.5 bg-[#FF5733] border-2 border-black dark:border-[#3A3A3A] inline-block mt-2"></span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs font-bold tracking-widest text-black dark:text-[#F7F4EB]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#FF5733] dark:hover:text-[#FF5733] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF5733] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions (Theme Switcher + Resume Button) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Light / Dark Mode Toggle */}
          <button
            type="button"
            onClick={handleThemeToggle}
            className="brutal-btn p-2.5 bg-[#FFC72C] dark:bg-[#8B5CF6] text-black dark:text-[#F7F4EB] flex items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-95"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <Sun size={18} className="text-yellow-300" />
            ) : (
              <Moon size={18} className="text-black" />
            )}
          </button>

          {/* Resume CTA */}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-btn px-5 py-2 bg-[#2EC4B6] text-black font-mono text-xs font-bold tracking-wider uppercase flex items-center gap-2"
          >
            <FileText size={14} />
            RESUME
          </a>
        </div>

        {/* Mobile Menu Toggle & Theme Switcher */}
        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={handleThemeToggle}
            className="brutal-btn p-2 bg-[#FFC72C] dark:bg-[#8B5CF6] text-black dark:text-[#F7F4EB] cursor-pointer"
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <Sun size={20} className="text-yellow-300" />
            ) : (
              <Moon size={20} className="text-black" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="brutal-btn p-2 bg-[#FF5733] text-black cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b-[3px] border-black dark:border-[#3A3A3A] bg-[#F7F4EB] dark:bg-[#161616] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-mono text-sm font-bold text-black dark:text-[#F7F4EB] hover:text-[#FF5733] py-2 border-b border-black/10 dark:border-[#2A2A2A]"
            >
              {link.name}
            </a>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="brutal-btn mt-2 py-3 bg-[#2EC4B6] text-black font-mono text-xs font-bold text-center uppercase flex items-center justify-center gap-2"
          >
            <FileText size={16} />
            RESUME
          </a>
        </div>
      )}
    </header>
  );
}
