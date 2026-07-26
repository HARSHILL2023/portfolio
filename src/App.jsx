import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experiments from './components/Experiments';
import Skills from './components/Skills';
import Education from './components/Education';
import FigmaShowcase from './components/FigmaShowcase';
import GamesSection from './components/GamesSection';
import HackathonSection from './components/HackathonSection';
import Certifications from './components/Certifications';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Sync with the inline script in index.html that already set the class
    return document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#F7F4EB] dark:bg-[#0D0D0D] text-[#121212] dark:text-[#F7F4EB] font-sans selection:bg-[#FF5733] selection:text-white transition-colors duration-300">
      {/* Top Navbar with Light/Dark Theme Switcher */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section (Student & Terminal Dashboard) */}
        <Hero />

        {/* 2. The Backstory (About, Photo & Social Profile Panel) */}
        <About />

        {/* 3. Selected Work (3 Real Projects) */}
        <Projects />

        {/* 4. Other Experiments (Research Utilities & Mini Games) */}
        <Experiments />

        {/* 5. Expertise & Skills (Real Skills + Currently Learning AI/ML) */}
        <Skills />

        {/* 6. Academics (3rd Semester B.Tech CSE) */}
        <Education />

        {/* 7. Design Portfolio (Figma Showcase) */}
        <FigmaShowcase />

        {/* 8. Game Dev (Interactive Games) */}
        <GamesSection />

        {/* 9. Hackathons (Competitive Submissions) */}
        <HackathonSection />

        {/* 10. Certifications & Honors */}
        <Certifications />

        {/* 11. Contact & CTA Banner */}
        <ContactSection />
      </main>

      {/* Footer & Back to Top */}
      <Footer />
    </div>
  );
}

export default App;
