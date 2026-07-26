import React from 'react';
import { CheckCircle2, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-bebas text-5xl sm:text-6xl text-black dark:text-[#F7F4EB] tracking-wider uppercase">
            THE BACKSTORY
          </h2>
          <div className="flex-1 h-1 bg-black dark:bg-[#3A3A3A]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Side: Photo Frame Container */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white dark:bg-[#161616] border-[3px] border-black dark:border-[#3A3A3A] shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#3A3A3A] p-4">
              <div className="w-full aspect-[4/3] bg-[#EAE5D9] dark:bg-[#111111] border-2 border-black dark:border-[#3A3A3A] overflow-hidden relative flex items-center justify-center">
                <img
                  src="/assets/profile.jpg"
                  alt="Harshil Patel"
                  className="w-full h-full object-cover object-top filter contrast-105 hover:scale-105 transition-all duration-300"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop";
                  }}
                />
              </div>

              <div className="bg-[#F7F4EB] dark:bg-[#0D0D0D] border-2 border-black dark:border-[#3A3A3A] p-3.5 mt-4 text-center">
                <h3 className="font-bebas text-3xl text-black dark:text-[#F7F4EB] tracking-wide">
                  HARSHIL PATEL
                </h3>
                <p className="font-mono text-xs font-bold text-black/70 dark:text-[#A1A1A1] tracking-wider uppercase">
                  3rd SEMESTER B.TECH CSE STUDENT
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Authentic Student Narrative & Focus Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
            
            {/* Authentic Narrative */}
            <div className="bg-white dark:bg-[#161616] border-[3px] border-black dark:border-[#3A3A3A] shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#3A3A3A] p-6 sm:p-8 space-y-4">
              <h3 className="font-bebas text-3xl text-black dark:text-[#F7F4EB] tracking-wide border-b-2 border-black dark:border-[#2A2A2A] pb-2">
                ACADEMIC &amp; DEVELOPER JOURNEY
              </h3>

              <p className="font-sans text-base font-medium text-black/85 dark:text-[#A1A1A1] leading-relaxed">
                I am a 3rd Semester B.Tech Computer Science Engineering student with a strong passion for full stack web development and software architecture.
              </p>
              
              <p className="font-sans text-base font-medium text-black/85 dark:text-[#A1A1A1] leading-relaxed">
                I spend my time building real-world MERN stack web applications, competing in hackathons, and continuously learning new technologies. Currently, I am expanding my skill set into Artificial Intelligence (AI) and Machine Learning (ML).
              </p>
            </div>

            {/* 2 Highlight Box Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Highlight Card 1: Genuine Highlights */}
              <div className="bg-white dark:bg-[#161616] border-[3px] border-black dark:border-[#3A3A3A] shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#3A3A3A] p-6">
                <h4 className="font-mono text-xs font-bold tracking-widest text-black/60 dark:text-[#A1A1A1] uppercase mb-4 pb-2 border-b-2 border-black dark:border-[#2A2A2A]">
                  REAL HIGHLIGHTS
                </h4>
                <ul className="space-y-3 font-mono text-xs font-bold text-black dark:text-[#F7F4EB]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#FF5733] flex-shrink-0" />
                    3rd Semester B.Tech CSE
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#FF5733] flex-shrink-0" />
                    MERN Stack Web Developer
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#FF5733] flex-shrink-0" />
                    Hackathon Participant &amp; Builder
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#FF5733] flex-shrink-0" />
                    LeetCode Problem Solver
                  </li>
                </ul>
              </div>

              {/* Highlight Card 2: Current Focus */}
              <div className="bg-[#2EC4B6] border-[3px] border-black dark:border-[#3A3A3A] shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#3A3A3A] p-6 flex flex-col justify-between">
                <div>
                  <h4 className="font-mono text-xs font-bold tracking-widest text-black uppercase mb-4 pb-2 border-b-2 border-black flex items-center gap-1.5">
                    <BookOpen size={14} /> CURRENT FOCUS
                  </h4>
                  <p className="font-sans text-sm font-bold text-black leading-relaxed">
                    Mastering core computer science fundamentals, building scalable web projects, and exploring Artificial Intelligence &amp; Machine Learning applications.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t-2 border-black font-mono text-[10px] font-bold text-black uppercase flex items-center justify-between">
                  <span>STATUS</span>
                  <span className="bg-white px-2 py-0.5 border border-black">ACTIVE LEARNING</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
